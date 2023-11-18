import {
  Banknote,
  CalendarDays,
  Gauge,
  Layers3,
  MessageCircle,
  SlidersHorizontal,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    text: "Overview",
    href: "/overview",
  },
  {
    icon: <CalendarDays className="h-5 w-5" aria-hidden="true" />,
    text: "Calendar",
    href: "/calendar",
  },
  {
    icon: <User className="h-5 w-5" aria-hidden="true" />,
    text: "Patient List",
    href: "/patient-list",
  },
  {
    icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
    text: "Messages",
    href: "/messages",
  },
  {
    icon: <Banknote className="h-5 w-5" aria-hidden="true" />,
    text: "Payment Information",
    href: "/payment-information",
  },
  {
    icon: <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />,
    text: "Setting",
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex w-1/4 h-screen flex-col overflow-y-auto border-r bg-light px-5 py-6">
      <div className="flex  items-center gap-2">
        <Layers3 width={40} height={46} className="text-primary" />
        <div>
          <h2 className="text-2xl text-neutral-100 font-poppins font-bold">
            Zendenta
          </h2>
          <p className="text-sm text-neutral-200 font-poppins font-semibold">
            Modern dental Clinic
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-4 ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="flex transform items-center rounded-md px-4 py-3 text-neutral-100 transition-colors duration-300 hover:bg-primary hover:text-light"
              to={item.href}
            >
              {item.icon}
              <span className="mx-2 text-sm font-medium font-poppins">
                {item.text}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
