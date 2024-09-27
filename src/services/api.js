const API_URL = 'https://dummyjson.com/users';

export const fetchUsers = async () => {
	const response = await fetch(API_URL);
	const data = await response.json();
	return data.users;
};

export const fetchUserById = async (userId) => {
	const response = await fetch(`${API_URL}/${userId}`);
	const data = await response.json();
	return data;
};

export const addUser = async (newUser) => {
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newUser),
	});
	const data = await response.json();
	return data;
};

export const updateUser = async (userId, updatedUser) => {
	const response = await fetch(`${API_URL}/${userId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updatedUser),
	});
	const data = await response.json();
	return data;
};

export const deleteUser = async (userId) => {
	await fetch(`${API_URL}/${userId}`, {
		method: 'DELETE',
	});
};
