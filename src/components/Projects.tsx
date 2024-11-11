import { motion } from "framer-motion";
import FadeIn from "./motion/FadeIn";
function Projects() {
	return (
		<>
        <FadeIn duration={2} delay={0.8}>
			<h1 className="text-3xl font-bold text-stone-100 py-14 pb-5">
				Proyectos
			</h1>
            </FadeIn>
			<div className="grid md:grid-cols-2  xs:grid-cols-1 gap-8 place-content-between">
				<motion.div
					className="flex justify-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.1 }}
				>
					<div className="container flex justify-center rounded-xl shadow-2xl ">
						<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
							<h1 className="text-stone-100 text-2xl font-bold">Todo-List</h1>
							<h1 className="text-zinc-300 py-4">
								Unos de mis primeros CRUD de tareas con NodeJs en el backend
							</h1>
							<h1 className="text-zinc-300 ">Creado con el stack de:</h1>
							<li>
								<ol className="text-zinc-300 ">Backend: NodeJs</ol>
							</li>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="flex justify-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.1 }}
				>
					<div className="container flex justify-center rounded-xl shadow-2xl">
						<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
							<h1 className="text-stone-100 text-2xl font-bold">Todo-List</h1>
							<h1 className="text-zinc-300 py-4">
								Unos de mis primeros CRUD de tareas con NodeJs en el backend
							</h1>
							<h1 className="text-zinc-300 ">Creado con el stack de:</h1>
							<li>
								<ol className="text-zinc-300 ">Backend: NodeJs</ol>
							</li>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="flex justify-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.1 }}
				>
					<div className="container flex justify-center rounded-xl shadow-2xl">
						<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
							<h1 className="text-stone-100 text-2xl font-bold">Todo-List</h1>
							<h1 className="text-zinc-300 py-4">
								Unos de mis primeros CRUD de tareas con NodeJs en el backend
							</h1>
							<h1 className="text-zinc-300 ">Creado con el stack de:</h1>
							<li>
								<ol className="text-zinc-300 ">Backend: NodeJs</ol>
							</li>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="flex justify-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.1 }}
				>
					<div className="container flex justify-center rounded-xl shadow-2xl">
						<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
							<h1 className="text-stone-100 text-2xl font-bold">Todo-List</h1>
							<h1 className="text-zinc-300 py-4">
								Unos de mis primeros CRUD de tareas con NodeJs en el backend
							</h1>
							<h1 className="text-zinc-300 ">Creado con el stack de:</h1>
							<li>
								<ol className="text-zinc-300 ">Backend: NodeJs</ol>
							</li>
						</div>
					</div>
				</motion.div>
                
			</div>
		</>
	);
}

export default Projects;
