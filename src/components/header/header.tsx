import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import PrimaryButton from '../ui/primary-button';
import { MobileHeader } from './mobile-header';
import { useAppSelector } from '@/redux/hooks';
import { UserNav } from '../ui/user-nav';

export default function Header({ pageType }: { pageType: 'normal' | 'home' }) {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  return (
    <header
      className={`h-[70px] z-50 relative text-white flex items-center ${
        pageType === 'home' ? '' : ' bg-[#011611] text-white'
      }`}
    >
      <MaxWidthWrapper className="flex justify-between items-center max-w-full">
        <div>
          <NavLink to="/" className="text-xl font-bold">
            <span className="uppercase">Meet</span>{' '}
            <span className="inline-block px-2 bg-emerald-500 rounded-md">
              Ease
            </span>
          </NavLink>
        </div>
        <div className="md:hidden block">
          <MobileHeader />
        </div>

        <nav className="hidden md:flex items-center gap-4 text-[16px] font-medium">
          <NavLink
            to="/"
            className={`px-2 py-1 ${
              location.pathname === '/' && !location.hash
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={`px-2 py-1 ${
              location.pathname === '/about-us'
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/rooms"
            className={`px-2 py-1 ${
              location.pathname === '/rooms'
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/#user-stories"
            className={`px-2 py-1 ${
              location.hash === '#user-stories'
                ? ' font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/#blogs"
            className={`px-2 py-1 ${
              location.hash === '#user-stories'
                ? ' font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact-us"
            className={`px-2 py-1 ${
              location.pathname === '/contact-us'
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Contact Us
          </NavLink>

          {auth.accessToken && auth.email ? (
            <UserNav />
          ) : (
            <PrimaryButton
              text="Signin"
              handleOnClick={() => navigate('/login')}
            />
          )}
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
