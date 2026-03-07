import { motion } from 'framer-motion';
import { Zap, Shield, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Zap, title: t('about.inovacao'), desc: t('about.inovacaoDesc'), color: 'from-blue-400 to-blue-600' },
    { icon: Shield, title: t('about.seguranca'), desc: t('about.segurancaDesc'), color: 'from-emerald-400 to-emerald-600' },
    { icon: Headphones, title: t('about.suporte'), desc: t('about.suporteDesc'), color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('about.titulo')} <span className="gradient-text-primary">Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.descricao')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-8"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
