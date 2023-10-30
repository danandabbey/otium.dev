/* Helper Functions                                             
******************************************/

const modifyHours = (hour: any) => {
    return hour === 0 ?
        `12am` : hour > 12 ?
            `${hour = hour - 12}pm` : hour === 12 ?
                `12pm` : `${hour}am`
};

const check = (data: any):number => {
    return data ? data : 0;
};

const average = (x: any, y: any) => {
    let first: number = x === null ? 0 : x;
    let second: number = y === null ? 0 : y;
    let minutes: number = new Date().getMinutes();
    return minutes > 30 ?
        minutes > 45 ?
            Math.round((first * 1 + second * 3) / 4)
            : Math.round((first * 1 + second * 2) / 3)
        : (minutes < 30) ?
            minutes < 15 ?
                Math.round((first * 3 + second * 1) / 4)
                : Math.round((first * 2 + second * 1) / 3)
            : Math.round((first + second) / 2);
};

const validateTime = (obj: any) => {
    let same = true
    let times: number[] = [];
    for (let key in obj) { times.push(obj[key][0][`validTime`]) };
    times.forEach((value) => value === times[0] ? '' : same = false)
    return same ? obj : null
};

const time = (event: any, hour: number = 2): boolean => {
    let x = new Date(event[`validTime`]).getTime() - new Date().getTime() <= hour * 3600000
    return x
};

export { modifyHours, check, average, validateTime, time };