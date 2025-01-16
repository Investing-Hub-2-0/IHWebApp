const numberToFixed = (number, toFixed = 2) => {
    return parseFloat(number).toFixed(toFixed);
}

module.exports = {
    numberToFixed
}