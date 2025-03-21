import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const medicineOutflowData = [
	{ name: "Paracetamol", quantidade: 1520 },
	{ name: "Amoxicilina", quantidade: 1340 },
	{ name: "Ibuprofeno", quantidade: 1780 },
	{ name: "Dipirona", quantidade: 1620 },
	{ name: "Losartana", quantidade: 1200 },
	{ name: "Omeprazol", quantidade: 1450 },
	{ name: "Metformina", quantidade: 1100 },
	{ name: "Salbutamol", quantidade: 950 },
	{ name: "Hidroclorotiazida", quantidade: 860 },
	{ name: "Ranitidina", quantidade: 720 },
];

const MedicineOutflowChart = () => {
	return (
		<motion.div
			className='bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className="text-xl font-bold mb-4 text-white text-center">Saída de Medicamentos nos Hospitais</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={medicineOutflowData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='quantidade'
							stroke='#F59E0B'
							strokeWidth={3}
							dot={{ fill: "#F59E0B", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default MedicineOutflowChart;
