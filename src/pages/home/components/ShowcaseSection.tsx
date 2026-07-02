import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../../../mocks/projects";
import { ProjectModal } from "./ProjectModal";

const badgeColor: Record<string, string> = {
  "Analytics":            "bg-blue-100 text-blue-700",
  "RH + Automação":       "bg-purple-100 text-purple-700",
  "Gestão + App":         "bg-teal-100 text-teal-700",
  "Financeiro":           "bg-amber-100 text-amber-700",
  "Site Personalizável":  "bg-violet-100 text-violet-700",
  "Sales + Analytics":    "bg-orange-100 text-orange-700",
};

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
                <span className={`rounded-full px-4 py-1 text-sm font-medium ${badgeColor[project.type] ?? "bg-gray-100 text-gray-700"}`}>
                  {project.type}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 transition-colors hover:text-cyan-600">
                {project.title}
              </h3>
              <p className="truncate text-sm font-semibold text-orange-500">{project.benefit}</p>
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
                className="btn-primary mt-4 w-full text-sm"
              >
                Saber Mais
              </motion.button>
              <p className="mt-3 text-center text-xs text-gray-400">
                Personalizável conforme sua operação
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
