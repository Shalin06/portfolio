import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateExperience(startDate: Date, endDate?: Date) {
    const currentDate = endDate ? endDate : new Date()

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth() + 3;

    if (currentDate.getDate() < startDate.getDate()) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // First year: minimum 0.5
    if (years < 1) {
        return 0.5;
    }

    // After first year: round to .0 or .5
    return months >= 6 ? years + 0.5 : years;
}