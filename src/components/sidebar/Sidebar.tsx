import homeIcon from "@/assets/icons/home.svg";
import addIcon from "@/assets/icons/add.svg";
import directIcon from "@/assets/icons/direct.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import profileIcon from "@/assets/icons/profile.svg";
import settingIcon from "@/assets/icons/settings.svg";
import myphotosIcon from "@/assets/icons/myphotos.svg";
import logoutIcon from "@/assets/icons/logout.svg";

import { Link, useLocation } from "react-router-dom";

import { useUserAuth } from "@/context/userAuthContext";

const navItems = [
  {
    name: "Home",
    link: "/home",
    icon: homeIcon,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "My Photos",
    link: "/my-photos",
    icon: myphotosIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Notifications",
    link: "#",
    icon: notificationIcon,
  },
  {
    name: "Direct",
    link: "#",
    icon: directIcon,
  },
  {
    name: "Settings",
    link: "#",
    icon: settingIcon,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const { logOut } = useUserAuth();

  return (
    <nav className="flex flex-col space-x-2 relative h-screen max-w-sm w-full">
      <div className="flex justify-center m-5">
        <div className="text-white text-lg">PhotoGram</div>
      </div>
      {navItems.map((item) => (
        <div
          className={`
            ${
              pathname === item.link
                ? "bg-white rounded-none"
                : "hover:bg-slate-950 !text-white rounded-none"
            }
            justify-start rounded-r-full transition-all duration-200 ease-in-out
          `}
          key={item.name}
        >
          <Link
            to={item.link}
            className={`${
              pathname === item.link ? "!text-slate-950" : "!text-white"
            } flex items-center py-[15px] pl-[20px]`}
          >
            <span>
              <img
                src={item.icon}
                className="w-5 h-5 mr-2"
                alt={item.name}
                style={{
                  filter: `${
                    pathname === item.link ? "invert(0)" : "invert(1)"
                  }`,
                }}
              />
            </span>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}
      <div className="hover:bg-slate-950 justify-start rounded-r-full mr-2 transition-all duration-200 ease-in-out">
        <Link
          to={"#"}
          className="!text-white flex items-center py-[15px] pl-[20px]"
          onClick={logOut}
        >
          <span>
            <img
              src={logoutIcon}
              className="w-5 h-5 mr-2"
              alt="Logout"
              style={{
                filter: "invert(1)",
              }}
            />
          </span>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
