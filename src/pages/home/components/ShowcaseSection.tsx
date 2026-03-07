import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../../../mocks/projects";
import { ProjectModal } from "./ProjectModal";

export function ShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projetos"
      className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Soluções
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-gray-900">
          Portfólio de {" "}
          <span className="gradient-text-primary">experiências digitais</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Kits completos que combinam estratégia, tecnologia e design para cada área do seu negócio.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(15,23,42,.15)" }}
            className="card-premium flex flex-col overflow-hidden"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
            <div className="space-y-5 p-8">
              <div className="flex items-start justify-between">
                <span className="text-5xl">{project.emoji}</span>
                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                  {project.type}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 transition-colors hover:text-cyan-600">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-orange-500">{project.benefit}</p>
              <p className="text-gray-600">{project.description}</p>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="ri-check-line text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className="mt-4 w-full rounded-full bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                Saber Mais
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
