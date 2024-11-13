import { subtitles } from "../mocks/mock-subtittles";

function Tools() {
	const {subherramientas} = subtitles[0];
	return (
		<>
			<h2 className="text-3xl font-bold text-stone-100 pb-5">{subherramientas}</h2>
            <div className="px-6">
            <ul className="list-disc text-stone-100">
				<li className="pb-2 text-zinc-300">Editores: Android Studio,Visual Studio Code</li>
				<li className="pb-10 text-zinc-300">Otros: Figma, Excalidraw, Postman, Dia</li>
			</ul>   
            </div>
		
		</>
	);
}

export default Tools;
