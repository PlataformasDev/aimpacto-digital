export type Project = {
  id: string;
  title: string;
  type: string;
  emoji: string;
  color: string;
  benefit: string;
  description: string;
  features: string[];
  fullDescription: string;
  technologies: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    id: "portal-aplicacoes",
    title: "Portal de Aplicações",
    type: "Hub Corporativo",
    emoji: "🔐",
    color: "from-emerald-400 via-emerald-500 to-green-500",
    benefit: "✨ Todos os sistemas da empresa em um único acesso controlado",
    description:
      "Portal web que centraliza o acesso às aplicações internas com controle de permissões por usuário e módulo.",
    features: [
      "Controle de acesso por perfil",
      "Gestão de permissões por módulo",
      "Arquitetura preparada para SSO",
    ],
    fullDescription:
      "Para empresas com múltiplos sistemas internos, o portal elimina logins dispersos e reúne tudo em um ponto único. Cada colaborador vê apenas o que tem permissão. Administração de acesso simples via painel e evolução natural para autenticação única entre sistemas.",
    technologies: ["Next.js 14", "Supabase", "TypeScript", "Vercel"],
    results: [
      "Acesso centralizado a múltiplos sistemas",
      "Zero login duplo entre módulos",
      "Permissões gerenciadas em tempo real",
    ],
  },
  {
    id: "nps-dashboard",
    title: "NPS Dashboard",
    type: "Analytics",
    emoji: "📊",
    color: "from-blue-500 via-indigo-500 to-indigo-600",
    benefit: "✨ Insights preditivos com IA embarcada",
    description:
      "Monitoramento de satisfação com NPS em tempo real e relatórios automatizados.",
    features: [
      "Alertas inteligentes",
      "Segmentação de clientes",
      "Comparativos multi-filiais",
    ],
    fullDescription:
      "Dashboard completo que centraliza pesquisas, indicadores NPS e comentários dos clientes com análises de sentimento e alertas proativos.",
    technologies: ["Next.js", "Python", "MongoDB", "Power BI"],
    results: [
      "+32% fidelização",
      "Automação de 100% dos relatórios",
      "Economia anual de R$ 280 mil",
    ],
  },
  {
    id: "rh-conecta",
    title: "RH Conecta",
    type: "Intranet",
    emoji: "👥",
    color: "from-purple-500 via-fuchsia-500 to-pink-500",
    benefit: "✨ Portal único para times e líderes",
    description:
      "Intranet colaborativa com trilhas de onboarding, documentos e workflows digitais.",
    features: [
      "Fluxos customizáveis",
      "Gamificação de treinamentos",
      "Analytics de engajamento",
    ],
    fullDescription:
      "Conecta RH, líderes e colaboradores com experiências personalizadas e workflows aprovados digitalmente, reduzindo burocracias.",
    technologies: ["React", "NestJS", "PostgreSQL", "Keycloak"],
    results: [
      "-40% no tempo de onboarding",
      "+55% engajamento interno",
      "Base com 12 mil colaboradores",
    ],
  },
  {
    id: "portal-corporativo",
    title: "Portal Corporativo",
    type: "Enterprise",
    emoji: "🏢",
    color: "from-slate-600 via-blue-800 to-blue-900",
    benefit: "✨ Governança e dados integrados",
    description:
      "Hub central para operações, BI e integrações entre áreas estratégicas.",
    features: [
      "Integração ERP/CRM",
      "Single Sign-On",
      "Fluxos de aprovação",
    ],
    fullDescription:
      "Portal corporativo que unifica indicadores, comunicação e automação de processos críticos, garantindo governança e compliance.",
    technologies: ["Next.js", "GraphQL", "Azure AD", "Kafka"],
    results: [
      "+70% visibilidade operacional",
      "Processos auditáveis end-to-end",
      "ROI em 8 meses",
    ],
  },
  {
    id: "controle-revisoes",
    title: "Controle de Revisões",
    type: "Gestão",
    emoji: "⚙️",
    color: "from-orange-500 via-red-500 to-red-600",
    benefit: "✨ Alertas automáticos antes que a manutenção atrase",
    description:
      "PWA para monitoramento de horas e controle de revisões preventivas de máquinas, com painel admin e múltiplos perfis de acesso.",
    features: [
      "Monitoramento de horas por equipamento",
      "Alertas de revisão com status visual",
      "Perfis para cliente, técnico e operador",
    ],
    fullDescription:
      "Para empresas que operam frotas de máquinas e precisam evitar paradas não planejadas. Cada equipamento tem suas horas monitoradas em tempo real, com alertas automáticos quando a revisão se aproxima ou atrasa. Administradores gerenciam toda a frota; operadores registram horas no campo pelo celular sem precisar instalar nada.",
    technologies: ["React", "Firebase", "TypeScript", "PWA"],
    results: [
      "Revisões nunca perdidas por falta de controle",
      "Histórico completo de manutenção por máquina",
      "Acesso via PWA sem instalação em loja",
    ],
  },
  {
    id: "app-frota",
    title: "App Frota",
    type: "Gestão",
    emoji: "🚗",
    color: "from-green-500 via-emerald-500 to-emerald-600",
    benefit: "✨ Custos sob controle em tempo real",
    description:
      "Gestão de frotas com telemetria, manutenção preventiva e financeiro integrado.",
    features: [
      "Alertas de manutenção",
      "Controle de abastecimento",
      "Dashboards financeiros",
    ],
    fullDescription:
      "Plataforma web + mobile para monitorar veículos, condutores e despesas, reduzindo custos operacionais.",
    technologies: ["Flutter", "Node.js", "TimescaleDB", "AWS IoT"],
    results: [
      "-22% custo de combustível",
      "Disponibilidade de 98%",
      "Painéis em tempo real",
    ],
  },
  {
    id: "cobranca-pro",
    title: "Cobrança Pro",
    type: "Financeiro",
    emoji: "💰",
    color: "from-yellow-400 via-orange-400 to-orange-500",
    benefit: "✨ Recuperação inteligente de receita",
    description:
      "Sistema de cobrança omnichannel com automações e scoring de crédito.",
    features: [
      "Segmentação inteligente",
      "Bots multicanal",
      "Integração bancária",
    ],
    fullDescription:
      "Orquestra campanhas de cobrança com régua automatizada, bots humanizados e indicadores financeiros integrados.",
    technologies: ["Next.js", "NestJS", "Redis", "OpenAI"],
    results: [
      "Recuperação +38%",
      "Tempo de resposta 2x mais rápido",
      "Compliance LGPD completo",
    ],
  },
  {
    id: "checklist-field-ops",
    title: "Checklist Field Ops",
    type: "Mobile App",
    emoji: "📝",
    color: "from-lime-500 via-emerald-500 to-green-600",
    benefit: "✨ Fluxos híbridos online/offline para operações de campo",
    description:
      "Aplicativo Flutter que centraliza checklists de peças, serviços, PLM e comercial com envio automático e anexos.",
    features: [
      "Formulários por segmento com validações",
      "Sincronização Firestore + SQLite",
      "Exportação PDF e anexos de fotos",
    ],
    fullDescription:
      "Desenvolvido para consultores de campo, o Checklist Field Ops garante captura confiável de dados por loja, funciona offline-first e dispara e-mails, PDFs e registros no Firestore sem depender de conexão constante.",
    technologies: ["Flutter", "Firebase", "SQLite", "Image Compress"],
    results: [
      "100% dos checklists enviados mesmo offline",
      "Redução de erros manuais em 60%",
      "Tempo de auditoria 3x menor",
    ],
  },
  {
    id: "inteligencia-estoque",
    title: "Inteligência de Estoque",
    type: "Analytics",
    emoji: "📦",
    color: "from-cyan-500 via-blue-600 to-indigo-700",
    benefit: "✨ Decisões de compra baseadas em dados, não em achismo",
    description:
      "Dashboard web para análise de estoque, previsão de compras e ranking de produtos, com autenticação corporativa e filtros por filial.",
    features: [
      "KPIs de estoque em tempo real",
      "Sugestão automática de compra por sazonalidade",
      "Ranking dos produtos mais vendidos por filial",
    ],
    fullDescription:
      "Para empresas com múltiplas filiais e catálogo extenso de produtos, a plataforma centraliza os dados de estoque, identifica itens críticos e gera sugestões automáticas de recompra com base em sazonalidade e histórico de vendas. Gestores tomam decisões de compra com dados, não com intuição.",
    technologies: ["Next.js 14", "Supabase", "NextAuth.js", "TypeScript"],
    results: [
      "Decisões de compra orientadas por dados",
      "Identificação automática de estoque crítico",
      "Visibilidade por filial e por produto",
    ],
  },
  {
    id: "painel-comercial-campo",
    title: "Painel Comercial de Campo",
    type: "Sales + Analytics",
    emoji: "📈",
    color: "from-blue-400 via-sky-500 to-emerald-500",
    benefit: "✨ Visibilidade total da performance da equipe comercial em campo",
    description:
      "Dashboard para gestão de visitas comerciais com KPIs em tempo real, checklists por consultor e geração automática de relatórios em PDF.",
    features: [
      "Registro de visitas e itens vendidos por consultor",
      "KPIs de performance em tempo real",
      "Relatório PDF exportável por período",
    ],
    fullDescription:
      "Para empresas com equipes comerciais em campo, o painel centraliza o registro de visitas, os itens vendidos e os checklists de cada consultor. Gestores acompanham a performance individual e coletiva em tempo real e exportam relatórios completos em PDF por período com um clique.",
    technologies: ["Next.js", "Firebase", "TypeScript", "React PDF"],
    results: [
      "Visitas e vendas registradas em tempo real",
      "Relatórios PDF gerados automaticamente",
      "Performance individual visível por consultor",
    ],
  },
];
