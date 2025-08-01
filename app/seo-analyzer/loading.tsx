export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">Loading SEO Analyzer...</p>
      </div>
    </div>
  )
}
