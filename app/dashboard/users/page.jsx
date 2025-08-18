"use client";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data pengguna dari API
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getUser`);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fungsi untuk mendapatkan label dari role
  const getRoleLabel = (role) => {
    return role === 1 ? "Admin" : "User"; // Jika role 1, tampilkan "Admin", jika tidak, tampilkan "User"
  };

  // Fungsi untuk menghapus pengguna
  const handleDeleteUser = async (userId) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/delete/${userId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert("User deleted successfully");
          // Refresh data setelah menghapus
          fetchUsers();
        } else {
          throw new Error("Failed to delete user");
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert("Error deleting user");
      }
    }
  };

  // Menampilkan loading atau error jika ada
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add" className={styles.addButton}>
          Add User
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>No</td>
            <td>Username</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
                <td>{getRoleLabel(user.role)}</td>
                <td>{user.status === 1 ? "Active" : "Inactive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button 
                      className={`${styles.button} ${styles.delete}`} 
                      onClick={() => handleDeleteUser(user.id)} // Menangani penghapusan pengguna
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
