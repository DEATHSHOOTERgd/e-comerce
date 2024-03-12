import { createProducts } from "../../redux/states/product.state";
import { AppStore } from "../../redux/store";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import usePerformRequest from "../shared/usePerformRequest";
import { getProducts } from "../../services/products.service";
import { getProductsAdapter } from "../../adapters";

export const useProduct=()=>{
    const {loading, callEndpoint} = usePerformRequest();
    const productsState = useSelector((store:AppStore)=>store.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchProducts();
    }, []);
    
    const fetchProducts = async ()=>{
        const products = await callEndpoint(getProducts());
        dispatch(createProducts(getProductsAdapter(products)));
    }

    return {
        productsState,
        fetchProducts,
        loading
    }
}