const SectionTitle = ({ title, subtitle, light = false }) => {
  const textColor = light ? "text-white" : "text-[#1a3a1a]"

  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{title}</h2>
      <div className="h-1 w-20 bg-[#d4af37] mx-auto mb-6"></div>
      {subtitle && <p className={`max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-700"}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
