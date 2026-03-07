import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20 flex items-center">
      {/* Blobs */}
      <div className="absolute blob blob-1 w-96 h-96 bg-blue-400 top-20 left-10 blob-animated"></div>
      <div className="absolute blob blob-2 w-80 h-80 bg-orange-400 bottom-20 right-10 blob-animated" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6 text-white text-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Para Sair do Ecrã Inteiro, Pressione [Esc]
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Soluções Inteligentes para <span className="gradient-text-primary">Transformar seu Negócio</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              {t('hero.subtitulo')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary"
              >
                {t('hero.conheca')}
                <ArrowRight size={20} className="inline ml-2" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {t('hero.orcamento')}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/70 text-sm">{t('hero.projetos')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/70 text-sm">{t('hero.satisfacao')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">{t('hero.suporte')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-96">
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full h-full glass flex items-center justify-center rounded-3xl"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white/60">Inovação em Constante Movimento</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToProjects}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <ChevronDown size={40} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
