import { HeaderProps } from "../models/HeaderModels";
function Header({start, aboutMe}: HeaderProps) {
	return (
		<>
			<div className="flex h-20 items-center">
				<h1 className="pr-6 font-sans text-white/75 underline underline-offset-4 decoration-sky-200 hover:decoration-slate-500 cursor-pointer"><a href="/about">{aboutMe}</a></h1>
				<h1 className="font-sans text-white/75 underline underline-offset-4 decoration-sky-200 hover:decoration-slate-500 cursor-pointer"><a href="/">{start}</a></h1>
			</div>
		</>
	);
}

export default Header;
