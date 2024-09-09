import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function DatePicker({
  date,
  setDate,
  isSelected,
}: {
  date: any;
  setDate: any;
  isSelected: any;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full text-center justify-center font-semibold py-5 mb-3 bg-white border-gray-300 text-gray-900 hover:bg-gray-200 hover:text-gray-900',
            !date && 'text-muted-foreground'
          )}
          disabled={isSelected}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-emerald-500" />
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className=" text-gray-900">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto md:w-[550px] p-0 bg-white text-gray-900 border shadow-xl border-gray-300"
        align="center"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="w-auto  md:w-[550px]"
        />
      </PopoverContent>
    </Popover>
  );
}
