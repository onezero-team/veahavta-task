export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold xl:text-5xl text-center flex w-100  text-4xl ">
      {children}
    </h1>
  )
}
