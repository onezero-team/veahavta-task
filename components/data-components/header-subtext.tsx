export const PageSubHeader = ({ children }: { children: string }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className=" font-normal text-xl sm:text-2xl text-center mt-6 px-3 sm:p-0">
          {children}
        </h1>
      </div>
      <style jsx>{`
        h1 {
          width: 396px;
        }
      `}</style>
    </>
  )
}
