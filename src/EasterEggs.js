

function isHalloween() {
    const now = new Date();
    const halloween = new Date(`October 31, ${now.getFullYear()} 18:00:00`);
    const timeUntil = halloween.getTime() - now.getTime();
    return timeUntil < 8 * 24 * 3600 * 1000;
}

export default isHalloween;