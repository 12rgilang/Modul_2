import { RxCross2 } from "react-icons/rx";

export default function SignIn(props) {
	return (
		<>
			{props.visible.popUpSignIn ? (
				<div
					id="container"
					onClick={props.close.ClosePopUpSignIn}
					className="fixed inset-0 bg-gray-500 bg-opacity-20 backdrop-blur-sm flex justify-center items-center text-white"
				>
					<div className="bg-black rounded-lg p-2 relative top-0 left-0">
						<button onClick={props.x.ClosePopUpXSignIn} className="text-xl m-2">
							<RxCross2 />
						</button>
						<h1 className="text-3xl font-bold px-10 mb-5">Sign in to Twitter</h1>
						<div className="flex flex-col items-center">
							<button className="bg-white max-w-sm rounded-full mb-4 w-full py-2 mt-4 text-black">
								Google Sign in
							</button>
							<button className="bg-white max-w-sm rounded-full mb-4 w-full py-2 text-black">
								Apple Sign in
							</button>
						</div>
						<div className="flex justify-center mb-4">
							<p className="text-slate-500">or</p>
						</div>
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
							<div className="flex justify-end mb-10">
								<a href="/" className="text-blue-400 mb-5">
									Use Email instead
								</a>
							</div>
							<button className="border-[1px] border-slate-700 bg-[#77797A] text-black rounded-full px-3 py-3 w-full font-bold">
								Log in
							</button>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
}
