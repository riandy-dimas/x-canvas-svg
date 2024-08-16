'use client'
import dynamic from 'next/dynamic'

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import('@/components/excalidraw')).default,
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <main className="flex h-screen w-dvw flex-col items-center justify-between p-20 bg-black">
      <ExcalidrawWrapper />
    </main>
  )
}
