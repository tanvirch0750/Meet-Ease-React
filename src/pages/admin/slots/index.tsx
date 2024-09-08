import { Layout } from '@/components/ui/admin/layout';

import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import Loader from '@/components/ui/loader';
import {
  useGetAvailableSlotsQuery,
  useGetSlotsQuery,
} from '@/redux/features/slots/slotsApi';
import SlotForm from './components/slot-form';

export default function Slots() {
  const { data: slots, isLoading } = useGetSlotsQuery({
    page: 1,
    limit: 1000000,
  });

  const { data: availableSlots, isError } = useGetAvailableSlotsQuery({
    page: 1,
    limit: 1000000,
  });

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header className=" border-b">
        <div className=" justify-between w-full flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <Button>Main Website</Button>
          </Link>
          <div className=" flex gap-3 items-center">
            <ThemeSwitch />
            <AdminNav />
          </div>
        </div>
      </Layout.Header>

      <Layout.Body>
        {isLoading ? (
          <Loader />
        ) : (
          <Tabs
            orientation="vertical"
            defaultValue="slots"
            className="space-y-4"
          >
            <TabsContent value="slots" className="space-y-4">
              <div className="mb-6 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Slot Lists
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="slots">Slots List</TabsTrigger>
                  <TabsTrigger value="available-slots">
                    Available Slots
                  </TabsTrigger>
                  <TabsTrigger value="create">Create Slot</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                {isError ? (
                  <div>Not slots found</div>
                ) : (
                  <DataTable data={slots?.data} columns={columns} />
                )}
              </div>
            </TabsContent>
            <TabsContent value="available-slots" className="space-y-4">
              <div className="mb-6 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Available Slot Lists
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="slots">Slots List</TabsTrigger>
                  <TabsTrigger value="available-slots">
                    Available Slots
                  </TabsTrigger>
                  <TabsTrigger value="create">Create Slot</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                {isError ? (
                  <div>Not slots found</div>
                ) : (
                  <DataTable data={availableSlots?.data} columns={columns} />
                )}
              </div>
            </TabsContent>
            <TabsContent value="create" className="space-y-4">
              <div className="mb-2 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Create Slot
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="slots">Slots List</TabsTrigger>
                  <TabsTrigger value="available-slots">
                    Available Slots
                  </TabsTrigger>
                  <TabsTrigger value="create">Create Slot</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <MaxWidthWrapper className="">
                  <SlotForm />
                </MaxWidthWrapper>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </Layout.Body>
    </Layout>
  );
}
