export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold sm:text-7xl text-2xl text-center mt-32 sm:mt-64 w-[150px] sm:w-[650px]">
          {children}
        </h1>
      </div>
      {/* <style jsx>{`
        h1 {
          width: 650px;
        }
      `}</style> */}
    </>
  )
}
