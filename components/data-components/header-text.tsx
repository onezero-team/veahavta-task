export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        {/* <h1 className="absolute top-[260px] font-bold text-7xl text-center"> */}
        <h1 className=" font-bold text-7xl text-center mt-64">{children}</h1>
      </div>
      <style jsx>{`
        h1 {
          width: 650px;
        }
      `}</style>
    </>
  )
}
