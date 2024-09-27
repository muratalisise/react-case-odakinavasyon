import React, { useState, useEffect } from 'react';
import { DataGrid } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { fetchUsers, addUser, deleteUser, updateUser } from '../services/api';

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [editingRow, setEditingRow] = useState(null);

	useEffect(() => {
		const getUsers = async () => {
			const data = await fetchUsers();
			setUsers(data);
		};
		getUsers();
	}, []);

	const handleAddUser = async (newUser) => {
		const addedUser = await addUser(newUser);
		setUsers([...users, addedUser]);
	};

	const handleUpdateUser = async (updatedUser) => {
		const result = await updateUser(updatedUser.id, updatedUser);
		setUsers(users.map((user) => (user.id === updatedUser.id ? result : user)));
	};

	const handleDeleteUser = async (userId) => {
		await deleteUser(userId);
		setUsers(users.filter((user) => user.id !== userId));
	};

	return (
		<div>
			<h1>Kullanıcılar Yönetimi</h1>
			<DataGrid
				dataSource={users}
				showBorders={true}
				keyExpr="id"
				editing={{
					mode: 'row',
					allowUpdating: true,
					allowDeleting: true,
					allowAdding: true,
					confirmDelete: true,
				}}
				onRowInserted={(e) => handleAddUser(e.data)}
				onRowUpdated={(e) => handleUpdateUser(e.data)}
				onRowRemoved={(e) => handleDeleteUser(e.data.id)}
				columns={[
					{ dataField: 'name', caption: 'Adı' },
					{ dataField: 'email', caption: 'E-posta' },
					{ dataField: 'phone', caption: 'Telefon' },
				]}
			/>
		</div>
	);
};

export default Dashboard;
