export const getProductsAdapter=(products:any[])=>products.map((product=>({
    id:product.id,
    title:product.title,
    price:product.price,
    description:product.description,
    category:product.category,
    image:product.image,
    rating:{
        rate:product.rating.rate,
        count:product.rating.count,
    }
})));