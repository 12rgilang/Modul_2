import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/footer/footer";
import Base from "./components/base/base";
import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import { Route, Routes } from 'react-router-dom';

function App() {
	const [popUpSignIn, setPopUpSignIn] = useState(false);
	const [popUpSignUp, setPopUpSignUp] = useState(false);

	const [keepLogin, setKeepLogin] = useState(false)

	let checkIsLogin = () => {
		let token = localStorage.getItem('token')
		if(token) setKeepLogin(true)
	}

	useEffect(() => {
		checkIsLogin()
	}, [])

	const ShowPopUpSignIn = () => {
		setPopUpSignIn(true);
	};
	const ClosePopUpSignIn = (event) => {
		if (event.target.id === "container") setPopUpSignIn(false);
	};
	const ClosePopUpXSignIn = () => {
		setPopUpSignIn(false);
	};
	const ShowPopUpSignUp = () => {
		setPopUpSignUp(true);
	};
	const ClosePopUpSignUp = (event) => {
		if (event.target.id === "container") setPopUpSignUp(false);
	};
	const ClosePopUpXSignUp = () => {
		setPopUpSignIn(false);
	};

	return (
		<div>
			<Base />
			<Footer popUpSignIn={{ ShowPopUpSignIn }} popUpSignUp={{ ShowPopUpSignUp }} />
			<SignIn visible={{ popUpSignIn }} close={{ ClosePopUpSignIn }} x={{ ClosePopUpXSignIn }} myState={{keepLogin}}/>
			<SignUp visible={{ popUpSignUp }} close={{ ClosePopUpSignUp }} x={{ ClosePopUpXSignUp }} />

			<Routes>
				<Route path='/' element={<Login myState={keepLogin}/>} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home myFunc={{checkIsLogin}} myState={keepLogin} />} />
			</Routes>

		</div>
	);
}

export default App;
