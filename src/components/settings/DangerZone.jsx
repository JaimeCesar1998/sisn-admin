import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TerminarSessao = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔹 Limpa os dados do usuário (se necessário)
    localStorage.removeItem("userToken");
    sessionStorage.clear();

    // 🔹 Redireciona para login e atualiza a página
    setTimeout(() => {
      window.location.reload();
    }, 0); // Pequeno delay para garantir a navegação antes da recarga
  };

  return (
    <motion.div
      className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <LogOut className="text-red-400 mr-3" size={24} />
        <h2 className="text-xl font-semibold text-gray-100">Terminar Sessão</h2>
      </div>
      <p className="text-gray-300 mb-4">
        Você poderá entrar novamente a qualquer momento.
      </p>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Sair
      </button>
    </motion.div>
  );
};

export default TerminarSessao;
