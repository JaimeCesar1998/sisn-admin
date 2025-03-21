import { useState } from "react";

 
const RELATORIO_DATA = [
  { name: "Malária", casos: 15000, categoria: "Endemia" },
  { name: "Cólera", casos: 3200, categoria: "Epidemia" },
  { name: "Dengue", casos: 1800, categoria: "Epidemia" },
  { name: "Sarampo", casos: 950, categoria: "Epidemia" },
  { name: "Covid-19", casos: 700, categoria: "Pandemia" },
  { name: "Febre Amarela", casos: 400, categoria: "Epidemia" },
];

const Relatorios = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");

  const dadosFiltrados = filtroCategoria
    ? RELATORIO_DATA.filter((dado) => dado.categoria === filtroCategoria)
    : RELATORIO_DATA;

  const exportarPDF = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Surtos", 14, 10); 
    doc.autoTable({
      startY: 20,
      head: [["Doença", "Casos", "Categoria"]],
      body: dadosFiltrados.map(({ name, casos, categoria }) => [name, casos, categoria]),
    });
    doc.save("relatorio.pdf");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Relatório Detalhado</h2>

      <div className="flex space-x-4 mb-6">
        <select
          className="p-2 bg-gray-800 rounded border border-gray-600"
          onChange={(e) => setFiltroCategoria(e.target.value)}
          value={filtroCategoria}
        >
          <option value="">Todas Categorias</option>
          <option value="Endemia">Endemia</option>
          <option value="Epidemia">Epidemia</option>
          <option value="Pandemia">Pandemia</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dadosFiltrados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="casos" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
          onClick={exportarPDF}
        >
          Exportar PDF
        </button>
        <CSVLink
          data={dadosFiltrados}
          filename={"relatorio.csv"}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded"
        >
          Exportar CSV
        </CSVLink>
        <button
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default Relatorios;
