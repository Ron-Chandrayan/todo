import React from "react";
import { useOutletContext } from "react-router-dom";

function Card({ task, index }) {

  const { tasks, setTasks } = useOutletContext();

  const toggleIsDone = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, isDone: !t.isDone } : t  
    );
    setTasks(updatedTasks);
  };

  const deletetask = ()=>{
   const newtasks= tasks.filter((t)=>{
      return t.id!== task.id;

    })
    setTasks(newtasks);
  }

  



  const now = new Date();
  const deadline = new Date(task.deadline);
  const diff = deadline - now;

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  return (
    <div
      key={task.id}
      className="m-4 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm w-80 max-w-sm"
    >
      <div className="space-y-4">
        {/* Task Number */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
            Task #{index + 1}
          </span>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Task Description */}
        <div className="relative">
          <p className="text-gray-800 font-medium text-lg leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            {task.description}
          </p>
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-30"></div>
        </div>

        {/* Deadline */}
        <div className="flex items-center space-x-2 text-gray-600">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm font-medium">Due: {deadline.toLocaleString()}</p>
        </div>

        {/* Countdown */}
        <div className="mt-4">
          {diff > 0 && !task.isDone ? (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-800 font-semibold text-sm uppercase tracking-wide">
                  Time Remaining
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Days", value: day },
                  { label: "Hours", value: hour },
                  { label: "Minutes", value: min },
                  { label: "Seconds", value: sec },
                ].map(({ label, value }, idx) => (
                  <div className="text-center" key={idx}>
                    <div className="bg-white rounded-lg p-2 shadow-sm border border-emerald-100">
                      <div className="text-2xl font-bold text-emerald-700">{value}</div>
                      <div className="text-xs text-emerald-600 font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : !task.isDone ? (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-red-700 font-bold text-lg">Countdown Over!!</p>
              </div>
              <div className="mt-2">
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-green-700 font-bold text-lg">Task Submitted!</p>
              </div>
              <div className="mt-2">
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      <div className="flex justify-between" > 
        <button
          onClick={() => {
            toggleIsDone();
          }}
          className={
            !task.isDone
              ? `bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                  text-white font-medium py-2 px-3 rounded-md shadow-sm hover:shadow-md 
                  transform hover:scale-105 transition-colors  duration-300 ease-in-out 
                  flex items-center space-x-1 text-sm`
              : `bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 
                  text-white font-medium py-2 px-3 rounded-md shadow-sm hover:shadow-md 
                  transform hover:scale-105 transition-colors  duration-300 ease-in-out 
                  flex items-center space-x-1 text-sm`
          }
        >
          {!task.isDone ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span> Mark as Done</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span> Mark as Undone</span>
            </>
          )}
        </button>
        <button class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-3 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-colors duration-300 ease-in-out flex items-center space-x-1 text-sm"
        onClick={()=>{
          deletetask();
        }}
        >Delete task</button>
      </div>
      </div>
    </div>
  );
}

export default Card