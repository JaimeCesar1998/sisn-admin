import { BarChart2, Hash, Heart, HeartPulse, Hospital, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import SalesChannelChar from "../components/overview/surtosChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Visão Geral' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Administrativos' icon={Users} value='6' color='#10B981' />
					<StatCard name='Total de Hospitais' icon={Hospital} value='4' color='#10B981' />
					<StatCard name='Total Profissionais Clínicos' icon={HeartPulse} value='6' color='#10B981' />
					<StatCard name='Total de Pacientes' icon={Users} value='6' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart /> 
					<CategoryDistributionChart />
					<SalesChannelChart />
					<SalesChannelChar />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
