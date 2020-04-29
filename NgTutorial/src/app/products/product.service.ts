import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn:'root'
})
export class ProductService{

    getProducts(): IProduct[]
    {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "fancy description heare",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/vc-launch-hp-banner.jpg"
            },
            {
                "productId": 3,
                "productName": "Hammer",
                "productCode": "TBX-0023",
                "releaseDate": "March 22, 2019",
                "description": "fancy description heare",
                "price": 8.99,
                "starRating": 4.6,
                "imageUrl": "https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/vc-launch-hp-banner.jpg"
            }
        ];
    }

}