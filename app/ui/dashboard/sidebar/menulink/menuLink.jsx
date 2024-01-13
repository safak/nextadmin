"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";
export default function MenuLink({ item }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        item.path === pathName && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
