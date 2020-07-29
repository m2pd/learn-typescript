import { ProductRepository } from './product-repository';
import { Product } from './product';

let productRepository = new ProductRepository();
let products : Product[] = productRepository.getItems();
let productID: Product = productRepository.getItemByID(109);

let productItems:string =  productRepository.showItemInHTML()

document.getElementById("list-product").innerHTML = productItems;
// console.log(products);
console.log(productID);
