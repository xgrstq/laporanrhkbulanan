import { useState } from "react"

const DATA_RHK = [
  { id: 1, title: "RHK 1", kegiatan: [] },
  { id: 2, title: "RHK 2", kegiatan: [] },
  { id: 3, title: "RHK 3", kegiatan: [] },
  { id: 4, title: "RHK 4", kegiatan: [] },
  { id: 5, title: "RHK 5", kegiatan: [] },
  { id: 6, title: "RHK 6", kegiatan: [] },
  { id: 7, title: "RHK 7", kegiatan: [] },
  { id: 8, title: "RHK 8", kegiatan: [] },
  { id: 9, title: "RHK 9", kegiatan: [] },
]

export default function RHK() {
  const [selectedRhk, setSelectedRhk] = useState(null)
  const [selectedKegiatan, setSelectedKegiatan] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-6">

          {DATA_RHK.map((rhk) => (
            <div
              key={rhk.id}
              className={`rounded-3xl p-6 shadow-md transition-all duration-300
              ${selectedRhk === rhk.id
                ? "border-2 border-blue-600 bg-white"
                : "bg-white hover:shadow-lg"
              }`}
            >

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {rhk.id}
                </div>

                <h2 className="font-semibold text-sm uppercase">
                  {rhk.title}
                </h2>
              </div>

              {/* LIST KEGIATAN */}
              <div className="space-y-3">

                {rhk.kegiatan.length === 0 && (
                  <div className="text-sm text-gray-400 italic">
                    Belum ada kegiatan
                  </div>
                )}

                {rhk.kegiatan.map((keg, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedRhk(rhk.id)
                      setSelectedKegiatan(keg)
                    }}
                    className={`cursor-pointer rounded-xl px-4 py-3 text-sm transition
                    ${selectedKegiatan === keg
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    › {keg}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}