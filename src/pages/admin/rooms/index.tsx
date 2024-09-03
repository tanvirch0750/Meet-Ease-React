import { Layout } from '@/components/ui/admin/layout';

import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { tasks } from './data/tasks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { UserNav } from '@/components/ui/user-nav';

export default function Rooms() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky className=" border-b">
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <Tabs orientation="vertical" defaultValue="rooms" className="space-y-4">
          <TabsContent value="rooms" className="space-y-4">
            <div className="mb-6 flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Room Lists
                </h2>
              </div>
              <TabsList>
                <TabsTrigger value="rooms">Room List</TabsTrigger>
                <TabsTrigger value="create">Create Room</TabsTrigger>
                <TabsTrigger value="edit">Edit Room</TabsTrigger>
              </TabsList>
            </div>
            <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
              <DataTable data={tasks} columns={columns} />
            </div>
          </TabsContent>
          <TabsContent value="create" className="space-y-4">
            <div className="mb-2 flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Create Room
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of all the rooms
                </p>
              </div>
              <TabsList>
                <TabsTrigger value="rooms">Room List</TabsTrigger>
                <TabsTrigger value="create">Create Room</TabsTrigger>
                <TabsTrigger value="edit">Edit Room</TabsTrigger>
              </TabsList>
            </div>
            <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
              create room
            </div>
          </TabsContent>
          <TabsContent value="edit" className="space-y-4">
            <div className="mb-2 flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Edit Room</h2>
              </div>
              <TabsList>
                <TabsTrigger value="rooms">Room List</TabsTrigger>
                <TabsTrigger value="create">Create Room</TabsTrigger>
                <TabsTrigger value="edit">Edit Room</TabsTrigger>
              </TabsList>
            </div>
            <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
              Edit room
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  );
}
