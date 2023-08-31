export const convertDate = (oldFormat: string): string => {
    const [ year, month, day ] = oldFormat.split('-');
    return `${day}.${month}.${year}`;
};
