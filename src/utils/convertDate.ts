export const convertDate = (oldFormat: string | undefined): string => {
    if(oldFormat === undefined) {
        return '';
    } else {
        const [ year, month, day ] = oldFormat.split('-');
        return `${day}.${month}.${year}`;
    }
};
