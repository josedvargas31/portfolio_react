import Header from "../components/Header";

function Start() {
	return (
		<>
			<div className="bg-zinc-900 w-full h-full">
				<Header start="Inicio" aboutMe="Sobre mi" />
				<h1 className="text-2xl underline text-cyan-400">
					Hola soy la vista de inicio
				</h1>
			</div>
		</>
	);
}

export default Start;
