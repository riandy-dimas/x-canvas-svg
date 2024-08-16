'use client'
import { Footer } from '@excalidraw/excalidraw'
import dynamic from 'next/dynamic'
const Excalidraw = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Excalidraw,
  {
    ssr: false,
  }
)
export default function Home() {
  return (
    <main className="flex h-screen w-dvw flex-col items-center justify-between p-20">
      <Excalidraw></Excalidraw>
    </main>
  )
}
