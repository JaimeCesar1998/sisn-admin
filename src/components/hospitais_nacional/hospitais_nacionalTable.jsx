import { useState } from "react";
import { motion } from "framer-motion";
import { CogIcon, Edit, FileText, KeyRound, LucideEye, Plus, Search, Shield, Trash } from "lucide-react"; 

const userData = [
	{ id: 1, name: "Maria Pia", identificacao: "HOSP-LA-07", categoria:"Público", localizacao: "Luanda", status: "Funcional" },
	{ id: 2, name: "Central do Uige", identificacao: "HOSP-UG-01", categoria:"Público", localizacao: "Uige", status: "Funcional" },
	{ id: 3, name: "Geral de Luanda", identificacao: "HOSP-LA-01", categoria:"Público", localizacao: "Luanda", status: "Funcional" },
	{ id: 4, name: "Central de Benguela", identificacao: "HOSP-BG-02", categoria:"Público", localizacao: "Benguela", status: "Funcional" }, 
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

			<div className='flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4'>
    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-100 text-center md:text-left'>
        Hospitais Nacional
    </h2>
				<button className='mt-4 flex rounded items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Cadastrar
			</button>	<div className="relative w-full max-w-xs">
					<Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
					<input
						type="text"
						placeholder="Pesquisar..."
						className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={searchTerm}
						onChange={handleSearch}
					/>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Designação
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Código
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Categoria
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Localização
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
									<div className='text-sm text-gray-300'>{user.identificacao}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'> {user.categoria} </div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'>{user.localizacao} </div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Funcional"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
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
											<FileText size={20}/>
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Detalhes
											</span>
										</div>
								 

										{/* Botão de Configurações */}
										<div className="relative group">
											<button className="text-yellow-600 hover:text-yellow-300 p-2">
											<LucideEye size={20}/>
											</button>
											<span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
											Visualizar Hospital
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
