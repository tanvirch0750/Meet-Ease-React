import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  // Define arrays for each section
  const socialLinks = [
    { icon: <InstagramIcon className="w-6 h-6" />, href: '#' },
    { icon: <FacebookIcon className="w-6 h-6" />, href: '#' },
    { icon: <TwitterIcon className="w-6 h-6" />, href: '#' },
  ];

  const contactInfo = [
    { label: 'Phone', value: '415-201-6370', href: 'tel:415-201-6370' },
    {
      label: 'Email',
      value: 'hello@meetease.com',
      href: 'mailto:hello@meetease.com',
    },
  ];

  const accountLinks = [
    { label: 'Create account', href: '/sign-up' },
    { label: 'Sign in', href: '/login' },
  ];

  const companyLinks = [
    { label: 'About Meet Ease', href: '/about-us' },
    { label: 'For Business', href: '/for-business' },
    { label: 'Careers', href: '/careers' },
  ];

  const resourceLinks = [
    { label: 'Room directory', href: '/rooms' },
    { label: 'Contact Us & Faqs', href: '/contact-us' },
    { label: 'Privacy & terms', href: '/privacy-policy' },
  ];

  return (
    <footer className="py-16 border-t border-gray-200 bg-[#011611] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        {/* Logo and Social Links */}
        <div className="flex flex-col">
          <Link to="/" className="text-3xl font-bold mb-8">
            <span className="uppercase">Meet</span>{' '}
            <span className="inline-block px-2 bg-emerald-600 rounded-md">
              Ease
            </span>
          </Link>

          <ul className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-gray-200"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-400 mt-auto">
            Copyright &copy; <span>{year}</span> by Meet Ease. All rights
            reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-lg font-medium mb-8">Contact Us</p>
          <address className="not-italic mb-8 text-sm">
            <p className="mb-6 text-gray-400">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            {contactInfo.map((info, index) => (
              <p key={index}>
                <Link
                  className="block text-gray-400 hover:text-gray-200 mb-2"
                  to={info.href}
                >
                  {info.value}
                </Link>
              </p>
            ))}
          </address>
        </div>

        {/* Navigation Links */}
        <div>
          <p className="text-lg font-medium mb-8">Account</p>
          <ul className="flex flex-col gap-4 text-sm">
            {accountLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-gray-400 hover:text-gray-200"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-medium mb-8">Company</p>
          <ul className="flex flex-col gap-4 text-sm">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-gray-400 hover:text-gray-200"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <p className="text-lg font-medium mb-8">Resources</p>
          <ul className="flex flex-col gap-4 text-sm">
            {resourceLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-gray-400 hover:text-gray-200"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
