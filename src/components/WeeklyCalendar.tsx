import { addDays, addWeeks, format, subWeeks } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { meetings } from "../data/meetings";

const WeeklyCalendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const currentDate = new Date();

  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(currentWeekStart, i)
  );

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prevWeekStart) => subWeeks(prevWeekStart, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart((prevWeekStart) => addWeeks(prevWeekStart, 1));
  };

  const currentWeekEnd = addWeeks(currentWeekStart, 1);

  const generateHalfHourTimeSlots = () => {
    const timeSlots: JSX.Element[] = [];

    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour % 12 || 12;

        timeSlots.push(
          <div key={`${hour}:${minute}`}>
            <div
              className={`sticky left-0 z-20 -mt-2.5 font-bold -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400 ${
                formattedHour === 12 && minute === 0
                  ? "bg-blue-500 text-white rounded-full"
                  : ""
              }`}
            >
              {formattedHour}:{minute === 0 ? "00" : minute}
            </div>
          </div>
        );
      }
    }

    return timeSlots;
  };

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              type="button"
              onClick={goToPreviousWeek}
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous week</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center">
              <button
                type="button"
                className="hidden border border-gray-300 bg-white px-3.5 text-sm py-2 pl-3 pr-4 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
              >
                {format(currentWeekStart, "MMM d")} -{" "}
                {format(currentWeekEnd, "MMM d")}
              </button>
            </div>
            <button
              type="button"
              onClick={goToNextWeek}
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next week</span>
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
      <div className="isolate flex flex-auto flex-col overflow-auto bg-white">
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
            <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              {days.map((day, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center justify-center py-3"
                >
                  <span
                    className={`mt-1 flex h-8 w-8 rounded-full  font-semibold text-neutral-300 items-center justify-center  ${
                      format(day, "d") === format(currentDate, "d")
                        ? "rounded-full bg-primary font-semibold text-white"
                        : ""
                    }`}
                  >
                    {format(day, "d")}
                  </span>
                  <span className="font-semibold">
                    {format(day, "EEEEEE")}{" "}
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
                style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
              >
                <div className="row-end-1 h-7"></div>
                {generateHalfHourTimeSlots()}
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end- row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
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
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                {meetings.map((meeting) => {
                  const startHour = new Date(meeting.startDatetime).getHours();
                  const endHour = new Date(meeting.endDatetime).getHours();
                  const slots = endHour - startHour;

                  const initialGap = 2;
                  const hourMultiplier = 12;
                  const gridRow = `${
                    initialGap + (startHour - 8) * hourMultiplier
                  } / span ${slots * hourMultiplier}`;
                  console.log(gridRow);

                  return (
                    <li
                      key={meeting.id}
                      className="relative mt-px flex sm:col-start-3 bg-green-100"
                      style={{
                        gridRow: `${
                          initialGap + (startHour - 9) * hourMultiplier
                        } / span ${slots * 12}`,
                      }}
                    >
                      <a
                        href="/"
                        className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5 hover:bg-gray-200`}
                      >
                        <p className="order-1 font-semibold text-gray-700">
                          {meeting.name}
                        </p>
                        <p className="text-gray-500 group-hover:text-gray-700">
                          <time dateTime={meeting.startDatetime}>
                            {new Date(meeting.startDatetime).toLocaleTimeString(
                              [],
                              {
                                hour: "numeric",
                                minute: "2-digit",
                              }
                            )}
                          </time>{" "}
                          -{" "}
                          <time dateTime={meeting.endDatetime}>
                            {new Date(meeting.endDatetime).toLocaleTimeString(
                              [],
                              {
                                hour: "numeric",
                                minute: "2-digit",
                              }
                            )}
                          </time>
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;
