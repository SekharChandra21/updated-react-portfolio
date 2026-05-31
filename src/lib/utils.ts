import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDuration(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date();
  const start = new Date(startDate);
  
  let years = 0;
  let months = 0;
  let days = 0;

  // Calculate years
  years = end.getFullYear() - start.getFullYear();
  
  // Calculate months
  let monthDiff = end.getMonth() - start.getMonth();
  if (monthDiff < 0) {
    years--;
    monthDiff += 12;
  }
  months = monthDiff;

  // Calculate days
  let dayDiff = end.getDate() - start.getDate();
  if (dayDiff < 0) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    dayDiff += prevMonth.getDate();
  }
  days = dayDiff;

  // Format the duration string
  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days > 0 && parts.length < 2) parts.push(`${days} day${days > 1 ? "s" : ""}`);

  return parts.join(", ");
}
