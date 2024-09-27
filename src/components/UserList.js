import React, { useEffect, useState } from "react";
import { DataGrid } from "devextreme-react/data-grid";
import { Link } from "react-router-dom";

const UserList = ({ setSelectedUserId }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch("https://dummyjson.com/users");
			const data = await response.json();
			setUsers(data.users);
		};

		fetchUsers();
	}, []);

	const handleDelete = async (userId) => {
		await fetch(`https://dummyjson.com/users/${userId}`, {
			method: "DELETE",
		});
		setUsers(users.filter(user => user.id !== userId));
	};

	return (
		<>
			<Link to="/user/add">Add User</Link>
			<DataGrid
				dataSource={users}
				onSelectionChanged={(e) => setSelectedUserId(e.selectedRowsData[0]?.id)}
				columns={[
					{ dataField: "name" },
					{ dataField: "email" },
					{
						dataField: "actions",
						cellRender: (row) => (
							<div>
								<Link to={`/user/edit/${row.data.id}`}>Edit</Link>
								<button onClick={() => handleDelete(row.data.id)}>Delete</button>
							</div>
						),
					},
				]}
			/>
		</>
	);
};

export default UserList;
