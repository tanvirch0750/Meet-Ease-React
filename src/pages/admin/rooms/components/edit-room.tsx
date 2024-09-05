import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { PencilIcon } from 'lucide-react';
import EditRoomForm from './edit-room-form';

export function EditRoom({ room }: { room: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="px-2 dark:bg-black/70 dark:text-white/50"
          size="icon"
        >
          <PencilIcon size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent className=" max-w-7xl h-screen z-[10000] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Room</DialogTitle>
          <DialogDescription className="">
            Make changes to Room here.
          </DialogDescription>
        </DialogHeader>

        <EditRoomForm room={room} />
      </DialogContent>
    </Dialog>
  );
}
