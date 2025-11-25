const ContactCard = ({ 
  href, 
  icon, 
  title, 
  text 
}: { 
  href: string; 
  icon: React.ReactNode; 
  title: string; 
  text: string;
}) => {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all group text-center"
    >
      <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm break-all">{text}</p>
    </a>
  );
};

export default ContactCard;
