import Header from "../../components/Header";
import { profile } from "./mock-profile";

function Start() {
	// Extraemos el primer perfil del mock (en este caso, el único perfil)
	const { profileName, title, interests } = profile[0];
	return (
		<>
			<div className="bg-zinc-900 w-screen h-screen flex flex-col px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<div className="flex flex-col justify-center flex-grow">
					<h1 className="text-transparent bg-clip-text bg-gradient-to-r text-8xl font-bold py-4 cursor-pointer from-stone-100  via-stone-100  to-stone-100    hover:from-indigo-400 hover:via-teal-400 hover:to-red-500">{profileName}</h1>
					<h3 className="text-zinc-400 text-xl hover:text-slate-300 font-semibold">
						{title}
					</h3>
					<h3 className="text-zinc-400 text-xl hover:text-slate-300 font-semibold">
						{interests}
					</h3>
				</div>
			</div>
		</>
	);
}

export default Start;
