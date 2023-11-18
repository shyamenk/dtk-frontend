import CalendarHeader from "./CalendarHeader";
import WeeklyCalendar from "./WeeklyCalendar";

const CalenderView = () => {
  return (
    <section className="w-screen bg-theme">
      <CalendarHeader />
      <WeeklyCalendar />
    </section>
  );
};

export default CalenderView;
