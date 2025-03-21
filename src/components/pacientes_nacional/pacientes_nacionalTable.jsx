import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, FileText, History, KeyRound, Search, Shield, Trash, User, UserCircle } from "lucide-react"; 

const userData = [
	{ id: 1, name: "João António", identidade: "004793483UE043", servico:"Consulta", role: "Técnico de Redes", hospital:"Maria Pia - Luanda",  status: "Recuperado" },
	{ id: 2, name: "José Pedro de Castro", identidade: "00405687362LA042", servico:"Análise", role: "Administrador", hospital:"Central - Luanda", status: "Em Tratamento" },
	{ id: 3, name: "Bruno Manuel", identidade: "000532185BG069", servico:"Consulta",  role: "Analista Financeiro", hospital:"Central - Uige", status: "Em Observação" },
	{ id: 4, name: "Paula Bambi", identidade: "003532185BG069", servico:"Ecografia",  role: "Faxineira", hospital:"Central - Benguel", status: "Recuperado" }, 
	{ id: 5, name: "Pedro António Manuel", identidade: "008232185BG069", servico:"Análise", role: "Agendador", hospital:"Central - Huambo", status: "Recuperado" },
	{ id: 6, name: "Rocha Zangue", identidade: "003535185BG069", servico:"Análise", role: "Secretário", hospital:"Central - Huambo", status: "Recuperado" }, 
];

const UsersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Pacientes Nacional</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Pesquisar...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={20} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Nome
							</th>
							
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Identidade
							</th>			
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Última Unidade Hospitalar
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Serviço Feito
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Estado
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Acções
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredUsers.map((user) => (
							<motion.tr
								key={user.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
										</div>
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-300'>{user.identidade}</div>
								</td>
								<td className='text-sm text-gray-300'>
										{user.hospital}
								</td>
								<td className='text-sm text-gray-300'>
										{user.servico}
								</td>
							
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Recuperado"
												? "bg-green-800 text-green-100"
												: "bg-yellow-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>


								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
										<div className="flex space-x-2">
										{/* Botão de Editar */}
										<div className="relative group">
											<button className="text-indigo-400 hover:text-indigo-300 p-2">
											<Edit size={20} />
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Editar
											</span>
										</div>

										{/* Botão de Excluir */}
										<div className="relative group">
											<button className="text-red-400 hover:text-red-300 p-2">
											<Trash size={20} />
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Deletar
											</span>
										</div>


										{/* Botão de Vizualizar */}
										<div className="relative group">
											<button className="text-gray-400 hover:text-gray-300 p-2">
											<FileText size={20} />
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Detalhes
											</span>
										</div>
								 

										{/* Botão de Configurações */}
										<div className="relative group">
											<button className="text-yellow-600 hover:text-yellow-300 p-2">
											<History  size={20}/>
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Histórico Clínico
											</span>
										</div>
										</div>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default UsersTable;
