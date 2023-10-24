/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
    const { id, title, quantity, totalPrice } = item;

    const currentQuantity = useSelector(getCurrentQuantityById(id));

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {title}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{totalPrice}</p>
        
                <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
                <DeleteItem id={id} />
            </div>
        </li>
    );
}

export default CartItem;
