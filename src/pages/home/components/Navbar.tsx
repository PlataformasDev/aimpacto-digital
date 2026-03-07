import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavbarProps = {
  onNavigate: (sectionId: string) => void;
};

const links = [
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "projetos" },
  { label: "Contato", id: "contato" },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1">
          <span className="font-display text-6xl font-bold text-gray-900 leading-none">A</span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-gray-900">
              Impacto Digital
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Soluções Inteligentes
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-cyan-600"
            >
              {link.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate("orcamento")}
            className="btn-primary"
          >
            Solicitar Orçamento
          </motion.button>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <i className={`text-2xl ${isOpen ? "ri-close-line" : "ri-menu-line"}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur"
          >
            <div className="space-y-4 px-4 py-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className="block w-full text-left text-base font-medium text-gray-800"
                >
                  {link.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate("orcamento")}
                className="btn-primary w-full"
              >
                Solicitar Orçamento
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
