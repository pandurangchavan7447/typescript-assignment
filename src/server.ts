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