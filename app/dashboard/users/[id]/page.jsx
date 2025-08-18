"use client";
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import { useState, useEffect } from 'react';

const SingleUserPage = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    
    // Mengambil data pengguna berdasarkan userId
    useEffect(() => {
        const fetchUserData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getUser/${userId}`);
            const data = await res.json();
            setUserData(data);
        };
        fetchUserData();
    }, [userId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Mengirim data yang telah diperbarui ke server
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            console.log('User updated', result);
        } catch (error) {
            console.error('Error updating user', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {userData.username}
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form} onSubmit={handleUpdate}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={userData.username} 
                        onChange={(e) => setUserData({ ...userData, username: e.target.value })} 
                    />

                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={userData.email} 
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="New Password" 
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
                    />

                    <label>Is Admin</label>
                    <select 
                        name="isAdmin" 
                        value={userData.role === 1 ? "true" : "false"} 
                        onChange={(e) => setUserData({ ...userData, role: e.target.value === "true" ? 1 : 0 })} 
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label>Is Active</label>
                    <select 
                        name="isActive" 
                        value={userData.status === 1 ? "true" : "false"} 
                        onChange={(e) => setUserData({ ...userData, status: e.target.value === "true" ? 1 : 0 })} 
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;
