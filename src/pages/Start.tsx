import Footer from "../components/Footer";
import Header from "../components/Header";
import { profile } from "../mocks/mock-profile";
import FadeIn from "../components/motion/FadeIn";

function Start() {
	// Extraemos el primer perfil del mock (en este caso, el único perfil)
	const { profileName, title, interests } = profile[0];
	return (
		<>
			<div className="bg-zinc-900 w-screen h-screen flex flex-col px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<div className="flex flex-col justify-center flex-grow">
					<FadeIn duration={2} delay={0.2}>
						<h1 className="text-transparent bg-clip-text bg-gradient-to-r text-8xl font-bold py-4 cursor-pointer from-stone-100  via-stone-100  to-stone-100    hover:from-indigo-400 hover:via-teal-400 hover:to-red-500">
							{profileName}
						</h1>
					</FadeIn>
					<FadeIn duration={2} delay={0.4}>
					<h3 className="text-zinc-400 text-xl hover:text-slate-300 font-semibold">
						{title}
					</h3>
					</FadeIn>
					<FadeIn duration={2} delay={0.6}>
					<h3 className="text-zinc-400 text-xl hover:text-slate-300 font-semibold">
						{interests}
					</h3>
					</FadeIn>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Start;
