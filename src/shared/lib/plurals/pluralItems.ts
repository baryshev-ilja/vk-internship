export const pluralItems = (value: number) => {
    let items;

    if (value % 10 === 1 && value % 100 !== 11) {
        items = 'год';
    } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
        items = 'года';
    } else {
        items = 'лет';
    }
    return `${value} ${items}`;
};
