import { motion } from "framer-motion";

const highlights = [
  {
    icon: "ri-rocket-line",
    title: "Inovação Constante",
    description:
      "Utilizamos tecnologias de ponta para antecipar tendências e acelerar o seu crescimento.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Segurança e Escala",
    description:
      "Arquiteturas resilientes, com governança e compliance para operações críticas.",
  },
  {
    icon: "ri-customer-service-line",
    title: "Parceria Estratégica",
    description:
      "Estratégia, Execução e Suporte Contínuo.",
  },
];

export function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="section-padding bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
          Sobre Nós
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-gray-900">
          Transformamos desafios em {" "}
          <span className="gradient-text-primary">Resultados Concretos</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Somos especialistas em criar soluções tecnológicas que impulsionam negócios, sempre com foco em
          performance, segurança e experiência incrível.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 25px 45px rgba(15,23,42,.12)" }}
            className="card-premium bg-gradient-to-br from-white to-blue-50/40 p-8"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-3xl">
              <i className={item.icon} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-3 text-base text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
