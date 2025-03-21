import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const SURTO_DATA = [
  { name: "Malária", casos: 15000, data: "Março 2024", categoria: "Endemia" },
  { name: "Cólera", casos: 3200, data: "Fevereiro 2024", categoria: "Epidemia" },
  { name: "Dengue", casos: 1800, data: "Janeiro 2024", categoria: "Epidemia" },
  { name: "Sarampo", casos: 950, data: "Dezembro 2023", categoria: "Epidemia" },
  { name: "Covid-19", casos: 700, data: "Novembro 2023", categoria: "Pandemia" },
  { name: "Febre Amarela", casos: 400, data: "Outubro 2023", categoria: "Epidemia" },
];

const COLORS = {
  "Pandemia": "#E63946",  // Vermelho forte
  "Epidemia": "#F4A261",  // Laranja
  "Endemia": "#2A9D8F"    // Verde
};

// Componente do Tooltip personalizado
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, casos, data, categoria } = payload[0].payload;
    return (
      <div className="p-3 bg-gray-900 text-white rounded-md shadow-lg border border-gray-700">
        <p className="font-bold">{name}</p>
        <p>Casos: {casos}</p>
        <p>Data: {data}</p>
        <p>Categoria: <span style={{ color: COLORS[categoria] }}>{categoria}</span></p>
      </div>
    );
  }
  return null;
};

const SurtoBarChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Surtos em Angola</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SURTO_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Bar dataKey="casos" fill="#8884d8">
              {SURTO_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.categoria]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SurtoBarChart;
