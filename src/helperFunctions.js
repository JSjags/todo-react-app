export const listId = () => {
    const uid = Math.round((Math.random() * Math.random()) * 10000);
    return uid;
}

export const randomHue = () => {
    const hue = Math.floor(Math.random() * 360)
    return hue;
}