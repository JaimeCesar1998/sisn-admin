import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const ContasConectadas = () => {
	const [contas, setContas] = useState([
		{
			id: 1,
			nome: "Google",
			conectado: true,
			icone: "/google.png",
		},
		{
			id: 2,
			nome: "Facebook",
			conectado: false,
			icone: "/facebook.svg",
		},
		{
			id: 3,
			nome: "Twitter",
			conectado: true,
			icone: "/x.png",
		},
	]);
	return (
		<SettingSection icon={HelpCircle} title={"Contas Conectadas"}>
			{contas.map((conta) => (
				<div key={conta.id} className='flex items-center justify-between py-3'>
					<div className='flex gap-1'>
						<img src={conta.icone} alt='Ícone da rede social' className='size-6 object-cover rounded-full mr-2' />
						<span className='text-gray-300'>{conta.nome}</span>
					</div>
					<button
						className={`px-3 py-1 rounded ${
							conta.conectado ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setContas(
								contas.map((c) => {
									if (c.id === conta.id) {
										return {
											...c,
											conectado: !c.conectado,
										};
									}
									return c;
								})
							);
						}}
					>
						{conta.conectado ? "Conectado" : "Conectar"}
					</button>
				</div>
			))}
			<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Adicionar Conta
			</button>
		</SettingSection>
	);
};
export default ContasConectadas;
