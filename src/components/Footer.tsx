import { motion } from 'framer-motion';
import { Heart, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="font-bold text-lg">Demócrates de Souza</span>
            </div>
            <p className="text-gray-400">Especialista em soluções de software para empresas que querem crescer e inovar.</p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com/in/democrates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/democrates" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5566984141352" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="font-bold text-lg mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition">Soluções</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition">Contato</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition">{t('footer.voltarAoTopo')}</button></li>
            </ul>
          </motion.div>

          {/* Soluções */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="font-bold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Xingu Access</a></li>
              <li><a href="#" className="hover:text-white transition">NPS Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition">RH Conecta</a></li>
              <li><a href="#" className="hover:text-white transition">App Frota</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+5566984141352" className="hover:text-white transition">(66) 9 8414-1352</a></li>
              <li><a href="mailto:democrates@xingu.com.br" className="hover:text-white transition">democrates@xingu.com.br</a></li>
              <li className="hover:text-white transition">Xingu - MT</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>&copy; {currentYear} Demócrates de Souza. {t('footer.direitos')}</p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              Feito com <Heart size={16} className="text-red-500" /> {t('footer.feitoComCarinhoEm')} Xingu
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
