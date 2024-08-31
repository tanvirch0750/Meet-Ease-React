import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-32 border-t border-gray-200 bg-[#011611] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        {/* Logo and Social Links */}
        <div className="flex flex-col">
          <a href="" className=" text-3xl font-bold mb-8">
            <span className=" uppercase">Meet</span>{' '}
            <span className=" inline-block px-2 bg-emerald-600 rounded-md">
              Ease
            </span>
          </a>

          <ul className="flex gap-6 mb-8">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>

          <p className="text-sm text-gray-400 mt-auto">
            Copyright &copy; <span>{year}</span> by Meet Ease. All rights
            reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-xl font-medium mb-8">Contact Us</p>
          <address className="not-italic mb-8">
            <p className="mb-6 text-gray-400">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a
                className="block text-gray-400 hover:text-gray-200 mb-2"
                href="tel:415-201-6370"
              >
                415-201-6370
              </a>
              <a
                className="block text-gray-400 hover:text-gray-200"
                href="mailto:hello@omnifood.com"
              >
                hello@meetease.com
              </a>
            </p>
          </address>
        </div>

        {/* Navigation Links */}
        <div>
          <p className="text-xl font-medium mb-8">Account</p>
          <ul className="flex flex-col gap-6">
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Android app
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-8">Company</p>
          <ul className="flex flex-col gap-6">
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                About Meeet Ease
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-8">Resources</p>
          <ul className="flex flex-col gap-6">
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Room directory
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-gray-200" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
