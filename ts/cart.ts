import { CartItem } from './cart-item';
import { Product } from './product';

class Cart{
    private cartItems: CartItem[] = [];

    public addProduct (product: Product, quantity: number = 1): void{

    }

    public updateProduct (product: Product, quantity: number = 1): void{

    }

    public removeProduct(product:Product): void{

    }

    public isEmpty(): boolean{
        return true;
    }

    public getTotalQuantity(): number{
        return 10;
    }

    public getTotalPrice(): number{
        return 20;
    }

    public showCartBodyHTML(): string{
        return '123';
    }

    public showCartFooterHTML(): string{
        return 'footer'
    }

}