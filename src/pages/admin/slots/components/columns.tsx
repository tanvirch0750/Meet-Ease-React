import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { IRoom } from '@/types/roomType';

export const columns: ColumnDef<IRoom>[] = [
  {
    accessorKey: 'roomName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('roomName')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room No" />
    ),
    cell: ({ row }) => {
      // console.log(row.getValue('room'));
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('room')?.roomNo}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('room')?.pricePerSlot}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('date')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'startTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Time" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('startTime')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'endTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Time" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('endTime')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'isBooked',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Booked" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('isBooked') ? 'Yes' : 'No'}
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
