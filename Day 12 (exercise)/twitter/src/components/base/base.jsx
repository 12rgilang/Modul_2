import "./base.css";
import { BsTwitter } from "react-icons/bs";

export default function Base() {
	return (
		<>
			<div className="bg-black">
				<div className="flex h-fit justify-between">
					<div className="basis-4/12 relative max-w-md">
						<div className="fixed flex flex-col ml-[200px] mt-4">
							<button className="rounded-full">
								<BsTwitter className="logo" />
							</button>
							<button className="rounded-full mt-7 text-white px-4 py-2 text-xl font-bold">
								Explore
							</button>
							<button className="rounded-full mt-7 text-white px-4 py-2 text-xl font-bold">
								Settings
							</button>
						</div>
					</div>

					<div className="basis-4/12 border-x-[1px] border-slate-700 h-[2000px]"></div>

					<div className="basis-4/12 relative">
						<div className="fixed mt-4">
							<div>
								<div className="block max-w-sm p-6 border-slate-700 border-[1px] rounded-lg">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
										New to Twitter?
									</h5>
									<p className="font-normal text-sm text-slate-500">
										Sign up now to get your own personalized timeline!
									</p>
									<button className="bg-white rounded-full mb-4 w-full py-2 mt-4">
										Google Sign in
									</button>
									<button className="bg-white rounded-full mb-4 w-full py-2">Apple Sign in</button>
									<button className="bg-white rounded-full mb-4 w-full py-2">PN Sign in</button>
									<p className="font-normal text-sm text-slate-500">
										By signing up, you agree to the Terms of Service and Privacy Policy, including
										Cookie Use.
									</p>
								</div>
								<div className="font-normal text-sm text-slate-500 max-w-xs ml-5 mt-5">
									Terms of Service Privacy Policy Cookie Policy Accessibility Ads info More © 2022
									Twitter, Inc.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
