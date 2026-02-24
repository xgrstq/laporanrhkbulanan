import React, { useState } from "react"

const TEMPLATE_UMUM =
  "Pendamping melaksanakan kegiatan sesuai dengan rencana kerja bulanan yang telah ditetapkan."

const TEMPLATE_TUJUAN =
  "Kegiatan bertujuan memastikan pelaksanaan program berjalan sesuai ketentuan dan tepat sasaran."

const TEMPLATE_NARASI =
  "Pada kegiatan ini, pendamping melaksanakan aktivitas sesuai agenda yang telah direncanakan."

const TEMPLATE_HASIL =
  "Kegiatan berjalan dengan lancar dan sesuai target yang ditetapkan."

function App() {
  const [activeTab, setActiveTab] = useState("isi")

  const [formData, setFormData] = useState({
    nama: "",
    nip: "",
    jabatan: "",
    rhk: "",
    kelompok: "",
    desa: "",
    lokasi: "",
    wilayah: "",
    tanggal: "",
    kop: null,
    ttd: null,
    fotoUtama: null,
    fotoPendukung: null,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pb-24">
      <div className="w-full max-w-md space-y-4">

        {activeTab === "isi" && (
          <>
            {/* Profil */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-3">Profil Pendamping</h2>
              <input name="nama" onChange={handleChange} placeholder="Nama" className="w-full mb-2 p-2 border rounded-lg"/>
              <input name="nip" onChange={handleChange} placeholder="NIP" className="w-full mb-2 p-2 border rounded-lg"/>
              <input name="jabatan" onChange={handleChange} placeholder="Jabatan" className="w-full p-2 border rounded-lg"/>
            </div>

            {/* Umum */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-3">Umum</h2>
              <p className="text-sm">{TEMPLATE_UMUM}</p>
            </div>

            {/* Tujuan */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-3">Tujuan</h2>
              <p className="text-sm">{TEMPLATE_TUJUAN}</p>
            </div>

            {/* Narasi */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-3">Narasi</h2>
              <p className="text-sm">{TEMPLATE_NARASI}</p>
            </div>

            {/* Hasil */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-3">Hasil</h2>
              <p className="text-sm">{TEMPLATE_HASIL}</p>
            </div>
          </>
        )}

        {activeTab === "lihat" && (
          <div className="bg-white rounded-2xl shadow p-4 space-y-2 text-sm">
            <h2 className="font-bold text-lg mb-2">Preview</h2>
            <p><b>Nama:</b> {formData.nama}</p>
            <p><b>NIP:</b> {formData.nip}</p>
            <p><b>Jabatan:</b> {formData.jabatan}</p>
            <hr/>
            <p><b>Umum:</b><br/>{TEMPLATE_UMUM}</p>
            <p><b>Tujuan:</b><br/>{TEMPLATE_TUJUAN}</p>
            <p><b>Narasi:</b><br/>{TEMPLATE_NARASI}</p>
            <p><b>Hasil:</b><br/>{TEMPLATE_HASIL}</p>
          </div>
        )}

      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner">
        <div className="max-w-md mx-auto flex justify-around py-3 text-sm">
          <button onClick={() => setActiveTab("isi")}
            className={`flex flex-col items-center ${activeTab==="isi" ? "text-blue-600" : "text-gray-500"}`}>
            ✏️
            <span>Isi</span>
          </button>

          <button onClick={() => setActiveTab("lihat")}
            className={`flex flex-col items-center ${activeTab==="lihat" ? "text-blue-600" : "text-gray-500"}`}>
            👁️
            <span>Lihat</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App