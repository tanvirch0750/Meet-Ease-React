import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('room')?.name} - {row.getValue('room')?.roomNo}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'user',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {/* @ts-ignore */}
            {row.getValue('user')?.email}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'room',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PPS" />
    ),
    cell: ({ row }) => {
      // console.log(row.getValue('room'));
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
    accessorKey: 'slots',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Slots" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row
              .getValue('slots')
              // @ts-ignore
              ?.map((sl: any) => `${sl?.startTime} - ${sl?.endTime}`)
              .join(', ')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'totalAmount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Price" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('totalAmount')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'trxId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Id" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]">
            {row.getValue('trxId')}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'isConfirmed',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Booked" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span
            className={
              row.getValue('isConfirmed') === 'confirmed'
                ? 'bg-green-200 text-green-950 font-semibold px-2 py-1 rounded-lg'
                : 'bg-red-200 text-red-950 font-semibold px-2 py-1 rounded-lg'
            }
          >
            {row.getValue('isConfirmed')}
          </span>
        </div>
      );
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cancel" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
