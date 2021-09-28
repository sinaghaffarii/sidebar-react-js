import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../../data";
import { useGlobalContext } from "../../context";

const Sidebar = () => {

  const {isSidebarOpen , closeSidebar} = useGlobalContext()

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <h4 className="logo">پنل مدیریت</h4>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
               <span>
               {icon}
               </span>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
