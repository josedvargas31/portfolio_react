import { languages } from "../mocks/mock-languages";

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
		php,
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
		<div className="py-16">
			<h2 className="md:text-3xl font-bold text-stone-100 pb-8">Lenguajes</h2>

			<div className="overflow-hidden rounded-lg shadow-lg bg-slate-800 p-40">
				<span className="text-sky-500">{variable}</span>
				<span className="text-sky-500">{namevariable}</span>
                <span className="text-sky-500">{equalsign}</span>
                <span className="text-sky-500">{openbrace}</span><br />
				<span className="text-sky-500">{titlefrontend}</span>
				<span className="text-sky-500">{onefrontendjs}</span>
				<span className="text-sky-500">{twofrontendjs}</span>
				<span className="text-sky-500">{onecss}</span>
				<span className="text-sky-500">{twocss}</span>
				<span className="text-sky-500">{titlebackend}</span>
				<span className="text-sky-500">{php}</span>
				<span className="text-sky-500">{onebackendjs}</span>
				<span className="text-sky-500">{twobackendjs}</span>
				<span className="text-sky-500">{titledatabases}</span>
				<span className="text-sky-500">{onedatabase}</span>
				<span className="text-sky-500">{twodatabase}</span>
				<span className="text-sky-500">{titlemovil}</span>
				<span className="text-sky-500">{onemovil}</span>
                {/* signos */}
				<span className="text-sky-500">{equalsign}</span>
				<span className="text-sky-500">{coma}</span>
				<span className="text-sky-500">{colon}</span>
				<span className="text-sky-500">{openbrace}</span>
				<span className="text-sky-500">{closedbrace}</span>
				<span className="text-sky-500">{openbracket}</span>
				<span className="text-sky-500">{closedbracket}</span>
			</div>
		</div>
	);
}

export default Languages;
