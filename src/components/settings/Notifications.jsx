import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notificacoes = () => {
	const [notificacoes, setNotificacoes] = useState({
		push: true,
		email: false,
		sms: true,
	});

	return (
		<SettingSection icon={Bell} title={"Notificações"}>
			<ToggleSwitch
				label={"Notificações Push"}
				isOn={notificacoes.push}
				onToggle={() => setNotificacoes({ ...notificacoes, push: !notificacoes.push })}
			/>
			<ToggleSwitch
				label={"Notificações por Email"}
				isOn={notificacoes.email}
				onToggle={() => setNotificacoes({ ...notificacoes, email: !notificacoes.email })}
			/>
			<ToggleSwitch
				label={"Notificações por SMS"}
				isOn={notificacoes.sms}
				onToggle={() => setNotificacoes({ ...notificacoes, sms: !notificacoes.sms })}
			/>
		</SettingSection>
	);
};
export default Notificacoes;
