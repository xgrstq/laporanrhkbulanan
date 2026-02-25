import React, { useState } from "react"

const RHK_LIST = [
"RHK 1: Penyaluran Bansos PKH",
"RHK 2: Pertemuan P2K2",
"RHK 3: Verifikasi Komitmen",
"RHK 4: Graduasi KPM",
"RHK 5: VerVal Data",
"RHK 6: Respon Kasus",
"RHK 7: Analisis Laporan",
"RHK 8: Direktif Pimpinan",
"RHK 9: Penyebaran Berita"
]

const KEGIATAN = [
"Melakukan edukasi dan sosialisasi pencairan",
"Supervisi Permasalahan Bantuan Sosial",
"Monitoring Bantuan Sosial",
"Penelitian Penyaluran Bantuan Sosial"
]

export default function App(){

const [page,setPage]=useState("isi")
const [open,setOpen]=useState(false)

const [form,setForm]=useState({
nama:"",
nip:"",
jabatan:"",
rhk:"",
kegiatan:""
})

const change=e=>{
setForm({...form,[e.target.name]:e.target.value})
}

return(

<div className="min-h-screen bg-gray-100">

{/* ================= NAVBAR DESKTOP ================= */}
<div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">

<div className="flex items-center gap-6 bg-white/95 shadow-lg border px-6 py-3 rounded-full">

{/* LOGO */}
<div className="flex items-center gap-2 pr-4 border-r">

<div className="w-9 h-9 bg-green-800 rounded-full"/>

<div>
<p className="text-sm font-semibold">
Laporan PKH
</p>
<p className="text-xs text-gray-500">
Sistem Pendamping
</p>
</div>

</div>

{[
["isi","Isi Data","Input laporan kegiatan"],
["lihat","Lihat","Preview laporan"],
["rhk","RHK","Rencana kerja"],
].map(([key,title,desc])=>(

<button
key={key}
onClick={()=>setPage(key)}
className="text-left"
>

<p className={`text-sm font-semibold ${
page===key?"text-green-800":""
}`}>
{title}
</p>

<p className="text-xs text-gray-500">
{desc}
</p>

</button>

))}

<div className="w-px h-8 bg-gray-300"/>

<button className="text-left">
<p className="text-sm font-semibold text-green-800">
Word
</p>
<p className="text-xs text-gray-500">
Export DOCX
</p>
</button>

<button className="text-left">
<p className="text-sm font-semibold text-green-800">
PDF
</p>
<p className="text-xs text-gray-500">
Export PDF
</p>
</button>

</div>
</div>


{/* ================= MOBILE NAVBAR ================= */}
<div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">

<div className="flex gap-6 bg-white/95 shadow-lg border px-6 py-3 rounded-full text-center">

<button onClick={()=>setPage("isi")}>
📄
<p className="text-xs">Isi</p>
</button>

<button onClick={()=>setPage("lihat")}>
👁️
<p className="text-xs">Lihat</p>
</button>

<button onClick={()=>setPage("rhk")}>
📋
<p className="text-xs">RHK</p>
</button>

<button>
⬇️
<p className="text-xs">Word</p>
</button>

<button>
🖨️
<p className="text-xs">PDF</p>
</button>

</div>
</div>


{/* ================= CONTENT ================= */}
<div className="pt-28 pb-24 max-w-4xl mx-auto space-y-6 px-4">


{/* ================= ISI DATA ================= */}
{page==="isi" &&(

<>

{/* PROFIL */}
<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-gray-500 font-semibold mb-4">
Profil & NIP
</h2>

<input
placeholder="Nama Pendamping"
name="nama"
onChange={change}
className="border rounded-xl p-3 w-full mb-3"
/>

<input
placeholder="NIP"
name="nip"
onChange={change}
className="border rounded-xl p-3 w-full mb-3"
/>

<input
placeholder="Jabatan"
name="jabatan"
onChange={change}
className="border rounded-xl p-3 w-full"
/>

</div>


{/* RENCANA KERJA */}
<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-gray-500 font-semibold mb-4">
Rencana Kerja
</h2>

<select
name="rhk"
onChange={change}
className="border rounded-xl p-3 w-full mb-4"
>
<option>Pilih RHK</option>
{RHK_LIST.map((r,i)=>(
<option key={i}>{r}</option>
))}
</select>

<div
onClick={()=>setOpen(true)}
className="bg-indigo-100 text-indigo-700 rounded-xl p-4 cursor-pointer"
>
{form.kegiatan||"Pilih kegiatan pelaksanaan"}
</div>

</div>


{/* LOKASI */}
<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-gray-500 font-semibold mb-4">
Lokasi & Waktu
</h2>

<p className="text-sm text-gray-400 mb-3">
Isi lokasi pelaksanaan kegiatan pendampingan.
</p>

<input placeholder="Kelompok"
className="border rounded-xl p-3 w-full mb-3"/>

<input placeholder="Desa"
className="border rounded-xl p-3 w-full mb-3"/>

<input placeholder="Tempat / Titik Lokasi"
className="border rounded-xl p-3 w-full mb-3"/>

<input placeholder="Wilayah Dampingan"
className="border rounded-xl p-3 w-full mb-3"/>

<input type="date"
className="border rounded-xl p-3 w-full"/>

</div>


{/* MEDIA */}
<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-gray-500 font-semibold mb-4">
Media & Berkas
</h2>

<p className="text-sm text-gray-400 mb-4">
Upload dokumentasi kegiatan dan kelengkapan laporan.
</p>

{[
"Kop Surat",
"Tanda Tangan",
"Foto Utama",
"Foto Pendukung"
].map((f,i)=>(

<div
key={i}
className="border-2 border-dashed rounded-xl p-4 mb-3"
>
Upload {f}
<input type="file" className="mt-2"/>
</div>

))}

</div>


{/* TEMPLATE */}
{[
["Umum","Pendamping melaksanakan kegiatan sesuai rencana kerja."],
["Tujuan","Meningkatkan kualitas pelayanan sosial."],
["Narasi","Pendamping melakukan kegiatan langsung di lapangan."],
["Hasil","Kegiatan berjalan dengan baik."]
].map(([title,text])=>(

<div key={title}
className="bg-white rounded-2xl shadow p-6">

<h2 className="text-gray-500 font-semibold mb-3">
{title}
</h2>

<p>{text}</p>

</div>

))}

</>

)}


{/* ================= LIHAT ================= */}
{page==="lihat"&&(

<div className="bg-white rounded-2xl shadow p-8">

<h2 className="font-bold mb-4">
Preview Laporan
</h2>

<p>{form.nama}</p>
<p>{form.nip}</p>
<p>{form.rhk}</p>
<p>{form.kegiatan}</p>

</div>

)}


{/* ================= RHK ================= */}
{page==="rhk"&&(

<div className="bg-white rounded-2xl shadow p-8">
Halaman RHK
</div>

)}

</div>


{/* ================= MODAL ================= */}
{open&&(

<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">

<div className="bg-white rounded-2xl p-6 w-[420px]">

<h3 className="font-semibold mb-4">
Pilih Kegiatan
</h3>

<div className="space-y-3">

{KEGIATAN.map((k,i)=>(
<div
key={i}
onClick={()=>{
setForm({...form,kegiatan:k})
setOpen(false)
}}
className="border rounded-lg p-3 cursor-pointer hover:bg-gray-100"
>
{k}
</div>
))}

</div>

</div>

</div>

)}

</div>
)
}