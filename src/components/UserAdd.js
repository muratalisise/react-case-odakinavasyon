import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
	const [user, setUser] = useState({ name: '', email: '' });
	const navigate = useNavigate();

	const handleSave = async () => {
		const response = await fetch("https://dummyjson.com/users/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		if (response.ok) {
			alert('User added!');
			navigate('/dashboard');
		} else {
			alert('Error adding user');
		}
	};

	return (
		<div>
			<h3>Add User</h3>
			<input
				type="text"
				value={user.name}
				onChange={(e) => setUser({ ...user, name: e.target.value })}
				placeholder="Name"
			/>
			<input
				type="email"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="Email"
			/>
			<button onClick={handleSave}>Save</button>
		</div>
	);
};

export default UserAdd;
