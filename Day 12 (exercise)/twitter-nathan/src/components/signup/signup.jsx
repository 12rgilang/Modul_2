import { RxCross2 } from "react-icons/rx";

export default function SignUp(props) {
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
								type="text"
								placeholder="Name"
								className="w-full rounded-md bg-black h-14 mb-5"
							/>
							<input
								type="text"
								placeholder="Password"
								className="w-full rounded-md bg-black h-14 mb-2"
							/>
							<div className="flex justify-end">
								<a href="/" className="text-blue-400 mb-5">
									Use Email instead
								</a>
							</div>
							<div className="mb-10">
								<p className="font-semibold mb-2">Date of birth</p>
								<p className="text-sm text-slate-500 max-w-sm">
									This will not be shown publicly. Confirm your own age, even if this account is for
									a business, a pet, or something else.
								</p>
							</div>
							<button className="border-[1px] border-slate-700 bg-[#77797A] text-black rounded-full px-3 py-3 w-full font-bold">
								Register
							</button>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
}
