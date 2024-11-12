import { motion } from "framer-motion";
import FadeIn from "./motion/FadeIn";
import { proyects } from "../mocks/mock-proyects";
function Projects() {
	return (
		<>
			<FadeIn duration={2} delay={0.8}>
				<h2 className="text-3xl font-bold text-stone-100 py-14 pb-5">
					Proyectos
				</h2>
			</FadeIn>
			<div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-8 place-content-between">
				{proyects.map((project, index) => {
					const { title, description, subtitle, tools, link  } = project;
					return (
						<motion.div
							key={index}
							className="flex justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 1.1 }}
						>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
							<div className="container flex justify-center rounded-xl shadow-2xl cursor-pointer">
								<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
									<h1 className="text-stone-100 text-2xl font-bold">{title}</h1>

									<p className="text-zinc-300 py-4">{description}</p>

									<h2 className="text-zinc-300">{subtitle}</h2>

									<ul>
										{tools.map((tool, toolIndex) => (
											<li key={toolIndex} className="text-zinc-300">
												<div>
													<strong>Backend:</strong> {tool.backend}
												</div>
												<div>
													<strong>Frontend:</strong> {tool.frontend}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
                            </a>
						</motion.div>
					);
				})}
			</div>
		</>
	);
}
export default Projects;