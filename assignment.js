// https://github.com/RaisaSyeeda/assignment.js

//problem: 01(kilometerToMeter)
function kilometerToMeter(length) {
    if (length < 0) {
        console.log("Distance can not be negative.");
    }
    else if (length == 0) {
        return 0;
    }
    else {
        var meter = length * 1000; // 1000 meter = 1 km
        return meter;
    }
}

var length = 2;
var result = kilometerToMeter(length);
console.log(result);



//problem: 02(budgetCalculator)
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        console.log("Number of product can not be negative.")
    }
    else {
        var watchPrice = watch * 50; // price of a watch = 50
        var mobilePrice = mobile * 100; // price of a mobile = 100
        var laptopPrice = laptop * 500; // price of a laptop = 500
        var totalPrice = watchPrice + mobilePrice + laptopPrice;
        return totalPrice;
    }
}

var watch = 4;
var mobile = 6;
var laptop = 1;
var cost = budgetCalculator(watch, mobile, laptop);
console.log(cost);



//problem: 03(hotelCost)
function hotelCost(days) {
    var totalCost;
    if (days <= 10) {
        totalCost = days * 100; //cost for first 10 days= 100
    }
    else if (days <= 20) {
        var firstTenDays = days * 100;
        var remaining = days - 10;
        var extraDays = remaining * 80; //cost for (11-20)th days= 80
        totalCost = firstTenDays + extraDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var extraDays = remaining * 50; //cost for 21th+ days= 50
        totalCost = firstTenDays + secondTenDays + extraDays;
    }
    return totalCost;
}

var days = 43;
var cost = hotelCost(days);
console.log(cost);



//problem: 04(megaFriend)
function megaFriend(friends) {
    if (friends == "") {
        console.log("The array is empty");
    }
    else {
        var length = 0;
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > length) {
                length = friends[i].length;
                var longestName = friends[i];
            }
        }
        return longestName;

    }

}
var friends = ["Rudaba", "Shafayet", "Sarah", "Rhea", "Aysha", "Mehshan", "Zia"];
var result = megaFriend(friends);
console.log(result);

//the end