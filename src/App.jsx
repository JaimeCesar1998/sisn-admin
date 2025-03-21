import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import AdministracaoNacional from "./pages/AdministracaoNacional";
import CorpoClinicoNacional from "./pages/CorpoClinicoNacional";
import HospitaisNacional from "./pages/HospitaisNacional";
import PacientesNacional from "./pages/PacientesNacional";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Relactorios from "./pages/Relactorios";
import LoginPage from "./pages/Login";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	useEffect(() => {
		document.title = "Sistema Integrado de Saúde Nacional";
	  }, []);
	return (
	<div>
		{isAuthenticated ? (
			<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

		 
					<Sidebar />
					<Routes>
						<Route path='/' element={<OverviewPage />} />
						<Route path='/users' element={<UsersPage />} />
						<Route path='/administracao_nacional' element={<AdministracaoNacional />} />
						<Route path='/corpo_clinico_nacional' element={<CorpoClinicoNacional />} />
						<Route path='/hospitais_nacional' element={<HospitaisNacional />} />
						<Route path='/pacientes_nacional' element={<PacientesNacional />} />
						<Route path='/analytics' element={<AnalyticsPage />} />
						<Route path='/settings' element={<SettingsPage />} />
						<Route path='/relactorios' element={<Relactorios />} />
					</Routes> 
				</div>
			) : ( 
				<LoginPage onLogin={() => setIsAuthenticated(true)} />
				 
			)}</div>
		
	);
}

export default App;