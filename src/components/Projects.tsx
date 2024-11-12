import { motion } from "framer-motion";
import { proyects } from "../mocks/mock-proyects";
import { BsGithub } from "react-icons/bs";
function Projects() {
	return (
		<>
<div className="py-16">
				<h2 className="text-3xl font-bold text-stone-100 pb-8">
					Proyectos
				</h2>
			<div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-8 place-content-between">
				{proyects.map((project, index) => {
					const { title, description, subtitle, tools, link } = project;
					return (
						<motion.div key={index} className="flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
							<a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
								<div className="container flex justify-center rounded-xl shadow-2xl cursor-pointer">
									<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-900 p-6">
										<div className="flex flex-row justify-between">
											<h1 className="text-stone-100 text-2xl font-bold">
												{title}
											</h1>
											<BsGithub className="text-2xl text-stone-500" />
										</div>
										<p className="text-zinc-300 py-4">{description}</p>
										<h2 className="text-zinc-300 pb-6">{subtitle}</h2>
										<div className="px-6">
											<ul>
												{tools.map((tool, toolIndex) => (
													<li key={toolIndex} className="text-zinc-300 list-disc">
														{tool.backend && (
															<li className="pb-2 text-zinc-300 font-bold">Backend: 
															<span className="pl-2 font-normal">
																	{tool.backend}
																</span>
															</li>
														)}
														{tool.frontend && (
															<li className="pb-2 text-zinc-300 font-bold">Frontend:
																<span className="pl-2 font-normal">
																	{tool.frontend}
																</span>
															</li>
														)}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</a>
						</motion.div>
					);
				})}
			</div>
			</div>
		</>
	);
}
export default Projects;
