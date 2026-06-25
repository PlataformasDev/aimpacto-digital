import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/aimpactodigital@gmail.com";

const defaultForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  project: "",
  message: "",
};

export function FormSection() {
  const [formData, setFormData] = useState(defaultForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const remainingChars = 500 - formData.message.length;

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const payload = new URLSearchParams({ ...formData });
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) throw new Error("Erro ao enviar formulário");

      setFeedback({ type: "success", message: "Recebemos sua solicitação! Retornaremos em até 24h." });
      setFormData(defaultForm);
    } catch {
      setFeedback({ type: "error", message: "Não foi possível enviar agora. Tente novamente em instantes." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="section-padding bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Briefing
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-gray-900">
            Conte pra gente sobre o {" "}
            <span className="gradient-text-primary">próximo desafio</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Preencha o formulário e receba um diagnóstico completo com estimativa de investimento e cronograma inicial.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Prazo médio</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">30 dias úteis</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Consultoria</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">Gratuita</p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl"
        >
          <div className="grid gap-5">
            <InputField label="Nome" type="text" value={formData.name} onChange={handleChange("name")}
              placeholder="Seu nome completo" required />
            <InputField label="Email" type="email" value={formData.email} onChange={handleChange("email")}
              placeholder="nome@empresa.com" required />
            <InputField label="Telefone" type="tel" value={formData.phone} onChange={handleChange("phone")}
              placeholder="(00) 00000-0000" />
            <InputField label="Empresa" type="text" value={formData.company} onChange={handleChange("company")}
              placeholder="Nome da empresa" />
            <div>
              <label className="text-sm font-semibold text-gray-800">Projeto</label>
              <select
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
                value={formData.project}
                onChange={handleChange("project")}
              >
                <option value="">Selecione</option>
                <option value="access">Portal de Aplicações</option>
                <option value="nps">NPS Dashboard</option>
                <option value="rh">RH Conecta</option>
                <option value="portal">Portal Corporativo</option>
                <option value="xone">Controle de Revisões</option>
                <option value="frota">App Frota</option>
                <option value="cobranca">Cobrança Pro</option>
                <option value="landing">Landing Page Gerenciável</option>
                <option value="pecas">Inteligência de Estoque</option>
                <option value="hub">Painel Comercial de Campo</option>
                <option value="other">Outro</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">Mensagem</label>
              <textarea
                maxLength={500}
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Conte qual é o desafio e o objetivo principal"
                className="mt-2 min-h-[130px] w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
              />
              <div className="mt-1 text-right text-xs text-gray-500">{remainingChars} caracteres restantes</div>
            </div>
          </div>

          {feedback && (
            <div
              className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${
                feedback.type === "success"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-rose-50 text-rose-700"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="btn-primary mt-6 flex w-full items-center justify-center gap-2"
          >
            {isSubmitting && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
            {isSubmitting ? "Enviando..." : "Enviar Briefing"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

function InputField({ label, type, value, onChange, placeholder, required }: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-800">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
      />
    </div>
  );
}
