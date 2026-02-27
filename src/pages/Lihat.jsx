import { generatePDF } from "../utils/GeneratePDF"
import { generateWord } from "../utils/Generateword"

export default function Lihat({ form }) {

  const formattedDate = form?.tanggal
    ? new Date(form.tanggal).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    : ""

  return (
    <div className="bg-gray-200 py-10 px-4">

      <div className="max-w-4xl mx-auto mb-6 flex gap-4">
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Export PDF
        </button>

        <button
          onClick={() => generateWord(form)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Export Word
        </button>
      </div>

      <div
        id="print-lihat"
        className="max-w-4xl mx-auto bg-white shadow-lg p-14"
        style={{ fontFamily: "Times New Roman", fontSize: "11pt" }}
      >

        <div className="text-center border-b-2 border-black pb-3">
          <p className="font-bold uppercase text-[14pt]">
            Kementerian Sosial Republik Indonesia
          </p>
          <p className="font-bold uppercase text-[11pt]">
            Direktorat Jenderal Perlindungan dan Jaminan Sosial
          </p>
          <p className="font-bold uppercase text-[10pt]">
            Direktorat Perlindungan Sosial Non Kebencanaan
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="font-bold underline uppercase text-[13pt]">
            Laporan Harian
          </p>

          <p className="font-bold mt-3">{form?.rhk}</p>
          <p className="italic">({form?.kegiatan})</p>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed text-justify">

          <div>
            <p className="font-bold">A. Pendahuluan</p>
            <div className="ml-6 mt-2 space-y-3">
              <p><b><i>Umum:</i></b> {form?.umum}</p>
              <p><b><i>Maksud dan Tujuan:</i></b> {form?.tujuan}</p>
              <p><b><i>Ruang Lingkup:</i></b> {form?.narasi}</p>
            </div>
          </div>

          <div>
            <p className="font-bold">B. Kegiatan yang Dilaksanakan</p>

            <div className="ml-6 mt-2">

              <p className="italic font-bold mb-2">
                {form?.kegiatan}
              </p>

              <p className="mb-4">
                {form?.narasi}
              </p>

              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="w-28 font-bold">Tempat</td>
                    <td>
                      : {form?.tempat}
                      {form?.desa ? ` Desa ${form.desa}` : ""}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Wilayah</td>
                    <td>
                      : {form?.wilayah}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Waktu</td>
                    <td>
                      : {formattedDate}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>

          <div>
            <p className="font-bold">C. Hasil Yang Dicapai</p>
            <div className="ml-6 mt-2">
              {form?.hasil}
            </div>
          </div>

          <div>
            <p className="font-bold">D. Simpulan dan Saran</p>
            <div className="ml-6 mt-2">
              {form?.simpulan}
            </div>
          </div>

        </div>

        <div className="flex justify-end mt-20">
          <div className="text-center w-64">
            <p>Dibuat di : {form?.wilayah}</p>
            <p>Pada Tanggal : {formattedDate}</p>

            <p className="font-bold mt-4">{form?.jabatan}</p>

            <div className="h-20"></div>

            <p className="font-bold underline uppercase">
              {form?.nama}
            </p>

            <p>NIP. {form?.nip}</p>
          </div>
        </div>

      </div>
    </div>
  )
}