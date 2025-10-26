import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export function ContactActionsBtn() {
  return (
    <div className="text-center mb-20 px-4 sm:px-0">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Actions Rapides
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
        <a
          href="mailto:yann.andronio@email.com"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg
            bg-indigo-500 text-white shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Envoyer un Email
          <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="https://wa.me/0342290407"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-full font-bold text-base sm:text-lg
            border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400
            hover:bg-indigo-500/10 dark:hover:bg-indigo-400/20 transition-all duration-300"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="truncate sm:whitespace-normal">
            Contacter via WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactActionsBtn;
