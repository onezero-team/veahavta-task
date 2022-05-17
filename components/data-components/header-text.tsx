export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-8xl lg:max-w-[850px] text-center">
      {children}
    </h1>
  )
}
