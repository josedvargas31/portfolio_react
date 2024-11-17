import { languages } from "../mocks/mock-languages";
import { subtitles } from "../mocks/mock-subtittles";
import FadeIn from "./motion/FadeIn";

function Languages() {
	const {sublanguages} = subtitles[0];
	const {
		variable,
		namevariable,
		titlefrontend,
		onefrontendjs,
		twofrontendjs,
		onecss,
		twocss,
		titlebackend,
		onephp,
		php,
		css,
		js,
		onebackendjs,
		twobackendjs,
		titledatabases,
		onedatabase,
		twodatabase,
		titlemovil,
		onemovil,
		equalsign,
		coma,
		colon,
		openbrace,
		closedbrace,
		openbracket,
		closedbracket,
	} = languages[0];
	return (
		<div className="pt-20">
			<FadeIn duration={2} delay={0.6}>
			<h2 className="md:text-3xl text-2xl font-bold dark:text-stone-100 text-slate-800 pb-8">{sublanguages}</h2>
			</FadeIn>
			<FadeIn duration={2} delay={0.6}>
			<div className="overflow-hidden rounded-lg shadow-lg dark:bg-slate-800 bg-zinc-200/50 py-4 px-10">
				<div className="overflow-x-auto">
					<div className="whitespace-nowrap">
						<span className="dark:text-slate-400 text-blue-500 font-normal font-mono">
							{variable}
						</span>
						<span className="dark:text-sky-400 text-slate-600 font-normal font-mono">
							{namevariable}
						</span>
						<span className="dark:text-sky-400 text-slate-600  font-mono">{equalsign}</span>
						<span className="dark:text-slate-300 text-slate-700 font-mono">{openbrace}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-8">
							{titlefrontend}
						</span>
						<span className="dark:text-sky-400 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700 font-mono">{openbrace}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-16">{js}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{onefrontendjs}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{twofrontendjs}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<span className="dark:text-slate-300">{coma}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-16">{css}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{onecss}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{twocss}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<span className="dark:text-slate-300 pr-2">{coma}</span>
						<br />
						<span className="dark:text-slate-300 text-slate-700 pl-8">{closedbrace}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-8">{titlebackend}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700 font-mono">{openbrace}</span>
						<br />
						<span className="dark:text-teal-300 text-teal-600 font-mono pl-16">{php}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600">{onephp}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<br />
						<span className="dark:text-teal-300 text-teal-600 font-mono pl-16">{js}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{onebackendjs}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{twobackendjs}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<br />
						<span className="dark:text-slate-300 text-slate-700 pl-8">{closedbrace}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-8">
							{titledatabases}
						</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{onedatabase}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{twodatabase}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<span className="dark:text-slate-300 text-slate-700 pr-2">{coma}</span>
						<br />

						<span className="dark:text-teal-300 text-teal-600 font-mono pl-8">{titlemovil}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300 text-slate-700 font-mono">{openbrace}</span>
						<br />
						<span className="dark:text-teal-300 text-teal-600 font-mono pl-16">{js}</span>
						<span className="dark:text-sky-600 text-slate-700 pr-2">{colon}</span>
						<span className="dark:text-slate-300">{openbracket}</span>
						<span className="dark:text-sky-300 text-sky-600 font-mono">{onemovil}</span>
						<span className="dark:text-slate-300 text-slate-700">{closedbracket}</span>
						<br />

						<span className="dark:text-slate-300 text-slate-700 pl-8">{closedbrace}</span>
						<br />
						<span className="dark:text-slate-300 text-slate-700">{closedbrace}</span>
						<br />
					</div>
				</div>
			</div>
			</FadeIn>
		</div>
	);
}

export default Languages;
