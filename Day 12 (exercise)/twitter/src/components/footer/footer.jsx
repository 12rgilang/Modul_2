import "./footer.css";

export default function Footer(props) {
	return (
		<>
			<div className="relative">
				<div className="footer flex justify-center h-20 w-screen fixed">
					<div className="basis-7/12 ml-[595px] flex flex-col justify-center">
						<h1 className="text-2xl text-white font-bold">Don't miss what's happening</h1>
						<p className="text-white">People on Twitter are the first to know.</p>
					</div>
					<div className="basis-5/12 flex items-center">
						<button
							className="mr-3 border-[1px] px-4 py-[4px] rounded-full font-bold text-white hover:bg-blue-400"
							onClick={props.popUpSignIn.ShowPopUpSignIn}
						>
							Log in
						</button>
						<button
							className="border-[1px] px-4 py-[4px] rounded-full font-bold bg-white hover:bg-gray-100"
							onClick={props.popUpSignUp.ShowPopUpSignUp}
						>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
