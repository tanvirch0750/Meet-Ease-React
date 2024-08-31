import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustifyIcon } from 'lucide-react';
import PrimaryButton from '../ui/primary-button';

export function MobileHeader() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustifyIcon size={40} className=" text-white" />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 text-xl font-medium">
          <a href="#" className="px-2 py-1 hover:bg-emerald-600 rounded-md">
            Home
          </a>
          <a href="#" className="px-2 py-1 hover:bg-emerald-600 rounded-md">
            Metting Rooms
          </a>
          <a href="#" className="px-2 py-1 hover:bg-emerald-600 rounded-md">
            About Us
          </a>
          <a href="#" className="px-2 py-1 hover:bg-emerald-600 rounded-md">
            Contact Us
          </a>
          <PrimaryButton text="Signin" />
          {/* <a
            href="#"
            className="px-2 py-2 font-bold tracking-wide bg-emerald-600 rounded-md hover:bg-emerald-700"
          >
            Signin
          </a> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
