import { BellRing, CalendarCheck2, Plus } from "lucide-react";
import SearchInput from "./ui/SearchInput";
import TextButton from "./ui/TextButton";

const buttons = [
  { text: "List", color: "text-neutral-200", hoverColor: "text-neutral-100" },
  {
    text: "Monthly",
    color: "text-neutral-200",
    hoverColor: "text-neutral-100",
  },
  { text: "Weekly", color: "text-primary", hoverColor: "text-neutral-100" },
];

const CalendarHeader = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center gap-4">
        <CalendarCheck2 className="text-primary w-8 h-8" />
        <h1 className="text-2xl text-neutral-100 font-poppins font-bold">
          Calendar
        </h1>
        <div className="flex gap-6 pl-10">
          {buttons.map((button, index) => (
            <TextButton
              key={index}
              text={button.text}
              color={button.color}
              hoverColor={button.hoverColor}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <SearchInput />
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

export default CalendarHeader;
