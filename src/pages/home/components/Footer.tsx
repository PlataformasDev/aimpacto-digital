export function Footer() {
  const navigation = [
    { label: "Sobre", id: "sobre" },
    { label: "Projetos", id: "projetos" },
    { label: "Orçamento", id: "orcamento" },
    { label: "Contato", id: "contato" },
  ];

  const contacts = [
    { icon: "ri-mail-line", value: "aimpactodigital@gmail.com" },
    { icon: "ri-phone-line", value: "+55 (66) 98414-1352" },
    { icon: "ri-map-pin-line", value: "Água Boa - MT" },
  ];

  const socials = [
    { icon: "ri-linkedin-fill", href: "https://www.linkedin.com" },
    { icon: "ri-instagram-line", href: "https://www.instagram.com" },
    { icon: "ri-whatsapp-line", href: "https://wa.me/5566984141352" },
  ];

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contato"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="section-padding mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">Impacto Digital</p>
          <p className="mt-3 text-sm text-blue-100">
            Soluções empresariais sob medida com squads ágeis, design premium e tecnologia de ponta.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {contacts.map((contact) => (
              <li key={contact.value} className="flex items-center gap-2">
                <i className={`${contact.icon} text-lg text-orange-300`} />
                {contact.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Redes
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
              >
                <i className={`${social.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Impacto Digital. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="#">
              Privacidade
            </a>
            <a className="hover:text-white" href="#">
              Termos
            </a>
            <span className="text-orange-300">Powered by Readdy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
