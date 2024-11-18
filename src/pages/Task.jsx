import { useState } from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
  const name = 'Anisa';
  const profileUrl = '../../public/profile.jpg';
  const listTasks = [
    { id: 1, description: 'To study React fundamentals', done: false },
    { id: 2, description: 'Learn on LMS', done: false },
    { id: 3, description: 'Take attendance according to progress in LMS', done: false },
    { id: 4, description: 're-watch the class record results', done: false },
    { id: 5, description: 'Doing research assignments in research methods courses', done: false },
  ];

  const [tasks, setTasks] = useState(listTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { id: tasks.length + 1, description: newTask, done: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="grid grid-cols-1 gap-y-4 sm:gap-4 justify-center items-center sm:grid-cols-4 sm:max-w-5xl ">
      <div className="h-full bg-white flex flex-col justify-center items-center max-w-xs sm:max-w-md px-6 py-8 sm:px-10 sm:py-10 rounded-[20px] space-y-4 shadow-md hover:border hover:border-purple-500 transition duration-300">
        <img className="w-24 h-24 sm:w-28 sm:h-28 rounded-full hover:scale-105 transition duration-100" src={profileUrl} />
        <h5 className="text-center">
          Welcome Back, <span className="font-semibold">{name}</span>
        </h5>
        <Link to="/UpdateProfile">
          <button className="w-full flex justify-center items-center text-white bg-purple-100 hover:bg-purple-200 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 hover:scale-102 transition duration-500">
            <svg className="w-5 h-5 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-purple-600 font-medium">Edit Profile</p>
          </button>
        </Link>
        <Link to="/">
          <button className="w-full flex justify-center items-center text-white bg-purple-600 hover:bg-purple-600 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 hover:scale-102 transition duration-500">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 19V5h4a1 1 0 0 1 1 1v11h1a1 1 0 0 1 0 2h-6Z" />
              <path fillRule="evenodd" d="M12 4.571a1 1 0 0 0-1.275-.961l-5 1.428A1 1 0 0 0 5 6v11H4a1 1 0 0 0 0 2h1.86l4.865 1.39A1 1 0 0 0 12 19.43V4.57ZM10 11a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1Z" clipRule="evenodd" />
            </svg>
            <p>Log Out</p>
          </button>
        </Link>
      </div>
      <div className="bg-white col-span-3 flex flex-col max-w-xs sm:max-w-5xl px-6 py-8 sm:px-10 sm:py-10 rounded-[20px] space-y-12 shadow-md hover:border hover:border-purple-500 transition duration-300">
        <div className="flex space-x-2">
          <input
            type="text"
            name="task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-purple-50 border border-purple-300 text-purple-500 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Add a new task"
            required=""
          />
          <button onClick={handleAddTask} className="bg-purple-500 px-2 rounded-xl">
            <svg className="w-6 h-6 text-white hover:scale-110 transition duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <h5>Task to do - {tasks.filter((task) => !task.done).length}</h5>
          {tasks
            .filter((task) => !task.done)
            .map((task) => (
              <div key={task.id} className="flex justify-between items-center p-4 mb-4 bg-purple-50 text-grey-700 rounded-xl hover:border hover:border-purple-500 transition duration-300">
                <p className="text-sm font-medium">{task.description}</p>
                <div className="flex flex-row space-x-2 sm:space-x-4">
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5  text-purple-300 rounded-lg p-1.5  inline-flex items-center justify-center h-8 w-8 hover:opacity-70 transition duration-300 ease-in-out"
                    data-dismiss-target="#alert-1"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d= "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5  text-purple-700 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 hover:opacity-70 transition duration-300 ease-in-out"
                    data-dismiss-target="#alert-1"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col space-y-3">
          <h5>Done - {tasks.filter((task) => task.done).length}</h5>
          {tasks
            .filter((task) => task.done)
            .map((task) => (
              <div key={task.id} className="flex justify-between items-center p-4 mb-4 bg-purple-200 text-purple-700 rounded-xl ">
                <p className="text-sm font-medium line-through">{task.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
