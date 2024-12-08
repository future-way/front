const page = () => {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
          <div className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              Next.js 카드
            </h2>
            <p className="text-gray-700">
              Tailwind CSS를 사용하여 각기 다른 화면 크기에서 최적화된
              레이아웃을 쉽게 구현할 수 있습니다.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default page
