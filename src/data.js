import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";




export const links = [
  {
    id: 1,
    url: "/",
    text: "صفحه اصلی",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "اعضای تیم",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "پروژه ها",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "تقویم",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "یادداشت",
    icon: <FaWpforms />,
  },
];



export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
