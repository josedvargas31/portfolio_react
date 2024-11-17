import { useState, useEffect } from "react";
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

	
	// Estado para controlar el tema
	const [isDarkMode, setIsDarkMode] = useState(() => {
		// Comprobar el tema del sistema al cargar
		if (localStorage.getItem("theme")) {
			return localStorage.getItem("theme") === "dark";
		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	useEffect(() => {
		const applyTheme = () => {
			if (isDarkMode) {
				document.body.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.body.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		};

		applyTheme();

		// Detectar cambios en las preferencias del sistema
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e: MediaQueryListEvent) => {
			setIsDarkMode(e.matches);
		};
		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [isDarkMode]);

	return (
		<>
			<div className="dark:bg-zinc-900 w-screeen w-screen flex flex-col px-6 md:px-20 lg:px-40">
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
