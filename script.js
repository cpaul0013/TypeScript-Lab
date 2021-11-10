var Kilimanjaro = {
    name: "Kilimanjaro",
    height: 19341
};
var Everest = {
    name: "Everest",
    height: 29029
};
var Denali = {
    name: "Denali",
    height: 20310
};
var mountains = [Kilimanjaro, Everest, Denali];
function findNameofTallestMountain(mountains) {
    var tallestMt = { name: "", height: 0 };
    for (var i = 0; i < mountains.length; i++) {
        if (tallestMt.height < mountains[i].height) {
            tallestMt = mountains[i];
        }
    }
    return tallestMt.name;
}
console.log(findNameofTallestMountain(mountains));
var prodctList = [
    { name: "Chips", price: 2.00 },
    { name: "Soda", price: 1.00 },
    { name: "Hot Dog", price: 2.50 },
    { name: "Nachos", price: 3.50 }
];
function calcAverageProductPrice(productList) {
    var avgPrice = 0;
    for (var i = 0; i < prodctList.length; i++) {
        avgPrice = avgPrice + prodctList[i].price;
    }
    avgPrice = avgPrice / (prodctList.length);
    return avgPrice;
}
console.log(calcAverageProductPrice(prodctList));
;
var motor = { name: "Motor", price: 10.00 };
var sensor = { name: "Sensor", price: 12.50 };
var led = { name: "LED", price: 1.00 };
var Invertory = [
    { product: motor, quantity: 10 },
    { product: sensor, quantity: 4 },
    { product: led, quantity: 20 }
];
function calcInventoryValue(inventoryItems) {
    var InventoryValue = 0;
    for (var i = 0; i < inventoryItems.length; i++) {
        InventoryValue += (inventoryItems[i].product.price * inventoryItems[i].quantity);
    }
    return InventoryValue;
}
console.log(calcInventoryValue(Invertory));
