import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const hospitalData = [
  { name: "Funcionais", value: 120 },
  { name: "Parcialmente Funcionais", value: 45 },
  { name: "Não Funcionais", value: 30 },
];

const COLORS = ["#10B981", "#F59E0B", "#EF4444"]; // Verde, amarelo, vermelho

// Tooltip personalizado
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
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
        <p><span className="font-semibold">Total:</span> {value}</p>
      </motion.div>
    );
  }
  return null;
};

const HospitalStatusChart = () => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4 text-white text-center"> Distribuição dos Hospitais</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={hospitalData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              isAnimationActive
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {hospitalData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="transition-transform duration-300 hover:scale-105"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default HospitalStatusChart;
