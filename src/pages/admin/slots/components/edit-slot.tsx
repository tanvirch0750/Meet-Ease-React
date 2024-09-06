import { Layout } from '@/components/ui/admin/layout';

import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import Loader from '@/components/ui/loader';
import ErrorPage from '@/pages/error/ErrorPage';
import { useGetSlotQuery } from '@/redux/features/slots/slotsApi';
import EditSlotForm from './edit-slot-form';

export default function EditSlot() {
  const { id } = useParams();

  const { data: slot, isLoading, isError } = useGetSlotQuery(id!);

  console.log(slot);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

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
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Edit Slot for -{' '}
              <span className="text-primary">{slot?.data?.roomName}</span>
            </h2>
          </div>
          <Link
            to="/admin/dashboard/slots"
            className="flex items-center space-x-2"
          >
            <Button>Slots List</Button>
          </Link>
        </div>
        <EditSlotForm slot={slot?.data} />
      </Layout.Body>
    </Layout>
  );
}
