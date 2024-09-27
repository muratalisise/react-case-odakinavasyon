import React, { useState, useEffect } from 'react';
import { fetchUserById, updateUser } from '../services/api';

const UserForm = ({ userId }) => {
	const [user, setUser] = useState({ name: '', email: '' });

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUserById(userId);
			setUser(data);
		};
		if (userId) {
			getUser();
		}
	}, [userId]);

	const handleSave = async () => {
		await updateUser(userId, user);
		alert('User updated!');
	};

	return (
		<div>
			<h3>Edit User</h3>
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

export default UserForm;
