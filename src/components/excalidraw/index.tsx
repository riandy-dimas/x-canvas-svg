'use client'

import { cn } from '@/lib/utils'
import { Excalidraw, Footer, MainMenu, Sidebar } from '@excalidraw/excalidraw'
import { RectangleEllipsis } from 'lucide-react'
import ActorFields from '../actor-fields'
import CustomFields from '../custom-fields'

const ExcalidrawWrapper = () => {
  return (
    <Excalidraw>
      <MainMenu>
        <MainMenu.DefaultItems.SaveAsImage />
        <MainMenu.Item onSelect={() => alert('Menu 1 clicked!')}>
          Menu 1
        </MainMenu.Item>
        <MainMenu.Item onSelect={() => alert('Menu 2 clicked!')}>
          Menu 2
        </MainMenu.Item>
      </MainMenu>
      <Sidebar name="customSidebar">
        <Sidebar.Header>
          <h2 className="text-2xl font-semibold">Certificate Fields</h2>
        </Sidebar.Header>
        {/** @ts-expect-error */}
        <Sidebar.Tabs style={{ padding: '1rem' }}>
          <Sidebar.TabTriggers>
            <Sidebar.TabTrigger tab="actorFields">
              Actor Fields
            </Sidebar.TabTrigger>
            <Sidebar.TabTrigger tab="customFields">
              Custom Fields
            </Sidebar.TabTrigger>
          </Sidebar.TabTriggers>
          <Sidebar.Tab
            className="mt-2 rounded border border-solid p-2"
            tab="actorFields"
          >
            <ActorFields />
          </Sidebar.Tab>
          <Sidebar.Tab
            className="mt-2 rounded border border-solid p-2"
            tab="customFields"
          >
            <CustomFields />
          </Sidebar.Tab>
        </Sidebar.Tabs>
      </Sidebar>
      <Footer>
        <Sidebar.Trigger
          name="customSidebar"
          tab="actorFields"
          className={cn('!text-primary-foreground', '!bg-purple-950')}
          style={{
            marginLeft: '0.6rem',
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          <div className="flex gap-2 justify-center items-center">
            <RectangleEllipsis className="inline" />
            <div>Certificate Fields</div>
          </div>
        </Sidebar.Trigger>
      </Footer>
    </Excalidraw>
  )
}

export default ExcalidrawWrapper
