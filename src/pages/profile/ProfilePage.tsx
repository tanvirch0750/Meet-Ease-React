import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { useGetProfileDataQuery } from '@/redux/features/user/userApi';
import Loader from '@/components/ui/loader';

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileDataQuery({});
  const navigate = useNavigate();

  const user = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  const handleBookingsClick = () => {
    navigate('/my-bookings');
  };

  return (
    <>
      <Header pageType="normal" />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg max-w-md w-full p-6"
        >
          <div className="flex flex-col items-center text-center">
            <motion.img
              src={
                user?.image ||
                'https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-628.jpg?size=626&ext=jpg&uid=R15161155&ga=GA1.1.911219905.1717681244&semt=ais_hybrid'
              }
              alt={user?.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h2
              className="text-2xl font-semibold mt-4 text-gray-800"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              {user?.name}
            </motion.h2>
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {user?.email}
            </motion.p>
          </div>
          <div className="mt-2 space-y-0">
            <motion.div
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="font-medium text-gray-600">Phone</span>
              <span className="text-gray-800">{user?.phone}</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="font-medium text-gray-600">Address</span>
              <span className="text-gray-800">{user?.address}</span>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={handleBookingsClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              My Bookings
            </button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
