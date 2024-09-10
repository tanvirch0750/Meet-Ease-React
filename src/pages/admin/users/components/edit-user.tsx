import { Layout } from '@/components/ui/admin/layout';

import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import EditRoomForm from './edit-user-form';
import Loader from '@/components/ui/loader';
import ErrorPage from '@/pages/error/ErrorPage';

export default function EditRoom() {
  const { id } = useParams();

  const { data: room, isLoading, isError } = useGetRoomQuery(id!);

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
              Edit <span className=" text-primary">{room?.data?.name}</span>{' '}
              Room
            </h2>
          </div>
          <Link
            to="/admin/dashboard/rooms"
            className="flex items-center space-x-2"
          >
            <Button>Rooms List</Button>
          </Link>
        </div>
        <EditRoomForm room={room?.data} />
      </Layout.Body>
    </Layout>
  );
}
