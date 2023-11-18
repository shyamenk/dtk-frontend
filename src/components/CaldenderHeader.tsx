import { BellRing, CalendarCheck2, Plus } from "lucide-react";

const CaldenderHeader = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center gap-4">
        <CalendarCheck2 className="text-primary w-8 h-8" />
        <h1 className="text-2xl text-neutral-100 font-poppins font-bold">
          Calendar
        </h1>
        <div className="flex gap-6 pl-10">
          <button className=" text-md font-poppins font-semibold text-neutral-200  hover:text-neutral-100">
            List
          </button>
          <button className=" text-md font-poppins font-semibold text-neutral-200  hover:text-neutral-100">
            Monthly
          </button>
          <button className=" text-md font-poppins font-semibold text-primary  hover:text-neutral-100">
            Weekly
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="placeholder-neutral-200 placeholder:font-poppins placeholder:font-semibold appearance-none border-2 pl-10 rounded-full border-gray-300 hover:border-gray-400 transition-colors  w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-offset-secondary focus:border-blue-600 focus:shadow-outline"
            type="text"
            placeholder="Search"
          />

          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button className="p-2 rounded-full bg-primary text-theme hover:bg-secondary hover:text-neutral-400">
          <Plus className="w-6 h-6" />
        </button>
        <div className="relative">
          <button className="p-2 rounded-full bg-white text-neutral-200 hover:bg-theme hover:text-neutral-200 focus:outline-none">
            <BellRing className="w-6 h-6" />
          </button>
          <span className="absolute -ml-3 h-2 w-2 shrink-0 rounded-full bg-red-500"></span>
        </div>
      </div>
    </div>
  );
};

export default CaldenderHeader;
