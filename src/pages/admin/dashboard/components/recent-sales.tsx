import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales({ bookings }: { bookings: any }) {
  return (
    <div className="space-y-8">
      {bookings?.map((data: any) => (
        <div key={data?._id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-628.jpg?size=626&ext=jpg&uid=R15161155&ga=GA1.1.911219905.1717681244&semt=ais_hybrid"
              alt="Avatar"
            />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {data?.user?.name}
            </p>
            <p className="text-sm text-muted-foreground">{data?.user?.email}</p>
          </div>
          <div className="ml-auto font-medium">{data?.totalAmount}</div>
        </div>
      ))}
    </div>
  );
}
