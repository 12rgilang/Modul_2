import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import { useRef } from 'react'

export default function SignUp(props) {

	const [message, setMessage] = useState('')

	const email = useRef()
	const password = useRef()
	const username = useRef()

	let onSubmit = async() => {
		try {
			// Step.1 Ambil inputan user
			let inputEmail = email.current.value
			let inputPassword = password.current.value 
			let inputUsername = username.current.value

			// step 2 validasi 
			if(inputEmail.length === 0 || inputPassword.length === 0 || inputUsername === 0) throw {message: "Field Cannot blank"}
			if(!inputEmail.includes("@") || inputEmail.length < 10 ) throw {message: 'email must contain @ and contain at least 10 char'}
       		if(inputPassword.length < 8 ) throw {message: 'Password at least 8 character'}
			let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9A-Za-z!@#$%^&*]{8,}$/
			if(!regex.test(inputPassword)) throw {message: 'Password must contains any number,special and capitalize Char'}
			
			// Step. 3
			let result = await axios.post(`http://localhost:2023/users/register`, {username: inputUsername, email: inputEmail, password: inputPassword})
			username.current.value = '' // ini apa bila succes maka input field akan kembali kosong 
			password.current.value = ''
			email.current.value = ''
			toast.success(result.data.message) // ini memunculkan alert menggunakan npm toast
			setMessage('') // seteleah input pendaftaran selesai maka pemberitahuan akan kembali kosong
			setTimeout(() =>{
				setIsRegister(true)
			}, 2500)



		} catch (error) {
			console.log(error.message)
		}
	}
	
	return (
		<>
			{props.visible.popUpSignUp ? (
				<div
					id="container"
					onClick={props.close.ClosePopUpSignUp}
					className="fixed inset-0 bg-gray-500 bg-opacity-20 backdrop-blur-sm flex justify-center items-center text-white"
				>
					<div className="bg-black rounded-lg p-2 relative top-0 left-0">
						<button onClick={props.x.ClosePopUpXSignUp} className="text-xl m-2">
							<RxCross2 />
						</button>
						<h1 className="text-3xl font-bold px-10 mb-5">Create your account</h1>
						<form action="" className="px-16 pb-5">
							<input
								ref={username}
								type="text"
								placeholder="Name"
								className="w-full rounded-md bg-black h-14 mb-5"
							/>
							<input
								ref={password}
								type="text"
								placeholder="Password"
								className="w-full rounded-md bg-black h-14 mb-2"
							/>
							<div className="flex justify-end">
								<a href="/" className="text-blue-400 mb-5">
									Use Google iunstead
								</a>
							</div>
							<div className="mb-10">
								<p className="font-semibold mb-2">Date of birth</p>
								<p className="text-sm text-slate-500 max-w-sm">
									This will not be shown publicly. Confirm your own age, even if this account is for
									a business, a pet, or something else.
								</p>
							</div>
							<button onClick={onSubmit} className="border-[1px] border-slate-700 bg-[#77797A] text-black rounded-full px-3 py-3 w-full font-bold">
								Register
							</button>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
}
