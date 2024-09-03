import { useLocation } from 'react-router-dom';

export default function useCheckActiveNav() {
  const { pathname } = useLocation();

  const checkActiveNav = (nav: string) => {
    // Normalize paths by removing trailing slashes
    const normalizedNav = nav.replace(/\/$/, '');
    const normalizedPathname = pathname.replace(/\/$/, '');

    // Exact match check
    return normalizedPathname === normalizedNav;
  };

  return { checkActiveNav };
}
