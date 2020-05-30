const convertDateToTimeSince = value => {
    const date = new Date(value);
    const seconds = Math.floor((new Date() - date) / 1000);
    const interval = Math.floor(seconds / 86400);
    let result = date.toDateString();
    if (interval < 7) {
        result = interval + " days ago";
    }
    return result;
};

export default convertDateToTimeSince;
