import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  add,
  addHours,
  eachDayOfInterval,
  eachHourOfInterval,
  endOfWeek,
  format,
  isSameDay,
  parse,
  parseISO,
  startOfDay,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useRef, useState } from "react";
import { meetings } from "../data/meetings";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
export default function Example() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentWeek, setCurrentWeek] = useState(format(today, "w"));
  let firstDayCurrentWeek = parse(currentWeek, "w", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentWeek),
    end: endOfWeek(firstDayCurrentWeek),
  });

  function previousWeek() {
    let firstDayPreviousWeek = add(firstDayCurrentWeek, { weeks: -1 });
    setCurrentWeek(format(firstDayPreviousWeek, "w"));
  }

  function nextWeek() {
    let firstDayNextWeek = add(firstDayCurrentWeek, { weeks: 1 });
    setCurrentWeek(format(firstDayNextWeek, "w"));
  }

  let selectedWeekMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  const startHour = 9;
  const endHour = 18;

  const hours = eachHourOfInterval({
    start: addHours(startOfDay(firstDayCurrentWeek), startHour),
    end: addHours(startOfDay(firstDayCurrentWeek), endHour),
  });

  const startOfWeekDate = startOfWeek(firstDayCurrentWeek);

  const formattedDays = days.map((day) => format(day, "E"));
  const formattedDates = days.map((day) => format(day, "d"));

  //   useEffect(() => {
  //     // Set the container scroll position based on the current time.
  //     const currentMinute = new Date().getHours() * 60;
  //     container.current.scrollTop =
  //       ((container.current.scrollHeight -
  //         containerNav.current.offsetHeight -
  //         containerOffset.current.offsetHeight) *
  //         currentMinute) /
  //       1440;
  //   }, []);

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <h1 className="text-lg font-semibold text-gray-900">
          {format(firstDayCurrentWeek, "MMMM yyyy, 'Week' w")}
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              type="button"
              onClick={previousWeek}
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous Week</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
            >
              Week
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              onClick={nextWeek}
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next Week</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add event
            </button>
          </div>
        </div>
      </header>
      <div
        ref={container}
        className="isolate flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
          >
            {/* Days Header */}
            <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
              {formattedDays.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex flex-col items-center pt-2 pb-3"
                >
                  {day}{" "}
                  <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                    {formattedDates[index]}
                  </span>
                </button>
              ))}
            </div>

            {/* Dates Header */}
            <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              {formattedDates.map((date, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3"
                >
                  <span>
                    {formattedDays[index]}{" "}
                    <span className="items-center justify-center font-semibold text-gray-900">
                      {date}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{
                  gridTemplateRows: `repeat(${hours.length}, minmax(7rem, 1fr))`,
                }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                {hours.map((hour, index) => (
                  <div key={index}>
                    <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                      {format(hour, "ha")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="col-start-8 row-span-full w-8" />
              </div>

              {/* Events */}
              {/* <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                {meetings.map((meeting, index) => (
                  <li
                    key={index}
                    className={`relative mt-px flex sm:col-start-${
                      meeting.day + 1
                    }`}
                    style={{
                      gridRow: `${meeting.gridRow} / span ${meeting.gridSpan}`,
                    }}
                  >
                    <a
                      href="#"
                      className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-${meeting.color}-50 p-2 text-xs leading-5 hover:bg-${meeting.color}-100`}
                    >
                      <p className="order-1 font-semibold text-${meeting.color}-700">
                        {meeting.title}
                      </p>
                      <p
                        className={`text-${meeting.color}-500 group-hover:text-${meeting.color}-700`}
                      >
                        <time dateTime={meeting.startDatetime}>
                          {format(parseISO(meeting.startDatetime), "h:mm a")}
                        </time>
                      </p>
                    </a>
                  </li>
                ))}
              </ol> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
