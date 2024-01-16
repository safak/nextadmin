import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";

const UsersPage = () => {
  return (
    <div className={styles.contianer}>
      <div className={styles.top}>
        <Search placeholder={"Search for a user"} />
      </div>
      <table className={styles.table}></table>
    </div>
  );
};

export default UsersPage;
