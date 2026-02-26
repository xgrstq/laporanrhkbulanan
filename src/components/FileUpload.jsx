import { useState } from "react"

export default function FileUpload() {

  const [images, setImages] = useState({
    kop: null,
    ttd: null,
    utama: null,
    pendukung: null
  })

  const handleImage = (e, key) => {
    const file = e.target.files[0]
    if (!file) return

    const preview = URL.createObjectURL(file)

    setImages({
      ...images,
      [key]: preview
    })
  }

  return (
    <div className="grid grid-cols-2 gap-4">

      {/* KOP */}
      <UploadBox
        label="Kop Surat"
        image={images.kop}
        onChange={(e) => handleImage(e, "kop")}
      />

      {/* TTD */}
      <UploadBox
        label="Tanda Tangan"
        image={images.ttd}
        onChange={(e) => handleImage(e, "ttd")}
      />

      {/* FOTO UTAMA */}
      <div className="col-span-2">
        <UploadBox
          label="Foto Utama"
          image={images.utama}
          onChange={(e) => handleImage(e, "utama")}
          big
        />
      </div>

      {/* FOTO PENDUKUNG */}
      <div className="col-span-2">
        <UploadBox
          label="Foto Pendukung"
          image={images.pendukung}
          onChange={(e) => handleImage(e, "pendukung")}
          big
        />
      </div>

    </div>
  )
}

function UploadBox({ label, image, onChange, big }) {
  return (
    <label
      className={`border-2 border-dashed rounded-2xl p-4 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
        big ? "h-52" : "h-32"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-xl transition-all duration-300 hover:scale-105"
        />
      ) : (
        <span className="text-gray-400 text-sm text-center">
          {label}
        </span>
      )}

      <input type="file" hidden onChange={onChange} />
    </label>
  )
}