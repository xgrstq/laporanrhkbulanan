import html2pdf from "html2pdf.js"
import { FiFileText, FiEye, FiClipboard, FiDownload, FiFile } from "react-icons/fi"

export default function Navbar({ page, setPage }) {

  const handleExportPDF = () => {
    const element = document.getElementById("print-area")
    if (!element) return alert("Tidak ada data untuk diexport")

    const opt = {
      margin: 0.5,
      filename: `Laporan-${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    }

    html2pdf().set(opt).from(element).save()
  }

  const handleExportWord = () => {
    const element = document.getElementById("print-area")
    if (!element) return alert("Tidak ada data untuk diexport")

    const blob = new Blob(
      ['\ufeff', element.innerHTML],
      { type: "application/msword" }
    )

    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `Laporan-${Date.now()}.doc`
    a.click()
    URL.revokeObjectURL(url)
  }

  const menus = [
    { key: "isi", label: "Isi Data", icon: <FiFileText /> },
    { key: "lihat", label: "Lihat", icon: <FiEye /> },
    { key: "rhk", label: "RHK", icon: <FiClipboard /> }
  ]

  return (
    <>
{/* DESKTOP */}
<div className="hidden md:block sticky top-4 z-40">
  <div className="flex justify-center">
    <div className="flex items-center gap-8 bg-white shadow-xl border px-10 py-4 rounded-full">

      <div className="flex items-center gap-3 pr-6 border-r">
        <div className="w-9 h-9 bg-green-800 rounded-full" />
        <div>
          <p className="text-sm font-semibold">Laporan PKH</p>
          <p className="text-xs text-gray-500">Sistem Pendamping</p>
        </div>
      </div>

      {menus.map((menu) => (
        <button
          key={menu.key}
          onClick={() => setPage(menu.key)}
          className={`flex items-center gap-2 font-medium transition ${
            page === menu.key
              ? "text-green-700"
              : "text-gray-500 hover:text-green-700"
          }`}
        >
          {menu.icon}
          {menu.label}
        </button>
      ))}

      <div className="w-px h-8 bg-gray-300" />

      <button
        onClick={handleExportPDF}
        className="flex items-center gap-2 text-green-700 hover:scale-105 transition"
      >
        <FiDownload />
        PDF
      </button>

      <button
        onClick={handleExportWord}
        className="flex items-center gap-2 text-green-700 hover:scale-105 transition"
      >
        <FiFile />
        Word
      </button>

    </div>
  </div>
</div>

      {/* MOBILE */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999]">
        <div className="flex items-center gap-6 bg-white shadow-xl border px-6 py-3 rounded-full">

          {menus.map((menu) => (
            <button
              key={menu.key}
              onClick={() => setPage(menu.key)}
              className={`flex flex-col items-center text-xs ${
                page === menu.key ? "text-green-700" : "text-gray-500"
              }`}
            >
              <span className="text-lg">{menu.icon}</span>
              {menu.label}
            </button>
          ))}

          <div className="w-px h-6 bg-gray-300" />

          <button
            onClick={handleExportPDF}
            className="flex flex-col items-center text-xs text-green-700"
          >
            <FiDownload className="text-lg" />
            PDF
          </button>

          <button
            onClick={handleExportWord}
            className="flex flex-col items-center text-xs text-green-700"
          >
            <FiFile className="text-lg" />
            Word
          </button>

        </div>
      </div>
    </>
  )
}