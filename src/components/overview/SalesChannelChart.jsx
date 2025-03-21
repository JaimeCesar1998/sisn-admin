import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, LabelList } from "recharts";

const COLORS = ["#10B981", "#007BFF", "#FFC107", "#B22222", "#B22222", "#EC4899", "gray"];

const PATIENT_STATUS_DATA = [
  { name: "Recuperado", estado: 4 },
  { name: "Estável", estado: 0 },
  { name: "Em Tratamento", estado: 1 },
  { name: "Grave", estado: 0 },
  { name: "Crítico", estado: 0 },
  { name: "Internado", estado: 0 },
  { name: "Em Observação", estado: 1 },
];

// Tooltip personalizado
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, estado } = payload[0].payload;
    return (
      <motion.div
        className="p-4 rounded-lg shadow-md border"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          borderColor: "#4B5563",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-bold text-lg">{name}</p>
        <p><span className="font-semibold">Pacientes:</span> {estado}</p>
      </motion.div>
    );
  }
  return null;
};

// Legenda personalizada
const CustomLegend = () => {
  return (
    <div className="flex justify-center space-x-4 text-white text-sm mb-4">
      {PATIENT_STATUS_DATA.map((entry, index) => (
        <div key={entry.name} className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
          <span>{entry.name}</span>
        </div>
      ))}
    </div>
  );
};

const PatientStatusBarChart = () => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
     <strong> <h2 className="text-xl font-bold mb-4 text-white text-center"> Estado dos Pacientes</h2></strong>

      <CustomLegend />

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={PATIENT_STATUS_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Bar dataKey="estado" fill="#8884d8">
              {PATIENT_STATUS_DATA.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.estado === 0 ? "#374151" : COLORS[index % COLORS.length]} 
                />
              ))}
              <LabelList dataKey="estado" position="top" fill="white" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PatientStatusBarChart;
