export const getRandomProperty = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}