import { InfinityBrand } from "@/components/ui/infinity-brand"

const InfinityBrandDemo = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        <InfinityBrand />
      </div>
    </div>
  )
}

export { InfinityBrandDemo }