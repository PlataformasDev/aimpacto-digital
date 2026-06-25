import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../../../mocks/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleRequestQuote = () => {
    onClose();
    setTimeout(() => {
      document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] bg-white/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass mx-auto mt-10 max-h-[90vh] max-w-4xl overflow-y-auto rounded-3xl bg-white p-8 text-gray-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`h-3 w-full rounded-full bg-gradient-to-r ${project.color}`} />
            <div className="mt-6 flex items-center gap-4">
              <span className="text-4xl">{project.emoji}</span>
              <div>
                <h3 className="font-display text-3xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                  <i className="ri-stack-line" />
                  {project.type}
                </span>
              </div>
              <button
                className="ml-auto h-10 w-10 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900"
                onClick={onClose}
                aria-label="Fechar"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100/50 p-6 text-orange-800">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Destaque
              </p>
              <p className="mt-2 text-lg font-medium text-orange-900">
                {project.benefit}
              </p>
              <p className="mt-3 text-base text-orange-800/80">{project.fullDescription}</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-2xl bg-gray-50 p-4">
                  <p className="font-semibold text-gray-800">
                    <i className="ri-check-line text-emerald-500" /> {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Tecnologias
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-sm font-semibold text-emerald-800"
                >
                  {result}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleRequestQuote}
                className="btn-primary flex-1 text-center"
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleRequestQuote}
                className="flex-1 rounded-full border border-gray-200 px-6 py-3 font-semibold text-gray-700"
              >
                Agendar Demo
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
