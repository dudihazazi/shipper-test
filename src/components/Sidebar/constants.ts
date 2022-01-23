import icHome from "@public/images/icon-home.png";
import icCalendar from "@public/images/icon-calendar.png";
import icUser from "@public/images/icon-user.png";

export const SIDEBAR_MENU = [
  {
    title: "Beranda",
    icon: icHome,
    link: "/",
  },
  {
    title: "Driver Management",
    icon: icUser,
    link: "/driver",
  },
  {
    title: "Pickup",
    icon: icCalendar,
    link: "/pickup",
  },
];
