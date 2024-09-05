import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import EditCategoryForm from './edit-category-form';
import { PencilIcon } from 'lucide-react';

export function EditCategory({ category }: { category: any }) {
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

      <DialogContent className="sm:max-w-[700px] z-[10000]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription className="">
            Make changes to Category here.
          </DialogDescription>
        </DialogHeader>

        <EditCategoryForm category={category} />
      </DialogContent>
    </Dialog>
  );
}
