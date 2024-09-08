import { Layout } from '@/components/ui/admin/layout';

import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import Loader from '@/components/ui/loader';

import { useGetAllBookingsQuery } from '@/redux/features/bookings/bookingsApi';

export default function Bookings() {
  const {
    data: bookings,
    isLoading,
    isError,
  } = useGetAllBookingsQuery({
    page: 1,
    limit: 10000000,
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
            defaultValue="booking"
            className="space-y-4"
          >
            <TabsContent value="booking" className="space-y-4">
              <div className="mb-6 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Booking Lists{' '}
                    <span className=" text-sm text-gray-400 font-normal pl-3">
                      (To get a full table view please zoom out your window)
                    </span>
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="booking">Booking List</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                {isError ? (
                  <div>Not Booking found</div>
                ) : (
                  <DataTable data={bookings?.data} columns={columns} />
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </Layout.Body>
    </Layout>
  );
}
