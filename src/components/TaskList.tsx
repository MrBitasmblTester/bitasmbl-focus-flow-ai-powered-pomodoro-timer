import React, { useState } from 'react';
import classNames from 'classnames';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Task List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-1"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className={classNames(
            "px-3 py-1 rounded text-white",
            newTask.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          )}
          onClick={handleAddTask}
          disabled={!newTask.trim()}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-1"
          >
            <span>{task}</span>
            <button
              className="text-red-500 text-sm hover:underline"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">No tasks yet.</p>
      )}
    </div>
  );
};

export default TaskList;
