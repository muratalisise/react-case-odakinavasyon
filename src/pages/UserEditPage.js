import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderList from "../components/OrderList";
import { updateUser } from "../services/api";

const UserEdit = () => {
	const { userId } = useParams();
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(`https://dummyjson.com/users/${userId}`);
			const data = await response.json();
			setUser(data);
		};

		fetchUser();
	}, [userId]);

	const handleSave = async () => {
		await updateUser(userId, user);
		alert('User updated!');
	};

	const handleDelete = async () => {
		await fetch(`https://dummyjson.com/users/${userId}`, {
			method: "DELETE",
		});
		navigate('/dashboard');
	};

	if (!user) return <div>Loading...</div>;

	return (
		<div>
			<input
				value={user.name}
				onChange={(e) => setUser({ ...user, name: e.target.value })}
				placeholder="Kullanıcı Adı"
			/>
			<button onClick={handleSave}>Kaydet</button>
			<button onClick={handleDelete}>Sil</button>
			<OrderList userId={userId} />
		</div>
	);
};

export default UserEdit;
