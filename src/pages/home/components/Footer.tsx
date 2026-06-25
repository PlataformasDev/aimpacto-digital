type FooterProps = {
  onNavigate: (sectionId: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const navigation = [
    { label: "Sobre", id: "sobre" },
    { label: "Projetos", id: "projetos" },
    { label: "Orçamento", id: "orcamento" },
  ];

  const contacts = [
    { icon: "ri-mail-line", value: "aimpactodigital@gmail.com" },
    { icon: "ri-phone-line", value: "+55 (66) 98414-1352" },
    { icon: "ri-map-pin-line", value: "Água Boa - MT" },
  ];

  return (
    <footer
      id="contato"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="section-padding mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
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
                  onClick={() => onNavigate(item.id)}
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
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl px-4 py-6 text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Impacto Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
