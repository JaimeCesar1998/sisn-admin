import { UserCheck, UserPlus, Hospital, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/hospitais_nacional/hospitais_nacionalTable"; 

const userStats = {
	totalUsers: 4,
	newUsersToday: 0,
	activeUsers: 4,
	churnRate: 0,
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Hospitais Nacional' />

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
						icon={Hospital}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard
						name='Funcionais'
						icon={Hospital}
						value={userStats.activeUsers.toLocaleString()}
						color='#10B981'
					/>
					<StatCard name='Em Reforma' icon={Hospital} value={userStats.newUsersToday} color='#F59E0B' />
					<StatCard name='Não Funcionais' icon={Hospital} value={userStats.churnRate} color='#EF4444' />
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
