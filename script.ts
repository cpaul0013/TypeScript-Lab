interface Mountain{
    name:string;
    height:number;
}

let Kilimanjaro:Mountain={
    name:"Kilimanjaro",
    height:19341
}

let Everest:Mountain={
    name:"Everest",
    height:29029
}

let Denali:Mountain={
    name:"Denali",
    height:20310
}
let mountains = [Kilimanjaro, Everest, Denali];

function findNameofTallestMountain(mountains: Mountain[]):string
{
        let tallestMt:Mountain = {name: "", height: 0};
        for(let i:number = 0; i <mountains.length; i++ )
        {
                if(tallestMt.height < mountains[i].height)
                {

                        tallestMt = mountains[i];


                }

        }

        return tallestMt.name;


}

console.log(findNameofTallestMountain(mountains));

interface Products{
    name: string;
    price: number;
}

let prodctList: Products[] = [
{name: "Chips", price: 2.00},
{name: "Soda", price: 1.00},
{name: "Hot Dog", price: 2.50},
{name: "Nachos", price: 3.50}

]

function calcAverageProductPrice(productList: Products[]):number{
  let avgPrice: number = 0;
    for(let i:number = 0; i < prodctList.length; i++ )
    {
            avgPrice = avgPrice + prodctList[i].price;




    }
        avgPrice = avgPrice / (prodctList.length);
        return avgPrice;

}

console.log(calcAverageProductPrice(prodctList));

interface InventoryItem{
    product: Products,
    quantity: number;
};
let motor: Products = {name:"Motor", price: 10.00};
let sensor: Products = {name:"Sensor", price: 12.50};
let led: Products = {name: "LED", price: 1.00};
let Invertory:InventoryItem[] = [
    {product: motor, quantity: 10},
    {product: sensor, quantity: 4 },
    {product: led, quantity: 20}
];

function calcInventoryValue(inventoryItems: InventoryItem[]): number
{

let InventoryValue: number = 0;
for(let i: number=0; i< inventoryItems.length; i++)
{       InventoryValue += (inventoryItems[i].product.price * inventoryItems[i].quantity);



}
return InventoryValue;
}

console.log(calcInventoryValue(Invertory))