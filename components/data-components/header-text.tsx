export const PageHeader = ({ children }: { children: string }) => {
  return<> 
  <h1 className="h1 z-50 mx-auto font-bold text-7xl">{children}
  <style jsx>{`
.h1{
  width:650px; 
}

`}</style>
</h1>
</>
}
