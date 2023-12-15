export interface Cart{
    items: Array<Cartinterface>
}

export interface Cartinterface{
    product:string,
    name:string,
    price:number,
    quantity:number,
    id:number
}