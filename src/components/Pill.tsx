export default function Pill({ children }: { children: string }) {
  return (
    <div className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-800">
      {children}
    </div>
  )
}
