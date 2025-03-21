import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/pacientes_nacional/pacientes_nacionalTable"; 

const userStats = {
	todos: 6,
	recuperado: 4,
	estavel: 0,
	tratamento: 1,
	grave: 0,
	critico: 0,
	internado: 0,
	observacao: 1,
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Pacientes Nacional' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total'
						icon={UsersIcon}
						value={userStats.todos.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name=' Recuperados' icon={UserPlus} value={userStats.recuperado} color='#10B981' />
					<StatCard
						name='Em Tratamento'
						icon={UserCheck}
						value={userStats.estavel.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Internados' icon={UserX} value={userStats.tratamento} color='#F59E0B' />
					<StatCard name='Em Observação' icon={UserX} value={userStats.observacao} color='#F59E0B' />
					<StatCard name='Estáveis' icon={UserX} value={userStats.estavel} color='#F59E0B' />
					<StatCard name='Graves' icon={UserX} value={userStats.grave} color='#EF4444' />
					<StatCard name='Críticos' icon={UserX} value={userStats.critico} color='#EF4444' />

				</motion.div>

				<UsersTable />

				{/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'> 
				</div>
			</main>
		</div>
	);
};
export default UsersPage;
