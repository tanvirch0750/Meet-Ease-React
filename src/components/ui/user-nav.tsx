import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { api } from '@/redux/api/apiSlice';

export function UserNav() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    dispatch(api.util.resetApiState());
    navigate('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative h-8 w-8 rounded-full bg-white">
          <Avatar className="h-8 w-8 bg-white">
            <AvatarImage
              src={
                auth.image ||
                'https://img.freepik.com/premium-vector/market-researcher-vector-flat-style-illustration_1033579-70181.jpg?size=626&ext=jpg&uid=R15161155&ga=GA1.1.911219905.1717681244&semt=ais_hybrid'
              }
              alt="@shadcn"
            />
            <AvatarFallback className=" bg-white">A</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-white border-0 shadow-lg text-gray-900"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{auth.name}</p>
            <p className="text-xs leading-none text-gray-700">{auth.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" hover:!bg-emerald-500 hover:!text-white cursor-pointer">
            Profile
          </DropdownMenuItem>

          {auth.role === 'user' && (
            <DropdownMenuItem
              onClick={() => navigate('/my-bookings')}
              className=" hover:!bg-emerald-500 hover:!text-white cursor-pointer"
            >
              My Bookings
            </DropdownMenuItem>
          )}

          {auth.role === 'admin' && (
            <DropdownMenuItem
              className=" hover:!bg-emerald-500 hover:!text-white cursor-pointer"
              onClick={() => navigate('/admin/dashboard')}
            >
              Dashboard
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem
          className=" flex justify-center hover:!bg-emerald-500 hover:!text-white font-semibold cursor-pointer"
          onClick={logout}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
