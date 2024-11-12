import { ProyectsPros } from "../models/ProyectsModels";

export const proyects: ProyectsPros[] = [
	{
		title: "To-Do List",
		description: "Una de mis primeras listas de tareas pendientes utilizando TypeScript y React.",
		subtitle: "Creado con el stack de:",
		tools: [
			{
				frontend: "React, TypeScript y Tailwind CSS",
			},
		],
        link: "https://github.com/josedvargas31/list_courses_angular"
	},
	{
		title: "Users-List",
		description: "Un CRUD desarrollado en Laravel para gestionar usuarios. Permite registrar, actualizar, listar y eliminar usuarios de manera sencilla.",
		subtitle: "Creado con el stack de:",
		tools: [
			{
				backend: "Laravel",
				frontend: "Blade (HTML) y Tailwind CSS",
			},
		],
        link: 'https://github.com/josedvargas31/crudLaravel'
	}
];
