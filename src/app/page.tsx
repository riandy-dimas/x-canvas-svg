'use client'
import ActorFields from '@/components/actor-fields'
import CustomFields from '@/components/custom-fields'
import { cn } from '@/lib/utils'
import { RectangleEllipsis } from 'lucide-react'
import dynamic from 'next/dynamic'
import {
  ComponentType,
  CSSProperties,
  ReactNode,
  RefAttributes,
  useState,
} from 'react'
const Excalidraw = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Excalidraw,
  {
    ssr: false,
  }
)
const Sidebar = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar,
  { ssr: false }
)
const SidebarTrigger = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar.Trigger,
  { ssr: false }
)
const SidebarHeader = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar.Header,
  { ssr: false }
)
const SidebarTabs: ComponentType<
  {
    children: ReactNode
    style?: CSSProperties
  } & Omit<RefAttributes<HTMLDivElement>, 'onSelect'>
> = dynamic(async () => (await import('@excalidraw/excalidraw')).Sidebar.Tabs, {
  ssr: false,
})
const SidebarTab = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar.Tab,
  { ssr: false }
)
const SidebarTabTriggers = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar.TabTriggers,
  { ssr: false }
)
const SidebarTabTrigger = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Sidebar.TabTrigger,
  { ssr: false }
)
const Footer = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Footer,
  { ssr: false }
)
export default function Home() {
  return (
    <main className="flex h-screen w-dvw flex-col items-center justify-between p-20 bg-black">
      <Excalidraw>
        <Sidebar name="customSidebar">
          <SidebarHeader>
            <h2 className="text-2xl font-semibold">Certificate Fields</h2>
          </SidebarHeader>
          <SidebarTabs style={{ padding: '1rem' }}>
            <SidebarTabTriggers>
              <SidebarTabTrigger tab="actorFields">
                Actor Fields
              </SidebarTabTrigger>
              <SidebarTabTrigger tab="customFields">
                Custom Fields
              </SidebarTabTrigger>
            </SidebarTabTriggers>
            <SidebarTab
              className="mt-2 rounded border border-solid p-2"
              tab="actorFields"
            >
              <ActorFields />
            </SidebarTab>
            <SidebarTab
              className="mt-2 rounded border border-solid p-2"
              tab="customFields"
            >
              <CustomFields />
            </SidebarTab>
          </SidebarTabs>
        </Sidebar>
        <Footer>
          <SidebarTrigger
            name="customSidebar"
            tab="actorFields"
            className={cn('!text-primary-foreground', '!bg-purple-950')}
            style={{
              marginLeft: '0.5rem',
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            <div className="flex gap-2 justify-center items-center">
              <RectangleEllipsis className="inline" />
              <div>Certificate Fields</div>
            </div>
          </SidebarTrigger>
        </Footer>
      </Excalidraw>
    </main>
  )
}
