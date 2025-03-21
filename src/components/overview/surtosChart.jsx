import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, LabelList, ReferenceLine } from "recharts";

const SURTO_DATA = [
  { name: "Malária", casos: 15000, data: "Março 2024", categoria: "Endemia" },
  { name: "Cólera", casos: 3200, data: "Fevereiro 2024", categoria: "Epidemia" },
  { name: "Dengue", casos: 1800, data: "Janeiro 2024", categoria: "Epidemia" },
  { name: "Sarampo", casos: 950, data: "Dezembro 2023", categoria: "Epidemia" },
  { name: "Covid-19", casos: 700, data: "Novembro 2023", categoria: "Pandemia" },
  { name: "Febre Amarela", casos: 400, data: "Outubro 2023", categoria: "Epidemia" },
];

const COLORS = {
  "Pandemia": "#FF0000",  // Vermelho intenso
  "Epidemia": "#FFA500",  // Laranja vibrante
  "Endemia": "#008000"    // Verde escuro
};

// Componente do Tooltip personalizado com bordas coloridas
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, casos, data, categoria } = payload[0].payload;
    return (
      <motion.div
        className="p-4 rounded-lg shadow-md border"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          borderColor: COLORS[categoria],
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-bold text-lg">{name}</p>
        <p><span className="font-semibold">Casos:</span> {casos.toLocaleString()}</p>
        <p><span className="font-semibold">Data:</span> {data}</p>
        <p><span className="font-semibold">Categoria:</span> <span style={{ color: COLORS[categoria] }}>{categoria}</span></p>
      </motion.div>
    );
  }
  return null;
};

// Componente da Legenda Personalizada
const CustomLegend = () => {
  return (
    <div className="flex justify-center space-x-4 text-white text-sm mb-4">
      {Object.entries(COLORS).map(([categoria, color]) => (
        <div key={categoria} className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          <span>{categoria}</span>
        </div>
      ))}
    </div>
  );
};

const SurtoBarChart = () => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-xl rounded-2xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-bold mb-4 text-white text-center"> Surtos e Epidemias em Angola</h2>
      
      <CustomLegend />

      <div className="h-96">
        <ResponsiveContainer>
          <BarChart data={SURTO_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#E5E7EB" />
            <YAxis stroke="#E5E7EB" />
            <Tooltip content={<CustomTooltip />} />

            {/* Linha de Referência para destacar valores críticos */}
            <ReferenceLine y={5000} stroke="#D97706" strokeDasharray="5 5" label={{ value: "Crítico: 5K", fill: "#FACC15", position: "insideTop" }} />

            <Bar dataKey="casos" fill="#8884d8">
              {SURTO_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.categoria]} />
              ))}
              {/* Adicionando rótulos nas barras */}
              <LabelList dataKey="casos" position="top" fill="white" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SurtoBarChart;
