import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const medicineOutflowData = [
	{ name: "Paracetamol", quantity: 1520 },
	{ name: "Amoxicilina", quantity: 1340 },
	{ name: "Ibuprofeno", quantity: 1780 },
	{ name: "Dipirona", quantity: 1620 },
	{ name: "Losartana", quantity: 1200 },
	{ name: "Omeprazol", quantity: 1450 },
	{ name: "Metformina", quantity: 1100 },
	{ name: "Salbutamol", quantity: 950 },
	{ name: "Hidroclorotiazida", quantity: 860 },
	{ name: "Ranitidina", quantity: 720 },
];

const MedicineOutflowChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Saída de Medicamentos nos Hospitais</h2>

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
							dataKey='quantity'
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
