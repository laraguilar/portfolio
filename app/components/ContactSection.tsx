import { Mail, Phone, Github, Linkedin } from "lucide-react";
import ContactCard from "./ui/ContactCard";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-green-500">{"{"}</span> Entre em Contato <span className="text-green-500">{"}"}</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Vamos trabalhar juntos?</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <ContactCard
            href="mailto:lara.aguilaramorim@gmail.com"
            icon={<Mail className="w-8 h-8 text-green-500" />}
            title="Email"
            text="lara.aguilaramorim@gmail.com"
          />
          <ContactCard
            href="tel:+5527997306222"
            icon={<Phone className="w-8 h-8 text-green-500" />}
            title="Telefone"
            text="(27) 99730-6222"
          />
          <ContactCard
            href="https://github.com/laraguilar"
            icon={<Github className="w-8 h-8 text-green-500" />}
            title="GitHub"
            text="@laraguilar"
          />
          <ContactCard
            href="https://linkedin.com/in/laraaguilar"
            icon={<Linkedin className="w-8 h-8 text-green-500" />}
            title="LinkedIn"
            text="Lara Aguilar"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;