import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 p-4 relative">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-gray-900 shadow-lg rounded-lg overflow-hidden relative z-10">
        
        {/* Esquerda - Imagens e Texto */}
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="flex space-x-4 mb-4">
            <img src="/saude.png" alt="Saúde" className="h-16" />
            <img src="/gov.png" alt="Governo" className="h-16" />
          </div>
          <p className="text-center text-gray-300 mb-4">
            <strong>Sistema Integrado de Saúde Nacional</strong>
          </p>
          <p className="text-center text-gray-500">Painel Principal dos Hospitais</p>
        </div>

        <hr />

        {/* Direita - Login */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-900 text-white relative z-20"
        >
          <h2 className="text-3xl font-semibold mb-6">Entrar</h2>
          <div className="space-y-6 w-full max-w-xs">
            {/* Campo Usuário */}
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            />

            {/* Campo Senha com Ícone */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-gray-500 shadow-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Botão Entrar */}
            <button
              onClick={handleLogin}
              className="w-full p-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition shadow"
            >
              ENTRAR
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
