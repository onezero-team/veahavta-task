export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-xl font-bold text-82 w-6/12 text-center leading-80  ">
      {children}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            width: 75vw;
          }
        }
      `}</style>
    </h1>
  )
}
