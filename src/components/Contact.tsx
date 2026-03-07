import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{t('contact.titulo')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('contact.descricao')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="card-premium p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contact.telefone')}</h3>
                  <p className="text-gray-600">(66) 9 8414-1352</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contact.email')}</h3>
                  <p className="text-gray-600">democrates@xingu.com.br</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('contact.localizacao')}</h3>
                  <p className="text-gray-600">Xingu - Mato Grosso</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="lg:col-span-2 card-premium p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder={t('contact.nomeCompleto')} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                <input type="email" placeholder={t('contact.email')} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" placeholder={t('contact.telefone')} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                <input type="text" placeholder={t('contact.empresa')} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
              </div>
              <select required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                <option>{t('contact.qualSolucao')}</option>
                <option>Xingu Access</option>
                <option>NPS Dashboard</option>
                <option>RH Conecta</option>
                <option>Portal Corporativo</option>
                <option>X-ONE Kit</option>
                <option>App Frota</option>
                <option>Cobrança Pro</option>
              </select>
              <textarea rows={4} placeholder={t('contact.mensagem')} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"></textarea>
              <button type="submit" className="w-full py-3 gradient-accent text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                <Send size={18} />
                {t('contact.enviar')}
              </button>
              {submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  ✓ {t('contact.obrigado')}
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
