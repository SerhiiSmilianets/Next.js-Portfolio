export const getExpYears = () => {
    const careerStartDate = new Date('2018-09-12');
    const currentDate = new Date();
    const diff = currentDate.getTime() - careerStartDate.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    return years;
}

const getDate = (time: number|string) => {
    if (typeof time === 'string') {
        return time
    }

    const date = new Date(time);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return [month, year].join('/')
}

export const workingPeriod = (startDate:number, endDate:number|string) => {
    return {
        start: getDate(startDate),
        end: getDate(endDate)
    }
}