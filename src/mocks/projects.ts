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
};

export const projects: Project[] = [
  {
    id: "nps-dashboard",
    title: "NPS Dashboard",
    type: "Analytics",
    emoji: "📋",
    color: "from-blue-500 via-indigo-500 to-indigo-600",
    benefit: "✨ Sistema automatizado de Pesquisa de Satisfação",
    description:
      "Painel que automatiza o envio de pesquisas de satisfação por WhatsApp após cada atendimento e centraliza os resultados em tempo real.",
    features: [
      "Envio automático de pesquisas via WhatsApp em etapas programadas",
      "Alertas em tempo real para notas baixas (detratores)",
      "Relatórios segmentados por filial e técnico, com exportação em PDF",
    ],
    fullDescription:
      "Para empresas que prestam serviços e precisam medir a satisfação do cliente sem depender de ligações ou formulários manuais. Após o atendimento, o sistema dispara pesquisas automáticas por WhatsApp em intervalos definidos. As respostas chegam ao painel em tempo real, com destaque imediato para clientes insatisfeitos e um botão de contato rápido para o gestor agir antes que o problema cresça. Relatórios comparam o desempenho por filial e por técnico.",
  },
  {
    id: "rh-conecta",
    title: "RH Conecta",
    type: "RH + Automação",
    emoji: "👥",
    color: "from-purple-500 via-fuchsia-500 to-pink-500",
    benefit: "✨ Toda a jornada do colaborador automatizada via WhatsApp",
    description:
      "Plataforma que automatiza onboarding, desligamento, avaliação 360° e pesquisa de clima, com envio e coleta de respostas direto pelo WhatsApp.",
    features: [
      "Onboarding digital com assinatura eletrônica via WhatsApp",
      "Entrevista de desligamento e avaliação 360° com links automáticos",
      "Pesquisa de clima organizacional e aniversários automatizados",
    ],
    fullDescription:
      "Para empresas que querem digitalizar processos de RH sem depender de papel ou reuniões presenciais. Cada etapa da jornada do colaborador — admissão, avaliação, desligamento — gera um link seguro enviado por WhatsApp, com assinatura eletrônica quando necessário. Gestores acompanham tudo por filial, com métricas de participação e resultados centralizados no painel.",
  },
  {
    id: "controle-revisoes",
    title: "Controle de Revisões",
    type: "Gestão + App",
    emoji: "⚙️",
    color: "from-orange-500 via-red-500 to-red-600",
    benefit: "✨ Manutenção da frota monitorada em tempo real, com alertas automáticos",
    description:
      "Sistema com app de campo para operadores registrarem horas e um painel de gestão para administradores acompanharem toda a frota, sincronizados em tempo real.",
    features: [
      "Registro de horas em campo com histórico de observações, fotos e áudio",
      "Status de manutenção em tempo real (normal, atenção, crítico) com alertas automáticos via WhatsApp",
      "Painel de gestão com filtros por filial, exportação de relatórios e múltiplos perfis de acesso",
    ],
    fullDescription:
      "Para empresas que operam frotas de máquinas e precisam evitar paradas não planejadas. Operadores no campo registram horas, fotos e observações de voz direto do celular, sem precisar instalar nada. Cada equipamento tem status visual (normal, atenção ou crítico) e, quando a revisão se aproxima ou atrasa, o sistema dispara alertas automáticos por WhatsApp. Gestores acompanham toda a frota por filial em um painel administrativo, com relatórios exportáveis e controle de acesso por perfil (administrador, cliente, operador, mecânico).",
  },
  {
    id: "app-frota",
    title: "App Frota",
    type: "Gestão + App",
    emoji: "🚗",
    color: "from-green-500 via-emerald-500 to-emerald-600",
    benefit: "✨ Manutenção e abastecimento da frota sob controle, direto do celular",
    description:
      "App para motoristas registrarem manutenções e abastecimentos, com fluxo de aprovação e painel administrativo para gestão de toda a frota.",
    features: [
      "Registro de manutenção com fluxo de aprovação (orçamento, peças, mão de obra)",
      "Controle de abastecimento com custo, km rodado e comprovante fotográfico",
      "Funciona offline e sincroniza automaticamente ao reconectar",
    ],
    fullDescription:
      "Para empresas com frota de veículos que precisam de controle sem depender de planilhas. Motoristas registram manutenções e abastecimentos pelo celular, mesmo sem internet — os dados sincronizam assim que a conexão volta. Cada manutenção passa por um fluxo de aprovação com orçamento, peças e mão de obra antes de ser executada. Gestores acompanham a frota inteira em um painel com relatórios exportáveis em PDF e controle por filial.",
  },
  {
    id: "cobranca-pro",
    title: "Cobrança Pro",
    type: "Financeiro",
    emoji: "💰",
    color: "from-yellow-400 via-orange-400 to-orange-500",
    benefit: "✨ Cobrança automatizada por WhatsApp, com controle total de recebíveis",
    description:
      "Sistema de gestão de cobrança que centraliza títulos, recebimentos e envia lembretes automáticos por WhatsApp para reduzir a inadimplência.",
    features: [
      "Importação de títulos via planilha ou integração direta via API com o sistema da empresa",
      "Envio automático de cobrança por WhatsApp com mensagens personalizadas por cliente",
      "Registro de recebimentos (PIX, boleto, transferência) e dashboard financeiro com gráficos",
    ],
    fullDescription:
      "Para empresas que precisam reduzir a inadimplência sem depender de planilhas soltas. Os títulos (contas a receber) podem ser importados via planilha ou integrados diretamente via API com o sistema que a empresa já usa, com status atualizado automaticamente (em aberto, vencido, recebido, negociado). O sistema dispara cobranças por WhatsApp com mensagens personalizadas — nome do cliente, valor, dias de atraso — e registra cada pagamento recebido, por forma de pagamento. Um dashboard financeiro mostra a visão geral dos recebíveis por período.",
  },
  {
    id: "landing-page-gerenciavel",
    title: "Landing Page Gerenciável",
    type: "Site Personalizável",
    emoji: "🌐",
    color: "from-violet-500 via-purple-500 to-pink-500",
    benefit: "✨ Site profissional com painel próprio — sem dev para atualizar",
    description:
      "Landing page adaptável a qualquer segmento de negócio, com painel administrativo para gerenciar conteúdo, imagens e identidade visual sem depender de desenvolvedor.",
    features: [
      "Painel administrativo para gerenciar textos, imagens e informações do negócio",
      "Acesso protegido por autenticação, com controle total sobre o que é publicado",
      "Estrutura personalizável por seção — cada negócio define o que faz sentido exibir (catálogo, promoções, vagas, serviços)",
    ],
    fullDescription:
      "Desenvolvida para qualquer segmento de negócio — farmácias, comércios, revendas, prestadoras de serviço — a solução entrega um site profissional com painel próprio de administração. Cada negócio define as seções que precisa (promoções, catálogo, vagas, portfólio de serviços) e atualiza tudo sem depender de um desenvolvedor. O painel é protegido por autenticação e os dados ficam armazenados com segurança.",
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
  },
];
