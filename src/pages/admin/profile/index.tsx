import { Layout } from '@/components/ui/admin/layout';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import Loader from '@/components/ui/loader';

import { useGetProfileDataQuery } from '@/redux/features/user/userApi';
import UpdateProfileForm from './components/UpdateProfile';

export default function Rooms() {
  const { data, isLoading } = useGetProfileDataQuery({});

  const user = data?.data;

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
            defaultValue="profile"
            className="space-y-4"
          >
            <TabsContent value="profile" className="space-y-4">
              <div className="mb-6 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
                </div>
                <TabsList>
                  <TabsTrigger value="profile">Profile Setting</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <UpdateProfileForm userData={user} />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </Layout.Body>
    </Layout>
  );
}
