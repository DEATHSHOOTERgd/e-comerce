import CustomTable from "../../components/shared/CustomTable";
import { useProduct } from "../../hooks/login/useProduct";
import { currency } from "../../utils/stringFormatters";

const Products =()=>{
    const {productsState} = useProduct();

    return (<>
    <div>
        <div></div>
        <div>
            <CustomTable 
            titles={['Title', 'Price(USD)', 'Description', 'Category', 'Image'] } 
            cells={
                [
                    {source:'title'}, 
                    {source:'price', fromatter:currency}, 
                    {source:'description'}, 
                    {source:'category'},
                    {source:'image', Component:({value})=><img style={{width:'50px'}} src={value}/>}
                ]
            } 
            data={productsState}/>
        </div>
    </div>
    </>)
}

export default Products;