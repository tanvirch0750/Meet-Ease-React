import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { useGetProfileDataQuery } from '@/redux/features/user/userApi';
import Loader from '@/components/ui/loader';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import UpdateProfile from '@/components/update-profile/UpdateProfile';

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileDataQuery({});

  const user = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper>
        <UpdateProfile userData={user} />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default ProfilePage;
