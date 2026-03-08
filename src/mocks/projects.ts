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
    id: "xingu-access",
    title: "Xingu Access",
    type: "Mobile App",
    emoji: "📱",
    color: "from-emerald-400 via-emerald-500 to-green-500",
    benefit: "✨ Operações offline com sincronização em tempo real",
    description:
      "Aplicativo mobile para equipes de campo com fluxo offline-first e integrações com ERP.",
    features: [
      "Checklists inteligentes",
      "Sincronização automática",
      "Dashboards para gestores",
    ],
    fullDescription:
      "Criado para equipes comerciais que precisam coletar dados em locais remotos, o Xingu Access garante operações contínuas mesmo sem internet, sincronizando tudo assim que o sinal volta.",
    technologies: ["React Native", "Node.js", "SQLite", "Expo"],
    results: [
      "+45% produtividade em campo",
      "Redução de 60% em erros manuais",
      "Implantado em 120 filiais",
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
    id: "x-one-kit",
    title: "X-ONE Kit",
    type: "Sales + Dashboard",
    emoji: "🚀",
    color: "from-orange-500 via-red-500 to-red-600",
    benefit: "✨ Time-to-market 3x mais rápido",
    description:
      "Kit de vendas com app mobile, portal e dashboards de performance.",
    features: [
      "Playbook digital",
      "Automação de follow-up",
      "BI comercial em real time",
    ],
    fullDescription:
      "Bundle completo para squads comerciais, com materiais interativos, app para vendedores e dashboards para diretoria.",
    technologies: ["Expo", "Supabase", "Metabase", "Redis"],
    results: [
      "Conversão +27%",
      "Implantação em 30 dias",
      "Suporte 24/7",
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
    id: "xingu-pecas-insights",
    title: "Xingu Peças Insights",
    type: "Analytics",
    emoji: "📦",
    color: "from-cyan-500 via-blue-600 to-indigo-700",
    benefit: "✨ Visão única do estoque com alertas críticos",
    description:
      "Dashboard Next.js com autenticação corporativa que monitora SKUs, rupturas e recomendações de compra por filial.",
    features: [
      "Filtros por filial e classificação",
      "Ranking de produtos críticos",
      "Breakdown original vs paralelo",
    ],
    fullDescription:
      "Integra dados operacionais em um cockpit visual, permitindo acompanhar KPIs de estoque, detectar rupturas em tempo real e orientar planos de compra com segurança e governança.",
    technologies: ["Next.js 14", "NextAuth", "Supabase", "Recharts"],
    results: [
      "-25% rupturas nas filiais",
      "+35% agilidade nas decisões de compra",
      "Acesso 100% auditável",
    ],
  },
  {
    id: "consultor-xingu-hub",
    title: "Consultor Xingu Hub",
    type: "Sales Enablement",
    emoji: "🧭",
    color: "from-blue-400 via-sky-500 to-emerald-500",
    benefit: "✨ Dados de carteira e estoque sempre atualizados",
    description:
      "PWA para vendedores com dashboards de vendas, sincronização automática de usuários e estoque direto do ERP.",
    features: [
      "Onboarding automático de consultores",
      "Ingestão massiva com backoff",
      "Dashboards e ranking em tempo real",
    ],
    fullDescription:
      "Conecta vendedores à operação com autenticação Firebase, sincroniza carteiras e produtos via API Nuvemsolution e mantém o time informado no desktop ou celular.",
    technologies: ["React", "Firebase", "Vite", "Python"],
    results: [
      "Cadastro de vendedores em minutos",
      "Catálogo atualizado diariamente",
      "Uso PWA em campo",
    ],
  },
];
