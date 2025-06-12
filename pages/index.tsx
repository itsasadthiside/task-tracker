'use client';
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Task {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching tasks:", error);
    else setTasks(data || []);
  };

  const addTask = async () => {
    if (!title) return alert("Please enter a title");
    const { error } = await supabase.from("tasks").insert([{ title, description }]);
    if (error) return alert("Error adding task");
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const startEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || "");
  };

  const updateTask = async () => {
    if (!editTitle) return alert("Title cannot be empty");
    const { error } = await supabase
      .from("tasks")
      .update({ title: editTitle, description: editDescription })
      .eq("id", editingTaskId);

    if (error) alert("Error updating task");
    else {
      setEditingTaskId(null);
      fetchTasks();
    }
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) alert("Error deleting task");
    else fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">📝 Task Tracker</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border">
          <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={addTask}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
          >
            ➕ Add Task
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">📋 Your Tasks</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
              >
                {editingTaskId === task.id ? (
                  <>
                    <input
                      className="w-full px-3 py-2 border rounded mb-2 focus:ring-2 focus:ring-blue-300"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                      className="w-full px-3 py-2 border rounded mb-2 focus:ring-2 focus:ring-blue-300"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={updateTask}
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                      >
                        💾 Save
                      </button>
                      <button
                        onClick={() => setEditingTaskId(null)}
                        className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    {task.description && (
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(task.created_at).toLocaleString()}
                    </p>
                    <div className="flex gap-4 mt-3">
                      <button
                        onClick={() => startEdit(task)}
                        className="text-blue-600 font-medium hover:underline"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-600 font-medium hover:underline"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
