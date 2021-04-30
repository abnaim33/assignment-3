// kilometer to meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log('kilometer cannot be negative number')
    }
    else {
        var meter = kilometer * 1000
        return meter;
    }

}
console.log(kilometerToMeter(5))





// budget calculator

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0) {
        console.log('number of device cannot be negative ')
    }
    else {
        var watchPrice = watch * 50
        var mobilePrice = mobile * 100
        var laptopPrice = laptop * 500
        var totalPrice = watchPrice + mobilePrice + laptopPrice
        return (totalPrice)
    }
}
console.log(budgetCalculator(1, 2, 3))





//hotel cost
function hotelCost(day) {
    let totalCost = 0
    if (day < 0) {
        console.log('number of days cannot be negative')
    } else {

        if (day < 11) {
            var firstTenDays = day * 100
            totalCost = firstTenDays
        }

        else if (day < 21) {
            var firstTenDays = 10 * 10
            var daysAfterTen = (day - 10) * 80;
            totalCost = firstTenDays + daysAfterTen
        }
        else {
            var firstTenDays = 10 * 10
            var daysAfterTen = (day - 10) * 50;
            var daysAfterTwenty = (day - 20) * 8
            totalCost = firstTenDays + daysAfterTen + daysAfterTwenty
        }
    }
    return totalCost;
}

console.log(hotelCost(31))





//mega friend


function megaFriend([...friend]) {
    return friend.reduce((c, v) => c.length > v.length ? c : v);
}

console.log(megaFriend(['naim', 'fahim', 'abdul kaiyum']));
