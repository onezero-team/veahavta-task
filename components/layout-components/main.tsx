
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex w-screen flex-col" id="main-content">
        {children}
      </main>
    </>
  )
}
