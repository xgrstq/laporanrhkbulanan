import Card from "../components/Card"
import ModalKegiatan from "../components/ModalKegiatan"
import FileUpload from "../components/FileUpload"
import { useState } from "react"

const RHK_LIST = [
  "RHK 1: Penyaluran Bansos PKH Tepat Sasaran & Jumlah",
  "RHK 2: Pertemuan P2K2 Sesuai Ketentuan",
  "RHK 3: Verifikasi Komitmen & Pendampingan",
  "RHK 4: Data KPM Graduasi Sesuai Instrumen",
  "RHK 5: VerVal dan Permutakhiran Data KPM",
  "RHK 6: Respon Kasus Adaptif",
  "RHK 7: Analisis Laporan Bulanan",
  "RHK 8: Direktif Pimpinan Sesuai Penugasan",
  "RHK 9: Penyebaran Berita Baik Kemensos"
]

const KEGIATAN_LIST = [
  "Melakukan edukasi dan sosialisasi pencairan secara tunai dan non tunai",
  "Melaksanakan Supervisi Permasalahan Bantuan Sosial",
  "Melaksanakan Monitoring/Pemantauan Penyaluran Bantuan Sosial",
  "Melaksanakan Penelitian Penyaluran Bantuan Sosial"
]

export default function IsiData({ form, setForm }) {

  const [openRhk, setOpenRhk] = useState(false)
  const [openKegiatan, setOpenKegiatan] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setForm({
      nama: "",
      nip: "",
      jabatan: "",
      rhk: "",
      kegiatan: "",
      kelompok: "",
      desa: "",
      lokasi: "",
      wilayah: "",
      tanggal: "",
      umum: "",
      tujuan: "",
      narasi: "",
      hasil: ""
    })
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

      {/* PROFIL */}
      <Card
        title="Profil & NIP"
        right={
          <button
            onClick={resetForm}
            className="text-sm text-gray-500 hover:text-black"
          >
            Reset
          </button>
        }
      >
        <div className="space-y-4">
          <input name="nama" value={form.nama} onChange={handleChange}
            placeholder="Nama Pendamping"
            className="w-full border rounded-xl p-3" />

          <input name="nip" value={form.nip} onChange={handleChange}
            placeholder="NIP"
            className="w-full border rounded-xl p-3" />

          <input name="jabatan" value={form.jabatan} onChange={handleChange}
            placeholder="Jabatan"
            className="w-full border rounded-xl p-3" />
        </div>
      </Card>

      {/* RENCANA KERJA */}
      <Card title="Rencana Kerja">
        <div className="space-y-4">

          <div onClick={() => setOpenRhk(true)}
            className="border rounded-xl p-4 cursor-pointer">
            {form.rhk || "Pilih RHK"}
          </div>

          <div onClick={() => setOpenKegiatan(true)}
            className="border rounded-xl p-4 cursor-pointer">
            {form.kegiatan || "Pilih Kegiatan Pelaksanaan"}
          </div>

        </div>
      </Card>

      {/* LOKASI */}
      <Card title="Lokasi & Waktu">
        <div className="grid md:grid-cols-2 gap-4">
          <input name="kelompok" value={form.kelompok}
            onChange={handleChange}
            placeholder="Kelompok"
            className="border rounded-xl p-3" />

          <input name="desa" value={form.desa}
            onChange={handleChange}
            placeholder="Desa"
            className="border rounded-xl p-3" />
        </div>

        <div className="mt-4 space-y-4">
          <input name="lokasi" value={form.lokasi}
            onChange={handleChange}
            placeholder="Tempat / Titik Lokasi"
            className="border rounded-xl p-3 w-full" />

          <input name="wilayah" value={form.wilayah}
            onChange={handleChange}
            placeholder="Wilayah Dampingan"
            className="border rounded-xl p-3 w-full" />

          <input type="date" name="tanggal"
            value={form.tanggal}
            onChange={handleChange}
            className="border rounded-xl p-3 w-full" />
        </div>
      </Card>

      {/* MEDIA */}
      <Card title="Media & Berkas">
        <FileUpload />
      </Card>

      {/* UMUM */}
      <Card title="UMUM">
        <textarea name="umum"
          value={form.umum}
          onChange={handleChange}
          rows="6"
          className="w-full border rounded-xl p-4" />
      </Card>

      {/* TUJUAN */}
      <Card title="TUJUAN">
        <textarea name="tujuan"
          value={form.tujuan}
          onChange={handleChange}
          rows="6"
          className="w-full border rounded-xl p-4" />
      </Card>

      {/* NARASI */}
      <Card title="NARASI">
        <textarea name="narasi"
          value={form.narasi}
          onChange={handleChange}
          rows="6"
          className="w-full border rounded-xl p-4" />
      </Card>

      {/* HASIL */}
      <Card title="HASIL">
        <textarea name="hasil"
          value={form.hasil}
          onChange={handleChange}
          rows="6"
          className="w-full border rounded-xl p-4" />
      </Card>

      {/* MODALS */}
      <ModalKegiatan
        open={openRhk}
        onClose={() => setOpenRhk(false)}
        title="Pilih RHK"
        items={RHK_LIST}
        onSelect={(val) => {
          setForm({ ...form, rhk: val })
          setOpenRhk(false)
        }}
      />

      <ModalKegiatan
        open={openKegiatan}
        onClose={() => setOpenKegiatan(false)}
        title="Pilih Kegiatan"
        items={KEGIATAN_LIST}
        onSelect={(val) => {
          setForm({ ...form, kegiatan: val })
          setOpenKegiatan(false)
        }}
      />

    </div>
  )
}