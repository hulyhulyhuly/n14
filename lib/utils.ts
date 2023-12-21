import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  let timeUnit: string;
  let timeValue: number;

  switch (true) {
    case timeDifference < MINUTE:
      timeUnit = "second";
      timeValue = Math.floor(timeDifference / 1000);
      break;
    case timeDifference < HOUR:
      timeUnit = "minute";
      timeValue = Math.floor(timeDifference / MINUTE);
      break;
    case timeDifference < DAY:
      timeUnit = "hour";
      timeValue = Math.floor(timeDifference / HOUR);
      break;
    case timeDifference < WEEK:
      timeUnit = "day";
      timeValue = Math.floor(timeDifference / DAY);
      break;
    case timeDifference < MONTH:
      timeUnit = "week";
      timeValue = Math.floor(timeDifference / WEEK);
      break;
    case timeDifference < YEAR:
      timeUnit = "month";
      timeValue = Math.floor(timeDifference / MONTH);
      break;
    default:
      timeUnit = "year";
      timeValue = Math.floor(timeDifference / YEAR);
  }

  return `${timeValue} ${timeUnit}${timeValue === 1 ? "" : "s"} ago`;
};

export const formatAndDivideNumber = (num: number): string => {
  let formattedNum: string;

  switch (true) {
    case num >= 1000000:
      formattedNum = (num / 1000000).toFixed(1) + "M";
      break;
    case num >= 1000:
      formattedNum = (num / 1000).toFixed(1) + "K";
      break;
    default:
      formattedNum = num.toString();
  }

  return formattedNum;
};
