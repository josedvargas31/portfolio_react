import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { profile } from "../mocks/mock-profile";
import FadeIn from "../components/motion/FadeIn";

function Start() {
	const { profileName, title, interests } = profile[0];

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
			<div className="dark:bg-zinc-900 w-screen h-screen flex flex-col px-6 md:px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<div className="flex flex-col justify-center flex-grow">
					<FadeIn duration={2} delay={0.2}>
						<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-stone-500 to-stone-800 dark:from-stone-100 dark:via-stone-100 dark:to-stone-100 text-5xl md:text-9xl font-bold py-8 cursor-pointer hover:from-indigo-400 hover:via-teal-400 hover:to-red-500 dark:hover:from-indigo-300 dark:hover:via-teal-300 dark:hover:to-red-400">
							{profileName}
						</h1>
					</FadeIn>
					<FadeIn duration={2} delay={0.4}>
						<h3 className="text-zinc-400 md:text-xl dark:hover:text-slate-300 hover:text-slate-700 font-semibold">
							{title}
						</h3>
					</FadeIn>
					<FadeIn duration={2} delay={0.6}>
						<h3 className="text-zinc-400 md:text-xl dark:hover:text-slate-300 hover:text-slate-700  font-semibold">
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
