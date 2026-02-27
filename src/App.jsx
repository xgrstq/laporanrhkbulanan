import { useState } from "react"
import Navbar from "./components/Navbar"
import IsiData from "./pages/IsiData"
import Lihat from "./pages/Lihat"
import RHK from "./pages/RHK"

export default function App() {

  const [page, setPage] = useState("isi")

  const [form, setForm] = useState({
    nama: "",
    nip: "",
    jabatan: "",
    rhk: "",
    kegiatan: "",
    kelompok: "",
    desa: "",
    tempat: "",
    wilayah: "",
    tanggal: "",
    umum: "",
    tujuan: "",
    narasi: "",
    hasil: "",
    simpulan: "",
    foto: null
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar page={page} setPage={setPage} />

      <div className="pt-28 pb-28">
        {page === "isi" && <IsiData form={form} setForm={setForm} />}
        {page === "lihat" && <Lihat form={form} />}
        {page === "rhk" && <RHK />}
      </div>
    </div>
  )
}