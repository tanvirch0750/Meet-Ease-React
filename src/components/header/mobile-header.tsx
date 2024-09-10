import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustifyIcon } from 'lucide-react';
import PrimaryButton from '../ui/primary-button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { UserNav } from '../ui/user-nav';

export function MobileHeader() {
  const auth = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustifyIcon size={40} className=" text-white" />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 text-xl font-medium">
          <NavLink
            to="/"
            className="px-2 py-1 hover:text-emerald-500 active:text-emerald-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="px-2 py-1 hover:text-emerald-500 active:text-emerald-500"
          >
            About Us
          </NavLink>
          <NavLink
            to="/rooms"
            className="px-2 py-1 hover:text-emerald-500 active:text-emerald-500"
          >
            Rooms
          </NavLink>
          <NavLink
            to="/contact-us"
            className="px-2 py-1 hover:text-emerald-500 active:text-emerald-500"
          >
            Contact Us
          </NavLink>

          {auth.accessToken && auth.email ? (
            <>
              <UserNav />
            </>
          ) : (
            <PrimaryButton
              text="Signin"
              handleOnClick={() => navigate('/login')}
            />
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
