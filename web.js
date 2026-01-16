var client = {
    fullname : "Fendi James",
    height : 160,
    age : 2025,
    complexion : "fair"


};
console.log(client.height);
console.log(client.fullname);
{
    client.age -= 1995;
    client.complexion += "skin type";
}
console.log(client.age);
console.log(client.complexion);

//functions//
function curve (a, b, c)
{var  total = (a + b + c);
    return total;
}
var result = curve(2, 3.142, 4);
console.log(result)

function bed (i, j, k)
{
    var size = (i + j - k);
    return size;
}
var bedsize = bed(3, 7, 2);
console.log(bedsize)
{
    const g = 4;
    var harp = (g + 10);
}
console.log(harp)
function curve(a, b, c)
{
    
   var  total = (a + b + c);
    return total;
}
var result = curve(2, 3.142, 4);
console.log(result);

//oject//
var basket = {
    size: "Big",
    color: "Blue",
    capacity: 10
};
console.log(basket.size);

//array//
var box = [
    "pen",
    "books",
    "markers"
];
console.log(box[0]);

//assignment operators//
{var fullname = "Peter";
    fullname += "James";
    var address = "festac";
        address += 10;
    var age = 2025;
        age -= 1995;
}
console.log(fullname);
console.log(address);
console.log(age);


//member access and computed member access//
var room = {
    type: "vip",
    color: "white",
    access: [
        {keycard: "with keychain"},
        {keycard: "without keychain"}
    ],
    unitprice: 500000,
    stayprice: function (unitprice, days){
        return unitprice * days;
    }
};
console.log(room.stayprice(500000, 5));
console.log(room.access[1].keycard);
console.log(room.access[0]);

var vipRoomFeatures = [
    "Flat Screen Television",
    "High speed wifi",
    "Dedicated staff service",
    "Premium furniture",
    "Large bathroom with premium utilities",
    "Special access to other facilities"
];
console.log(vipRoomFeatures[3]);