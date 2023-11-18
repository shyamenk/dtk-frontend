import WeeklyCalendar from "./Cal";
import CaldenderHeader from "./CaldenderHeader";

const Calendar = () => {
  return (
    <section className="w-screen bg-theme">
      <CaldenderHeader />
      <WeeklyCalendar />
    </section>
  );
};

export default Calendar;
