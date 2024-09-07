import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateToYYYYMMDD = (dateString: any): any => {
  if (dateString) {
    const date = new Date(dateString); // Convert string to Date object
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`; // Return the date in "YYYY-MM-DD" format
  } else {
    return null;
  }
};
