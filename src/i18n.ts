import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'pt-BR': {
    translation: {
      nav: {
        sobre: 'Sobre',
        projetos: 'Projetos',
        contato: 'Contato',
        solicitarOrcamento: 'Solicitar Orçamento',
      },
      hero: {
        titulo: 'Soluções Inteligentes para Transformar seu Negócio',
        subtitulo: 'Da gestão de vendas ao financeiro, tudo integrado e pronto para escalar',
        conheca: 'Conheça Nossas Soluções',
        orcamento: 'Solicitar Orçamento',
        projetos: 'Projetos Entregues',
        satisfacao: 'Satisfação',
        suporte: 'Suporte',
      },
      about: {
        titulo: 'Transformamos Desafios em Resultados',
        descricao: 'Somos especialistas em criar soluções tecnológicas que impulsionam negócios.',
        inovacao: 'Inovação Constante',
        inovacaoDesc: 'Utilizamos as tecnologias mais modernas para criar soluções que colocam sua empresa à frente da concorrência',
        seguranca: 'Segurança Garantida',
        segurancaDesc: 'Todos os nossos sistemas são desenvolvidos com os mais altos padrões de segurança e proteção de dados',
        suporte: 'Suporte Dedicado',
        suporteDesc: 'Equipe especializada disponível 24/7 para garantir que suas operações nunca param',
      },
      projects: {
        titulo: 'Nossas Soluções',
        descricao: 'Conheça nosso portfólio de soluções inteligentes',
      },
      cta: {
        titulo: 'Pronto para Transformar seu Negócio?',
        descricao: 'Agende uma demonstração gratuita e descubra como nossas soluções podem impulsionar seus resultados',
        resposta24h: 'Resposta em até 24h',
        semCompromisso: 'Sem compromisso',
        consultoriaGratuita: 'Consultoria gratuita',
        solicitarDemo: 'Solicitar Demo Gratuita',
        novoNome: 'Seu Nome',
        novoEmail: 'seu@email.com',
        novoTelefone: '(66) 9 8414-1352',
        selecionarSolucao: '-- Selecione uma solução --',
      },
      contact: {
        titulo: 'Solicite um Orçamento',
        descricao: 'Preencha o formulário abaixo e entraremos em contato em breve',
        telefone: 'Telefone',
        email: 'Email',
        localizacao: 'Localização',
        nomeCompleto: 'Nome Completo',
        empresa: 'Empresa',
        qualSolucao: 'Qual solução te interessa?',
        mensagem: 'Mensagem',
        enviar: 'Enviar Solicitação',
        obrigado: 'Obrigado! Entraremos em contato em breve.',
      },
      footer: {
        direitos: 'Todos os direitos reservados',
        feitoComCarinhoEm: 'Feito com carinho em Xingu',
        links: 'Links Rápidos',
        voltarAoTopo: 'Voltar ao Topo',
      },
    },
  },
  'en': {
    translation: {
      nav: {
        sobre: 'About',
        projetos: 'Projects',
        contato: 'Contact',
        solicitarOrcamento: 'Request Quote',
      },
      hero: {
        titulo: 'Intelligent Solutions to Transform Your Business',
        subtitulo: 'From sales management to finance, everything integrated and ready to scale',
        conheca: 'Know Our Solutions',
        orcamento: 'Request a Quote',
        projetos: 'Projects Delivered',
        satisfacao: 'Satisfaction',
        suporte: 'Support',
      },
      about: {
        titulo: 'We Transform Challenges into Results',
        descricao: 'We specialize in creating technological solutions that drive business.',
        inovacao: 'Constant Innovation',
        inovacaoDesc: 'We use the most modern technologies to create solutions that put your company ahead of the competition',
        seguranca: 'Guaranteed Security',
        segurancaDesc: 'All our systems are developed with the highest standards of security and data protection',
        suporte: 'Dedicated Support',
        suporteDesc: 'Specialized team available 24/7 to ensure your operations never stop',
      },
      projects: {
        titulo: 'Our Solutions',
        descricao: 'Meet our portfolio of intelligent solutions',
      },
      cta: {
        titulo: 'Ready to Transform Your Business?',
        descricao: 'Schedule a free demo and discover how our solutions can boost your results',
        resposta24h: 'Response within 24 hours',
        semCompromisso: 'No commitment',
        consultoriaGratuita: 'Free consultation',
        solicitarDemo: 'Request Free Demo',
        novoNome: 'Your Name',
        novoEmail: 'your@email.com',
        novoTelefone: '(66) 9 8414-1352',
        selecionarSolucao: '-- Select a solution --',
      },
      contact: {
        titulo: 'Request a Quote',
        descricao: 'Fill out the form below and we will contact you shortly',
        telefone: 'Phone',
        email: 'Email',
        localizacao: 'Location',
        nomeCompleto: 'Full Name',
        empresa: 'Company',
        qualSolucao: 'Which solution interests you?',
        mensagem: 'Message',
        enviar: 'Send Request',
        obrigado: 'Thank you! We will contact you soon.',
      },
      footer: {
        direitos: 'All rights reserved',
        feitoComCarinhoEm: 'Made with care in Xingu',
        links: 'Quick Links',
        voltarAoTopo: 'Back to Top',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
