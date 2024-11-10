
import Header from "../components/Header";


function AboutMe() {

	return (
		<>
			<div className="bg-zinc-900 w-full h-screen px-40">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<h1 className="text-2xl underline text-cyan-400">
					Hola, soy la vista de sobre mi
				</h1>

			</div>
		</>
	);
}

export default AboutMe;
