import Footer from "../components/Footer";
import Header from "../components/Header";
import Languages from "../components/Languages";
import FadeIn from "../components/motion/FadeIn";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import { aboutMe } from "../mocks/mock-about-me";

function AboutMe() {
	// Extraemos el primer aboutme del mock (en este caso, el único aboutme)
	const { aboutMeTxt, greeting, description } = aboutMe[0];

	return (
		<>
			<div className="dark:bg-zinc-900 w-screeen w-screen flex flex-col px-6 md:px-40 lg:px-60">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<FadeIn duration={2} delay={0.2}>
					<h1 className="md:text-5xl text-4xl font-bold dark:text-stone-100 text-slate-800 py-5">
						{aboutMeTxt}
					</h1>
				</FadeIn>
				<FadeIn duration={2} delay={0.4}>
					<h1 className="dark:text-zinc-300 text-slate-700 py-6">{greeting}</h1>
					<h1 className="dark:text-zinc-300 text-slate-700 leading-relaxed text-justify">
						{description}
					</h1>
				</FadeIn>
				<Languages />
				<Projects />
				<Tools />
				<div className="py-2 pt-2">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default AboutMe;
