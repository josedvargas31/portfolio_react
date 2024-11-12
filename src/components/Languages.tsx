import { languages } from "../mocks/mock-languages";
import FadeIn from "./motion/FadeIn";

function Languages() {
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
			<h2 className="text-3xl font-bold text-stone-100 pb-8">Lenguajes</h2>
			</FadeIn>
			<FadeIn duration={2} delay={0.6}>
			<div className="overflow-hidden rounded-lg shadow-lg bg-slate-800 py-4 px-10">
				<div className="overflow-x-auto">
					<div className="whitespace-nowrap">
						<span className="text-slate-400 font-normal font-mono">
							{variable}
						</span>
						<span className="text-sky-400 font-normal font-mono">
							{namevariable}
						</span>
						<span className="text-sky-400 font-mono">{equalsign}</span>
						<span className="text-slate-300 font-mono">{openbrace}</span>
						<br />

						<span className="text-teal-300 font-mono pl-8">
							{titlefrontend}
						</span>
						<span className="text-sky-400 pr-2">{colon}</span>
						<span className="text-slate-300 font-mono">{openbrace}</span>
						<br />

						<span className="text-teal-300 font-mono pl-16">{js}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300 font-mono">{onefrontendjs}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<span className="text-sky-300 font-mono">{twofrontendjs}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<span className="text-slate-300">{coma}</span>
						<br />

						<span className="text-teal-300 font-mono pl-16">{css}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300 font-mono">{onecss}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<span className="text-sky-300 font-mono">{twocss}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />
						<span className="text-slate-300 pl-8">{closedbrace}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />

						<span className="text-teal-300 font-mono pl-8">{titlebackend}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300 font-mono">{openbrace}</span>
						<br />
						<span className="text-teal-300 font-mono pl-16">{php}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300">{onephp}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />
						<span className="text-teal-300 font-mono pl-16">{js}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300 font-mono">{onebackendjs}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<span className="text-sky-300 font-mono">{twobackendjs}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />
						<span className="text-slate-300 pl-8">{closedbrace}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />

						<span className="text-teal-300 font-mono pl-8">
							{titledatabases}
						</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300 font-mono">{onedatabase}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<span className="text-sky-300 font-mono">{twodatabase}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<span className="text-slate-300 pr-2">{coma}</span>
						<br />

						<span className="text-teal-300 font-mono pl-8">{titlemovil}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300 font-mono">{openbrace}</span>
						<br />
						<span className="text-teal-300 font-mono pl-16">{js}</span>
						<span className="text-sky-600 pr-2">{colon}</span>
						<span className="text-slate-300">{openbracket}</span>
						<span className="text-sky-300 font-mono">{onemovil}</span>
						<span className="text-slate-300">{closedbracket}</span>
						<br />

						<span className="text-slate-300 pl-8">{closedbrace}</span>
						<br />
						<span className="text-slate-300">{closedbrace}</span>
						<br />
					</div>
				</div>
			</div>
			</FadeIn>
		</div>
	);
}

export default Languages;
