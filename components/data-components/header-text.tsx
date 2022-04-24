export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold sm:text-7xl text-4xl text-center mt-32 sm:mt-64 w-[230px] sm:w-[650px]">
          {children}
        </h1>
      </div>
    </>
  )
}
