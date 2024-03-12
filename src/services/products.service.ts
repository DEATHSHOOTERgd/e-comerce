import { loadAbort } from '../utils/loadAbort';
import axios from 'axios';
import { Product } from '../models';

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getProducts = () => {
    const controller = loadAbort();
    return {
      call: axios.get<Product[]>(`${VITE_API_URL}/products`, { signal: controller.signal }),
      controller
    };
};