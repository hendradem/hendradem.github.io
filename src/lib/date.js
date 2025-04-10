
import { format } from 'date-fns';

export const formatTheDate = (dateData) => {
    const date = new Date(dateData);
    const formatted = format(date, 'MMM d, yyyy');
    return formatted
}