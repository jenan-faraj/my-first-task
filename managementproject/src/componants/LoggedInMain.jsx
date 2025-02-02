import axios from "axios";
import { useState, useEffect } from "react";

function LoggedInMain() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [toDoTasks, setToDoTasks] = useState([]);

  const [highTasks, sethighTasks] = useState([]);
  const [mediumTasks, setmediumTasks] = useState([]);
  const [lowTasks, setlowTasks] = useState([]);

  useEffect(() => {
    const firebaseUrl =
      "https://task-management-aa496-default-rtdb.firebaseio.com/tasks.json";

    const fetchAndFilterData = async () => {
      try {
        const response = await axios.get(firebaseUrl);
        const TasksArray = response.data
          ? Object.keys(response.data).map((key) => ({
              id: key,
              ...response.data[key],
            }))
          : [];

        setData(TasksArray);

        // فلترة البيانات وتخزينها في state
        const doing = TasksArray.filter((task) => task.status === "doing" && task.deleted != true);
        const done = TasksArray.filter((task) => task.status === "done" && task.deleted != true);
        const toDo = TasksArray.filter((task) => task.status === "toDo" && task.deleted != true);

        const high = TasksArray.filter((task) => task.priority === "high" && task.deleted != true);
        const medium = TasksArray.filter((task) => task.priority === "medium" && task.deleted != true);
        const low = TasksArray.filter((task) => task.priority === "low" && task.deleted != true);

        setDoingTasks(doing);
        setDoneTasks(done);
        setToDoTasks(toDo);

        sethighTasks(high);
        setmediumTasks(medium);
        setlowTasks(low);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAndFilterData();
  }, []);

  if (loading) return <div><div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin" style={{animationDuration: '3s'}} />
      <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm" />
  </div>
</div></div>;

  if (error) return <div><div className="absolute z-50 flex w-3/4 h-24 overflow-hidden bg-white shadow-lg max-w-96 rounded-xl">
  <svg xmlns="http://www.w3.org/2000/svg" height={96} width={16}>
    <path strokeLinecap="round" strokeWidth={2} stroke="indianred" fill="indianred" d="M 8 0 
         Q 4 4.8, 8 9.6 
         T 8 19.2 
         Q 4 24, 8 28.8 
         T 8 38.4 
         Q 4 43.2, 8 48 
         T 8 57.6 
         Q 4 62.4, 8 67.2 
         T 8 76.8 
         Q 4 81.6, 8 86.4 
         T 8 96 
         L 0 96 
         L 0 0 
         Z" />
  </svg>
  <div className="mx-2.5 overflow-hidden w-full">
    <p className="mt-1.5 text-xl font-bold text-[indianred] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
      Error !
    </p>
    <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
    {error}
    </p>
  </div>
  <button className="w-16 cursor-pointer focus:outline-none">
    <svg className="w-7 h-7" fill="none" stroke="indianred" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div></div>;
  if (!data) return null;

  return (
    <>
      <div className="max-w-4xl mt-[40px] mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Task Management
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-700">In Progress</h2>
            <p className="text-xl text-blue-600">{doingTasks.length}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-green-700">
              Completed Tasks
            </h2>
            <p className="text-xl text-green-600">{doneTasks.length}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-yellow-700">
              Pending Tasks
            </h2>
            <p className="text-xl text-yellow-600">{toDoTasks.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-red-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-red-700">
              High Priority Tasks
            </h2>
            <p className="text-xl text-red-600">{highTasks.length}</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-orange-700">
              Medium Priority Tasks
            </h2>
            <p className="text-xl text-orange-600">{mediumTasks.length}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">
              Low Priority Tasks
            </h2>
            <p className="text-xl text-gray-600">{lowTasks.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoggedInMain;
