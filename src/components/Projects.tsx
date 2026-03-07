import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PROJECTS = [
  { id: 1, title: 'Xingu Access', icon: '📱', type: 'Mobile App', color: 'from-emerald-400 to-emerald-600', benefit: 'Vendas offline com sincronização', desc: 'Aplicativo mobile completo', features: ['Checklists digitais', 'Upload de fotos', 'Geração de PDF', 'Funciona 100% offline'], techs: ['Flutter', 'Firebase', 'GPS'] },
  { id: 2, title: 'NPS Dashboard', icon: '📊', type: 'Analytics', color: 'from-blue-400 to-blue-600', benefit: 'Medir satisfação em tempo real', desc: 'Dashboard analítico para monitoramento', features: ['Gráficos em tempo real', 'Integração WhatsApp', 'Exportação de relatórios', 'Métricas avançadas'], techs: ['React', 'Node.js', 'Chart.js'] },
  { id: 3, title: 'RH Conecta', icon: '👥', type: 'Intranet', color: 'from-purple-400 to-purple-600', benefit: 'Comunicação centralizada', desc: 'Portal de RH com gestão completa', features: ['Mural de comunicados', 'Diretório de contatos', 'Reconhecimento', 'Portal do colaborador'], techs: ['Next.js', 'Tailwind', 'PostgreSQL'] },
  { id: 4, title: 'Portal Corporativo', icon: '🏢', type: 'Enterprise', color: 'from-slate-600 to-slate-800', benefit: 'Tudo em um único lugar seguro', desc: 'Plataforma empresarial integrada', features: ['CMS completo', 'Controle de acessos', 'Busca global', 'Integração com legados'], techs: ['Next.js 14', 'Prisma', 'MongoDB'] },
  { id: 5, title: 'X-ONE Kit', icon: '🚀', type: 'Sales + Dashboard', color: 'from-orange-400 to-orange-600', benefit: 'Monitore frotas + venda', desc: 'Kit completo de vendas', features: ['Monitoramento de frotas', 'Alertas críticos', 'Gestão por loja', 'CRM integrado'], techs: ['React 18', 'Firebase', 'Vite'] },
  { id: 6, title: 'App Frota', icon: '🚗', type: 'Gestão', color: 'from-lime-400 to-lime-600', benefit: 'Custos sob controle, 24/7', desc: 'Gestão completa de frotas', features: ['Custos mensais', 'Upload de docs', 'Análise com IA', 'Relatórios'], techs: ['React', 'Firebase', 'PWA'] },
  { id: 7, title: 'Cobrança Pro', icon: '💰', type: 'Financeiro', color: 'from-yellow-400 to-amber-600', benefit: 'Recuperação automatizada', desc: 'Sistema de recuperação de crédito', features: ['Régua automática', 'Importação lote', 'Dashboards', 'Gestão de títulos'], techs: ['Next.js', 'MongoDB Atlas', 'Z-API'] },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t('projects.titulo')} <span className="gradient-text-primary">Soluções</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('projects.descricao')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
              className="card-premium overflow-hidden cursor-pointer group"
            >
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl">{project.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}>{project.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-6`}>✨ {project.benefit}</div>
                <p className="text-gray-600 text-sm mb-6">{project.desc}</p>
                <div className="space-y-2 mb-8">
                  {project.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${project.color} hover:shadow-lg transition-all transform group-hover:scale-105`}>
                  Saber Mais <ArrowRight size={18} className="inline ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-32 bg-gradient-to-br ${selected.color} relative p-8 text-white flex items-end gap-4`}>
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full">
                  <X size={24} />
                </button>
                <div className="text-6xl">{selected.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold">{selected.title}</h2>
                  <p className="text-white/90">{selected.type}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Principais Funcionalidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selected.color} mt-1.5 flex-shrink-0`}></div>
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tecnologias</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.techs.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${selected.color}`}>
                  Solicitar Orçamento
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
