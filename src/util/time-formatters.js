export const secondsToTimestamp = (seconds = 0) => {
    const SEP = ':';
    const dateString = new Date(seconds * 1000).toISOString().substr(11, 8);
    const elements = dateString.split(SEP);
    if (elements[0] === '00') return elements.slice(1).join(SEP);

    return dateString;
};
