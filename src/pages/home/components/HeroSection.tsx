import { motion } from "framer-motion";

type HeroSectionProps = {
  onNavigate: (sectionId: string) => void;
};

const stats = [];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-slate-900/80" />
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 text-center text-white sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm uppercase tracking-widest"
        >
          Transformando necessidade em Soluções
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white/10 backdrop-blur-md px-8 py-6"
        >
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Soluções Inteligentes para {" "}
            <span className="gradient-text-primary">Transformar seu Negócio</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-lg text-blue-100"
        >
          Da gestão de vendas ao financeiro, tudo integrado, seguro e pronto para escalar tão rápido quanto a sua visão de futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("projetos")}
            className="btn-primary px-8 py-3 text-lg"
          >
            Conheça as Soluções
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("orcamento")}
            className="btn-secondary px-8 py-3 text-lg"
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>

        <motion.button
          aria-label="Rolagem para próximo bloco"
          onClick={() => onNavigate("sobre")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10"
        >
          <i className="ri-arrow-down-line text-2xl" />
        </motion.button>
      </div>
    </section>
  );
}
