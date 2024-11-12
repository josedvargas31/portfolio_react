import Footer from "../components/Footer";
import Header from "../components/Header";
import Languages from "../components/Languages";
import FadeIn from "../components/motion/FadeIn";
import Projects from "../components/Projects";
import { aboutMe } from "../mocks/mock-about-me";

function AboutMe() {
	// Extraemos el primer aboutme del mock (en este caso, el único aboutme)
	const { aboutMeTxt, greeting, description } = aboutMe[0];
	return (
		<>
			<div className="bg-zinc-900 w-screeen w-screen flex flex-col px-6 md:px-20 lg:px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<FadeIn duration={2} delay={0.4}>
					<h1 className="md:text-5xl text-4xl font-bold text-stone-100 py-5">
						{aboutMeTxt}
					</h1>
				</FadeIn>
				<FadeIn duration={2} delay={0.6}>
					<h1 className="text-zinc-300 py-6">{greeting}</h1>
					<h1 className="text-zinc-300 leading-relaxed text-justify">
						{description}
					</h1>
				</FadeIn>
				<Projects />
				<Languages />
				<div className="py-10">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default AboutMe;
