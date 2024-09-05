import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

import { Room } from '../data/schema';

export const columns: ColumnDef<Room>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('name')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('category').name}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'roomNo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('roomNo')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'floorNo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Floor No" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('floorNo')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'capacity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Capacity" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('capacity')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'pricePerSlot',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price Per Slot" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('pricePerSlot')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'isFeatured',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Featured" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('isFeatured') ? 'Yes' : 'No'}
          </span>
        </div>
      );
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
