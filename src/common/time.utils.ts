import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const currentTimestamp = (format = 'YYYY-MM-DD_HH-mm'): string => formatDate(new Date(), format);

export const formatDate = (date: Date, format: string): string => {
  return dayjs(date).tz('Europe/Berlin').format(format);
};
