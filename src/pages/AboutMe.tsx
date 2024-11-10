import Footer from "../components/Footer";
import Header from "../components/Header";
import FadeIn from "../components/motion/FadeIn";
import { aboutMe } from "../mocks/mock-about-me";

function AboutMe() {
	// Extraemos el primer aboutme del mock (en este caso, el único aboutme)
	const { aboutMeTxt, greeting, description } = aboutMe[0];
	return (
		<>
			<div className="bg-zinc-900 w-screeen h-screen flex flex-col md:px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<FadeIn duration={2} delay={0.4}>
					<h1 className="text-5xl font-bold text-stone-100 py-5">
						{aboutMeTxt}
					</h1>
				</FadeIn>
				<FadeIn duration={2} delay={0.6}>
					<h1 className="text-zinc-300 py-6">{greeting}</h1>
					<h1 className="text-zinc-300 leading-relaxed">{description}</h1>
				</FadeIn>
				<Footer />
			</div>
		</>
	);
}

export default AboutMe;
