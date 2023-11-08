import Link from "next/link";
import React from "react";
import styles from "./menuLink.module.css";
const MenuLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
