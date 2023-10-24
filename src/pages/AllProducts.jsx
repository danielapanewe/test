import MenuItems from '../features/menu/MenuItems';
import { products } from '../data/data-allproducts';
import CartOverview from '../features/cart/CartOverview';

function AllProducts() {
    return (
        <>
            <ul className="containers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {products.map((product) => (
                    <MenuItems products={product} key={product.id} />
                ))}
            </ul>
            <CartOverview />
        </>
    );
}

export default AllProducts;
