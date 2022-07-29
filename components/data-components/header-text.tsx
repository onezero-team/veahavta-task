export const PageHeader = ({ children }: { children: any }) => {
  return (
    <div>
      <h1 className="font-bold text-7xl max-w-2xl m-auto mt-20 mb-0 text-center title">
        {children.title}
      </h1>
      <h2 className="font-medium text-3xl max-w-md m-auto mb-0 mt-10 text-center subtitle">
        {children.description}
      </h2>
      <style jsx>{`
        @media screen and (max-width: 400px) {
          .title {
            font-size: 38px;
            max-width: unset;
          }
          .subtitle {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
}
