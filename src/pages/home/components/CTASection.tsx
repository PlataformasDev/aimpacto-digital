import { motion } from "framer-motion";

type CTASectionProps = {
  onNavigate: (sectionId: string) => void;
};

const benefits = [
  { icon: "ri-flashlight-line", label: "Resposta em 24h" },
  { icon: "ri-hand-heart-line", label: "Sem compromisso" },
  { icon: "ri-customer-service-2-line", label: "Consultoria gratuita" },
];

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="gradient-primary absolute inset-0 opacity-90" />

      <div className="section-padding relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
          Pronto para avançar?
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-white">
          Atuamos como seu parceiro estratégico em toda a jornada de transformação digital
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">
          Squad dedicado, estratégia, design e engenharia trabalhando lado a lado com o seu time.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("orcamento")}
            className="btn-primary px-8 py-3 text-lg"
          >
            Solicitar Orçamento
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("orcamento")}
            className="btn-secondary px-8 py-3 text-lg"
          >
            Falar com Especialista
          </motion.button>
        </div>

        <div className="mt-10 grid w-full gap-6 text-left sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <i className={`${benefit.icon} text-2xl text-orange-300`} />
              <p className="font-medium text-white">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
