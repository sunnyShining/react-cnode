export function fromNow (time) {
    let now = new Date();
    now = now.getTime();
    let last = new Date(time);
    last = last.getTime();
    let latToNow = now - last;
    let returnTime;
    if (latToNow / 1000 < 60) {
        returnTime = `${Math.round(latToNow / 1000)} 秒前`;
    } else if (latToNow / 1000 >= 60 && latToNow / 1000 < 3600) {
        returnTime = `${Math.round(latToNow / 1000 / 60)} 分钟前`;
    } else if (latToNow / 1000 >= 3600 && latToNow / 1000 < 3600 * 24) {
        returnTime = `${Math.round(latToNow / 1000 / 60 / 60)} 小时前`;
    } else if (latToNow / 1000 >= 3600 * 24 && latToNow / 1000 < 3600 * 24 * 30) {
        returnTime = `${Math.round(latToNow / 1000 / 60 / 60 / 24)} 天前`;
    } else if (latToNow / 1000 >= 3600 * 24 * 30 && latToNow / 1000 < 3600 * 24 * 365) {
        returnTime = `${Math.round(latToNow / 1000 / 60 / 60 / 24 / 30)} 月前`;
    } else if (latToNow / 1000 >= 3600 * 24 * 365) {
        returnTime = `${Math.round(latToNow / 1000 / 60 / 60 / 24 / 365)} 年前`;
    }
    return returnTime;
}