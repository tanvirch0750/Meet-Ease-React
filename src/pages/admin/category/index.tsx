import { Layout } from '@/components/ui/admin/layout';

import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ThemeSwitch from '@/components/ui/admin/theme-switch';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AdminNav } from '@/components/ui/admin/admin-nav';
import CategoryForm from './components/category-form';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { useGetCaegoriesQuery } from '@/redux/features/category/categoryApi';
import Loader from '@/components/ui/loader';

export default function Catgories() {
  const { data: categories, isLoading } = useGetCaegoriesQuery({
    page: 1,
    limit: 100,
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
            defaultValue="rooms"
            className="space-y-4"
          >
            <TabsContent value="rooms" className="space-y-4">
              <div className="mb-6 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Category Lists
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="rooms">Category List</TabsTrigger>
                  <TabsTrigger value="create">Create Category</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <DataTable data={categories?.data} columns={columns} />
              </div>
            </TabsContent>
            <TabsContent value="create" className="space-y-4">
              <div className="mb-2 flex items-center justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Create Category
                  </h2>
                </div>
                <TabsList>
                  <TabsTrigger value="rooms">Category List</TabsTrigger>
                  <TabsTrigger value="create">Create Room</TabsTrigger>
                </TabsList>
              </div>
              <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
                <MaxWidthWrapper className=" max-w-2xl">
                  <CategoryForm />
                </MaxWidthWrapper>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </Layout.Body>
    </Layout>
  );
}
