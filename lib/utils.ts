import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateVerbose(dateString: string) {

    // Parse the dateString to a Date object
    const date = new Date(dateString);

    // Check if the date parsed correctly
    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }

    // Get the month, day, and year from the Date object
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed in JS
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // get last two digits of year

    // Return the formatted string
    return `${month}/${day}/${year}`;
}

