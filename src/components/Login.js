import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		if (username === 'admin' && password === 'password') {
			Cookies.set('authToken', 'dummy_token');
			navigate('/dashboard');
		} else {
			alert('Geçersiz kullanıcı adı veya şifre');
		}
	};

	return (
		<div className="login-container">
			<div className="login-box">
				<h2>Giriş Yap</h2>
				<input
					type="text"
					placeholder="Kullanıcı Adı"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Şifre"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Giriş</button>
				<div className="forgot-password">
					<a href="#">Şifremi Unuttum?</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
