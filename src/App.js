import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import UserEditPage from './pages/UserEditPage';
import UserAdd from './components/UserAdd';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/user/edit/:userId" element={<UserEditPage />} />
				<Route path="/user/add" element={<UserAdd />} />
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</Router>
	);
};

export default App;
