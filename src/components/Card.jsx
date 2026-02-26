export default function Card({ title, children, right }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 w-full">
      
      {title && (
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            {title}
          </h2>
          {right && right}
        </div>
      )}

      {children}

    </div>
  )
}