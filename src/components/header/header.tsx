import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import PrimaryButton from '../ui/primary-button';
import { MobileHeader } from './mobile-header';
import { useAppSelector } from '@/redux/hooks';
import { UserNav } from '../ui/user-nav';

export default function Header({ pageType }: { pageType: 'normal' | 'home' }) {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className={` z-50 relative flex items-center transition-colors duration-300 ${
        pageType === 'home'
          ? 'h-[70px]' // Gradient for home page
          : 'bg-gradient-to-r from-[#011611] to-[#004d40] shadow-lg text-white h-[85px]' // Gradient for other pages
      }`}
    >
      <MaxWidthWrapper className="flex justify-between items-center max-w-full px-6">
        {/* Logo */}
        <div>
          <NavLink to="/" className="text-2xl font-bold flex items-center">
            <span className="uppercase tracking-wider">Meet</span>
            <span className="ml-1 px-2 py-1 bg-emerald-500 text-white rounded-md">
              Ease
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden block">
          <MobileHeader />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-[16px] font-medium">
          <NavLink
            to="/"
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/' && !location.hash
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/about-us'
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/rooms"
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/rooms'
                ? 'text-emerald-500 font-semibold'
                : 'hover:text-emerald-500'
            }`}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/#user-stories"
            className={`px-3 py-1 transition-colors ${
              location.hash === '#user-stories'
                ? 'font-semibold text-emerald-500'
                : 'hover:text-emerald-500'
            }`}
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/#blogs"
            className={`px-3 py-1 transition-colors ${
              location.hash === '#blogs'
                ? 'font-semibold text-emerald-500'
                : 'hover:text-emerald-500'
            }`}
          >
            Blogs
          </NavLink>

          {location?.pathname.includes('/about-us') && (
            <>
              <NavLink
                to="/about-us/#our-mission"
                className={`px-3 py-1 transition-colors ${
                  location.hash === '#our-mission'
                    ? 'font-semibold text-emerald-500'
                    : 'hover:text-emerald-500'
                }`}
              >
                Our Mission
              </NavLink>
              <NavLink
                to="/about-us/#our-team"
                className={`px-3 py-1 transition-colors ${
                  location.hash === '#our-team'
                    ? 'font-semibold text-emerald-500'
                    : 'hover:text-emerald-500'
                }`}
              >
                Our Team
              </NavLink>
            </>
          )}

          <NavLink
            to="/contact-us"
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/contact-us'
                ? ' text-emerald-500'
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
