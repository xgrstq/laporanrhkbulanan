export default function Lihat({ form }) {
  return (
    <div className="bg-gray-200 py-10 px-4">

      <div
        id="print-lihat"
        className="max-w-4xl mx-auto bg-white shadow-lg p-10"
      >

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-lg">
            KEMENTERIAN SOSIAL REPUBLIK INDONESIA
          </h1>
          <h2 className="font-semibold text-sm">
            DIREKTORAT JENDERAL PERLINDUNGAN DAN JAMINAN SOSIAL
          </h2>
          <h2 className="font-semibold text-sm">
            DIREKTORAT PERLINDUNGAN SOSIAL NON KEBENCANAAN
          </h2>

          <div className="border-b-2 border-black my-4" />

          <h2 className="font-bold underline text-base">
            LAPORAN HARIAN
          </h2>

          <p className="font-semibold mt-2">
            {form?.rhk || "-"}
          </p>

          <p className="italic text-sm">
            ({form?.kegiatan || "-"})
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-justify">

          <div>
            <h3 className="font-bold mb-2">
              A. Pendahuluan
            </h3>
            <p>
              <strong>Umum:</strong> {form?.umum || "-"}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              B. Tujuan
            </h3>
            <p>{form?.tujuan || "-"}</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              C. Narasi Pelaksanaan
            </h3>
            <p>{form?.narasi || "-"}</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              D. Hasil
            </h3>
            <p>{form?.hasil || "-"}</p>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-16 text-sm">

          <div className="flex justify-between">

            <div>
              <p>Mengetahui,</p>
              <p>Koordinator Kabupaten/Kota</p>

              <div className="h-20" />

              <p>(_____________________)</p>
            </div>

            <div className="text-right">
              <p>{form?.tanggal || "-"}</p>
              <p>Pendamping Sosial</p>

              <div className="h-20" />

              <p>({form?.nama || "_____________________"})</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}