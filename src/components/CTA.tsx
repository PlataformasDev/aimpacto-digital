import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-4 gradient-hero overflow-hidden">
      <div className="absolute blob blob-1 w-96 h-96 bg-blue-400 top-20 left-10 blob-animated"></div>
      <div className="absolute blob blob-2 w-80 h-80 bg-orange-400 bottom-20 right-10 blob-animated" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('cta.titulo')}</h2>
            <p className="text-xl text-white/80 mb-8">{t('cta.descricao')}</p>
            <div className="space-y-4">
              {[
                { icon: Clock, text: t('cta.resposta24h') },
                { icon: CheckCircle, text: t('cta.semCompromisso') },
                { icon: Gift, text: t('cta.consultoriaGratuita') }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white text-lg"
                  >
                    <IconComponent className="text-yellow-300" size={24} />
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
            <div className="w-full max-w-md glass p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('cta.solicitarDemo')}</h3>
              <div className="space-y-4">
                <input type="text" placeholder={t('cta.novoNome')} className="w-full px-4 py-3 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300" />
                <input type="email" placeholder={t('cta.novoEmail')} className="w-full px-4 py-3 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300" />
                <input type="tel" placeholder={t('cta.novoTelefone')} className="w-full px-4 py-3 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300" />
                <select className="w-full px-4 py-3 bg-white/90 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300">
                  <option>{t('cta.selecionarSolucao')}</option>
                  <option>Xingu Access</option>
                  <option>NPS Dashboard</option>
                  <option>RH Conecta</option>
                  <option>Portal Corporativo</option>
                  <option>X-ONE Kit</option>
                  <option>App Frota</option>
                  <option>Cobrança Pro</option>
                </select>
                <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-lg hover:shadow-lg transition-all">
                  {t('cta.solicitarDemo')}
                </button>
              </div>
              <p className="text-white/70 text-xs text-center mt-6">Seus dados estão seguros. Nunca compartilhamos suas informações.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
