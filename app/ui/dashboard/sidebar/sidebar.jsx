import React from "react";
import styles from "../sidebar/sidebar.module.css";
import menuItems from "./menuItem";
import MenuLink from "./menuLink/menuLlink";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span>{category.title}</span>
            {category.items.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
