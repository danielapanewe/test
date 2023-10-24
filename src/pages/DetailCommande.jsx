import CartItem from '../features/cart/CartItem';
import {  useSelector, useDispatch } from 'react-redux';
import { clearCart, getCart } from '../features/cart/cartSlice';

function DetailCommande() {
    
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
  
    if (!cart.length) return <h2>Pas de commande</h2>;
  
    return (
      <div className="px-4 py-3">
        {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}
        <button className='btn'>Back to Menu</button>
  
        <h2 className="mt-7 text-xl font-semibold">Votre commande</h2>
  
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
  
        <div className="mt-6 space-x-2">
          {/* <Button to="/order/new" type="primary">
            Order pizzas
          </Button> */}
          <button className="btn">Commander</button>
          <button className='btn' onClick={() => dispatch(clearCart())}> Effacer la Commande</button>
  
          {/* <Button type="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button> */}
        </div>
      </div> )
}

export default DetailCommande;
