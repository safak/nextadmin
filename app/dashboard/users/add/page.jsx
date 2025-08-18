"use client";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: 0,  // default role as user
        status: 1, // default status as active
        address: ''
    });
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'role' || name === 'status' ? parseInt(value) : value // convert role and status to number
        }));

        // Password confirmation validation
        if (name === 'password' || name === 'confirm') {
            if (formData.password !== formData.confirm) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirm: 'Passwords do not match'
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirm: ''
                }));
            }
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirm) newErrors.confirm = 'Passwords do not match';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await fetch('/api/postUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        email: formData.email,
                        password: formData.password, // Pastikan password disimpan sebagai hash di backend
                        role: formData.role,
                        status: formData.status,
                        address: formData.address,
                    }),
                });
                const result = await response.json();
                console.log('Form submitted', result);
            } catch (error) {
                console.error('Error submitting form', error);
            }
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required
                />
                {errors.username && <div className={styles.error}>{errors.username}</div>}
                
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                />
                {errors.email && <div className={styles.error}>{errors.email}</div>}
                
                <div className={styles.passwordContainer}>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required
                    />
                    <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errors.password && <div className={styles.error}>{errors.password}</div>}
                
                <div className={styles.passwordContainer}>
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="confirm password" 
                        name="confirm" 
                        value={formData.confirm} 
                        onChange={handleChange} 
                        required
                    />
                    <span onClick={toggleConfirmPasswordVisibility} className={styles.eyeIcon}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errors.confirm && <div className={styles.error}>{errors.confirm}</div>}
                
                <select 
                    name="role" 
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value={0}>User</option>
                    <option value={1}>Admin</option>
                </select>
                
                <select 
                    name="status" 
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                </select>
                
                <textarea 
                    name="address" 
                    rows="4"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;
