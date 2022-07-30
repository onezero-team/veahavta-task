export const PageHeader = ({ children }: { children: any }) => {
  return (
    <div>
      <h1 className="font-bold text-7xl max-w-2xl m-auto mt-20 mb-0 text-center mobile:text-4xl  ">
        {children.title}
      </h1>
      <h2 className="font-medium text-3xl max-w-md m-auto mb-0 mt-10 text-center mobile:text-xl mobile:max-w-none ">
        {children.description}
      </h2>
    </div>
  )
}
