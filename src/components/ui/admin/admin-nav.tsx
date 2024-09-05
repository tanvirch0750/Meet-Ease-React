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
import { Button } from '../button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { api } from '@/redux/api/apiSlice';

export function AdminNav() {
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
        <Button className="relative h-8 w-8 rounded-full ">
          <Avatar className="h-8 w-8 ">
            <AvatarImage
              src={
                auth.image ||
                'https://img.freepik.com/premium-vector/market-researcher-vector-flat-style-illustration_1033579-70181.jpg?size=626&ext=jpg&uid=R15161155&ga=GA1.1.911219905.1717681244&semt=ais_hybrid'
              }
              alt="@shadcn"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{auth.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {auth.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>

          {auth.role === 'user' && (
            <DropdownMenuItem className=" cursor-pointer">
              My Bookings
            </DropdownMenuItem>
          )}

          {auth.role === 'admin' && (
            <DropdownMenuItem
              className=" cursor-pointer"
              onClick={() => navigate('/admin/dashboard')}
            >
              Dashboard
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className=" flex justify-center cursor-pointer bg-primary hover:bg-primary/90 text-gray-900 font-semibold"
          onClick={logout}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
