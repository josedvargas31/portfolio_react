import { subtitles } from "../mocks/mock-subtittles";

function Tools() {
	const {subherramientas} = subtitles[0];
	return (
		<>
			<h2 className="md:text-3xl text-2xl font-bold dark:text-stone-100 text-slate-800 pb-5">{subherramientas}</h2>
            <div className="px-6">
            <ul className="list-disc dark:text-stone-100 text-slate-700">
				<li className="pb-2 dark:text-zinc-300 text-slate-700">Editores: Android Studio,Visual Studio Code</li>
				<li className="pb-10 dark:text-zinc-300 text-slate-700">Otros: Figma, Excalidraw, Postman, Dia</li>
			</ul>   
            </div>
		
		</>
	);
}

export default Tools;
