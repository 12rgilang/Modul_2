import "./App.css";
import { useState } from "react";
import Footer from "./components/footer/footer";
import Base from "./components/base/base";
import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";

function App() {
	const [popUpSignIn, setPopUpSignIn] = useState(false);
	const [popUpSignUp, setPopUpSignUp] = useState(false);

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
			<SignIn visible={{ popUpSignIn }} close={{ ClosePopUpSignIn }} x={{ ClosePopUpXSignIn }} />
			<SignUp visible={{ popUpSignUp }} close={{ ClosePopUpSignUp }} x={{ ClosePopUpXSignUp }} />
		</div>
	);
}

export default App;
