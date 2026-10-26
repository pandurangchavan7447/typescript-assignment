const cl=console.log;
interface student{
    id:number;
    name:string;
    email:string;
    course:string;
    age:number;
    isActive:boolean;
}
let student1: student={
    id: 1,
    name:"paddy",
    email:"paddy@example.com",
    course:"MERN",
    age:22,
    isActive:true
}
cl(student1);
//1
interface employee{
    empid:number;
    empname:string;
    empemail:string;
    empsalary:number;
    empage:number;
    empisActive:boolean;
}
let employee1:employee={

    empid: 1,
    empname:"paddy",
    empemail:"sachin.wipro.com",
    empsalary: 50000,
    empage: 22,
    empisActive:true
}
cl(employee1);
//2
interface product{
    productid:number;
    productname:string;
    productprice:number;
    productcategory:string;
    productisAvailable:boolean;
}
let product1:product={
    productid: 1,
    productname:"laptop",
    productprice: 50000,
    productcategory: "electronics",
    productisAvailable:true
}
cl(product1);
//3
interface customer{
    customerid:number;
    customername:string;
    customeremail:string;
    customeraddress:string;
    customerisActive:boolean;
}
let customer1:customer={
    customerid: 1,
    customername:"paddy",
    customeremail:"sachin.wipro.com",
    customeraddress: "bangalore",
    customerisActive:true
}
cl(customer1);
//4
interface order{
    orderid:number;
    orderdate:string;
    orderamount:number;
    orderstatus:string;
    orderisActive:boolean;
}
let order1:order={
    orderid: 1,
    orderdate:"2023-01-01",
    orderamount: 50000,
    orderstatus: "delivered",
    orderisActive:true
}
cl(order1);
//5
interface supplier{
    supplierid:number;
    suppliername:string;
    supplieremail:string;
    supplieraddress:string;
    supplierisActive:boolean;
}
let supplier1:supplier={
    supplierid: 1,
    suppliername:"paddy",
    supplieremail:"sachin.wipro.com",
    supplieraddress: "bangalore",
    supplierisActive:true
}
cl(supplier1);
//6 
interface mobile{
    mobileid:number;
    mobilename:string;
    mobileprice:number;
    mobilebrand:string;
    color:"black"|"white"|"blue"|"red";
    mobileisAvailable:boolean;
}
let mobile1:mobile={
    mobileid: 1,
    mobilename:"iphone",
    mobileprice: 50000,
    mobilebrand: "apple",
    color:"black",
    mobileisAvailable:true
}
cl(mobile1);
//7
interface laptop{
    laptopid:number;
    laptopname:string;
    laptopprice:number;
    laptopbrand:string;
    color:"black"|"white"|"blue"|"red";
    laptopisAvailable:boolean;
}
let laptop1:laptop={
    laptopid: 1,
    laptopname:"macbook",
    laptopprice: 50000,
    laptopbrand: "apple",
    color:"black",
    laptopisAvailable:true
}
cl(laptop1);
//8
interface tablet{
    tabletid:number;
    tabletname:string;
    tabletprice:number;
    tabletbrand:string;
    color:"black"|"white"|"blue"|"red";
    tabletisAvailable:boolean;
}
let tablet1:tablet={
    tabletid: 1,
    tabletname:"ipad",
    tabletprice: 50000,
    tabletbrand: "apple",
    color:"black",
    tabletisAvailable:true
}
cl(tablet1);
//9
interface farmer{
    id:number;
    name:string;
    email:string;
    farmname:string;
    address:string;
    isActive:boolean;
}
let farmer1:farmer={
    id: 1,
    name:"paddy",
    email:"sachin.wipro.com",
    farmname: "paddy farm",
    address: "bangalore",
    isActive:true
}
cl(farmer1);
//10    
interface teacher{
    id:number;
    name:string;
    email:string;
    subject:string;
    age:number;
    isActive:boolean;

}
let teacher1:teacher={
    id: 1,
    name:"paddy",
    email:"sachin.wipro.com",
    subject: "maths",
    age: 22,
    isActive:true
}
cl(teacher1);
//11
interface book{
    bookid:number;
    bookname:string;
    bookauthor:string;
    bookprice:number;
    bookisAvailable:boolean;
}
let book1:book={
    bookid: 1,
    bookname:"typescript",
    bookauthor:"paddy",
    bookprice: 500,
    bookisAvailable:true
}
cl(book1);
//12
interface movie{
    movieid:number;
    moviename:string;
    moviedirector:string;
    moviereleaseyear:number;
    movieisAvailable:boolean;       

}
let movie1:movie={
    movieid: 1,
    moviename:"inception",  
    moviedirector:"christopher nolan",
    moviereleaseyear: 2010,
    movieisAvailable:true
}
cl(movie1); 
//13
interface song{
    songid:number;
    songname:string;
    songartist:string;
    songalbum:string;
    songisAvailable:boolean;       
}
let song1:song={
    songid: 1,
    songname:"shape of you",  
    songartist:"ed sheeran",
    songalbum:"divide",
    songisAvailable:true
}
cl(song1); 
//14
interface game{
    gameid:number;
    gamename:string;
    gamegenre:string;
    gamereleaseyear:number;
    gameisAvailable:boolean;       
}
let game1:game={
    gameid: 1,
    gamename:"fortnite",  
    gamegenre:"battle royale",
    gamereleaseyear: 2017,
    gameisAvailable:true
}
cl(game1); 
//15        
interface car{
    carid:number;
    carname:string;
    carbrand:string;
    carprice:number;
    carisAvailable:boolean;       
}
let car1:car={
    carid: 1,
    carname:"mustang",  
    carbrand:"ford",
    carprice: 50000,
    carisAvailable:true
}
cl(car1); 
//16
interface bike{
    bikeid:number;
    bikename:string;
    bikebrand:string;
    bikeprice:number;
    bikeisAvailable:boolean;       
}
let bike1:bike={
    bikeid: 1,
    bikename:"ninja",  
    bikebrand:"kawasaki",
    bikeprice: 50000,
    bikeisAvailable:true
}
cl(bike1); 
//17 but i want to need uniqui id and unique data for all sample 
interface bus{
    busnumber:number;
    bname:string;
    bbrand:string;
    bprice:number;
    busconductor:string;
    busdriver:string;
    busisAvailable:boolean;       

}
let bus1:bus={
    busnumber: 1212,
    bname:"lalpari",  
    bbrand:"ac",
    bprice: 500000000,
    busconductor:"shakilbabu",
    busdriver:"ramdas",
    busisAvailable:true
}
cl(bus1);
//18
interface train{
    trainnumber:number;
    tname:string;
    tbrand:string;
    tprice:number;
    trainconductor:string;
    traindriver:string;
    trainisAvailable:boolean;       
}
let train1:train={
    trainnumber: 1212,
    tname:"lalpari",  
    tbrand:"ac",
    tprice: 500000000,
    trainconductor:"shakilbabu",
    traindriver:"ramdas",
    trainisAvailable:true
}
cl(train1);
//19
