import { motion } from "framer-motion";
import { proyects } from "../mocks/mock-proyects";
import { BsGithub } from "react-icons/bs";
import { subtitles } from "../mocks/mock-subtittles";
function Projects() {
	const {subproyectos} = subtitles[0];
	return (
		<>
<div className="py-16">
				<h2 className="md:text-3xl text-2xl  font-bold dark:text-stone-100 text-slate-800 pb-8">
					{subproyectos}
				</h2>
			<div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-8 place-content-between">
				{proyects.map((project, index) => {
					const { title, description, subtitle, tools, link } = project;
					return (
						<motion.div key={index} className="flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
							<a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
								<div className="container flex justify-center rounded-xl shadow-2xl cursor-pointer">
									<div className="overflow-hidden rounded-lg shadow-lg border dark:bg-zinc-900 p-6">
										<div className="flex flex-row justify-between">
											<h1 className="dark:text-stone-100 text-slate-800 text-2xl font-bold">
												{title}
											</h1>
											<BsGithub className="text-2xl text-stone-500" />
										</div>
										<p className="dark:text-zinc-300 text-slate-600 py-4">{description}</p>
										<h2 className="dark:text-zinc-300 text-slate-600 pb-6">{subtitle}</h2>
										<div className="px-6">
											<ul>
												{tools.map((tool, toolIndex) => (
													<li key={toolIndex} className="text-zinc-300 list-disc">
														{tool.backend && (
															<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">BackEnd: 
															<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
																	{tool.backend}
																</span>
															</li>
														)}
														{tool.frontend && (
															<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">FrontEnd:
																<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
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
