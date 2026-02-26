export default function ModalKegiatan({
  open,
  onClose,
  title,
  items,
  onSelect
}) {

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[95%] max-w-md max-h-[80vh] overflow-y-auto rounded-3xl relative">

        {/* Tombol X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <div className="mt-14">

          {title && (
            <div className="px-6 pb-4 font-semibold text-center">
              {title}
            </div>
          )}

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                onSelect(item)
                onClose()
              }}
              className="p-4 border-b cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}