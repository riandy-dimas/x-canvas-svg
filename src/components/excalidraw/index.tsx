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
        <div style={{ padding: '1rem', overflow: 'auto' }}>
          <Sidebar.Tabs>
            <Sidebar.TabTriggers>
              <Sidebar.TabTrigger tab="actorFields">
                Actor Fields
              </Sidebar.TabTrigger>
              <Sidebar.TabTrigger tab="customFields">
                Custom Fields
              </Sidebar.TabTrigger>
            </Sidebar.TabTriggers>
            <Sidebar.Tab
              className="mt-2 rounded border border-solid p-2 relative h-full overflow-auto"
              tab="actorFields"
            >
              <ActorFields />
            </Sidebar.Tab>
            <Sidebar.Tab
              className="mt-2 rounded border border-solid p-2 relative h-full overflow-auto"
              tab="customFields"
            >
              <CustomFields />
            </Sidebar.Tab>
          </Sidebar.Tabs>
        </div>
      </Sidebar>
      <Footer>
        <Sidebar.Trigger
          name="customSidebar"
          tab="actorFields"
          title="Certificate Fields"
          icon={<RectangleEllipsis />}
          className={cn('!text-primary-foreground', '!bg-purple-950')}
          style={{
            marginLeft: '0.6rem',
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Certificate Fields
        </Sidebar.Trigger>
      </Footer>
    </Excalidraw>
  )
}

export default ExcalidrawWrapper
