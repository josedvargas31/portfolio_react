function Footer() {
	return (
		<>
			<footer className="flex flex-row h-16">
				<h1 className="pr-6 font-sans dark:text-white/75 underline underline-offset-4 decoration-sky-200 text-zinc-500 hover:decoration-slate-500 cursor-pointer">
					<a
						href="https://www.linkedin.com/in/dario-jose-zamora-vargas-32b9aa318"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</h1>
				<h1 className="pr-6  font-sans dark:text-white/75 underline underline-offset-4 decoration-sky-200 text-zinc-500 hover:decoration-slate-500 cursor-pointer">
					<a
						href="https://github.com/josedvargas31"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</h1>
				<h1 className="pr-6 font-sans dark:text-white/75 underline underline-offset-4 text-zinc-500 decoration-sky-200 hover:decoration-slate-500 cursor-pointer">
					<a
						href="mailto:dajozavargas@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Email
					</a>
				</h1>
			</footer>
		</>
	);
}

export default Footer;
