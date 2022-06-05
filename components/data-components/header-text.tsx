export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-7xl text-center flex w-125 mobile:text-4xl mobile:w-80">
      {children}
    </h1>
  )
}
