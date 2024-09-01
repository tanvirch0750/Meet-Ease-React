import MaxWidthWrapper from '../ui/max-width-wrapper';
import PrimaryButton from '../ui/primary-button';
import { MobileHeader } from './mobile-header';

export default function Header({ pageType }: { pageType: 'normal' | 'home' }) {
  return (
    <header
      className={`h-[100px] z-50 relative text-white flex items-center ${
        pageType === 'home' ? '' : ' bg-[#011611] text-white'
      }`}
    >
      <MaxWidthWrapper className=" flex justify-between items-center max-w-full">
        <div>
          <a href="" className=" text-3xl font-bold">
            <span className=" uppercase">Meet</span>{' '}
            <span className=" inline-block px-2 bg-emerald-500 rounded-md">
              Ease
            </span>
          </a>
        </div>
        <div className="md:hidden block">
          {' '}
          <MobileHeader />
        </div>

        <nav className="hidden md:flex items-center gap-4 text-xl font-medium">
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
      </MaxWidthWrapper>
    </header>
  );
}

// header {
//     width: 1140px;
//     max-width: 80%;
//     margin: auto;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     position: relative;
//     z-index: 100;
//   }

//   header a {
//     color: #eee;
//     margin-right: 5px;
//     padding: 5px 10px;
//     transition: 0.2s;
//   }

//   a.active {
//     background: #14ff72cb;
//     border-radius: 2px;
//   }

//   header a:hover {
//     background: #14ff72cb;
//     border-radius: 2px;
//   }
