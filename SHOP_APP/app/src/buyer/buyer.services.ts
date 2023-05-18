import { BadRequestError, NotAuthorizedError } from '@shopapp1/common';
import { ProductService, productService } from './../seller/product/product.service';
import { cartService, CartService } from "./cart/cart.service";
import { AddProductToCartDto, RemoveProductFromCartDto, UpdateCartProductQuantityDto } from "./dtos/cart.dto";

export class BuyerService {
    constructor(
        public cartService: CartService,
        public productService: ProductService
    ) {}

    async addProductToCart(addProductToCartDto: AddProductToCartDto) {
        const product = await this.productService.getOneById(addProductToCartDto.productId)
        if(!product) return new BadRequestError('Product not found!')

        const cart = await this.cartService.addProduct(addProductToCartDto, product)
        if(!cart) return new Error('Could not add product to the cart')
        return cart
    }

    async updateCartProductQuantity(updateCartProductQuantityDto: UpdateCartProductQuantityDto) {
        const { productId, cartId } = updateCartProductQuantityDto
        const cartProduct = await this.cartService.getCartProductById(productId, cartId)
        if(!cartProduct) return new BadRequestError('Product not found in cart!')

        const cart = await this.cartService.updateProductQuantity(updateCartProductQuantityDto)
        if(!cart) return new Error('Could not update the cart produduct quantity')
        return cart
    }

    async removeProductFromCart(removeProductFromCartDto: RemoveProductFromCartDto) {
        const { productId, cartId } = removeProductFromCartDto
        const cartProduct = await this.cartService.getCartProductById(productId, cartId)
        if(!cartProduct) return new BadRequestError('Product not found in cart!')

        const cart = await this.cartService.removeProductFromCart(removeProductFromCartDto)
        if(!cart) return new Error('Could not update the cart produduct quantity')
        return cart
    }

    async getCart(cartId: string, userId: string) {
        const cart = await this.cartService.getCart(cartId)
        if(!cart) return new BadRequestError('cart not found')

        if(cart.user.toString() !== userId) return new NotAuthorizedError()
    }

}

export const buyerService = new BuyerService(cartService, productService)