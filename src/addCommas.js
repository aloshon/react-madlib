function addCommas(num) {
    // Turn num into string to quickly create reversed array.
    const reversedNum = String(num).split("").reverse();
    let result = [];
    for(let i = 0; i < reversedNum.length; i ++){
        // Do not add comma at index 0
        if(i % 3 === 0 && i !== 0){
            result.push(',');
        }

        result.push(reversedNum[i]);
    }
    // Reorder it back to normal and keep as string.
    return result.reverse().join("");
}

module.exports = addCommas;