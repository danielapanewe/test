/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
     
      <button  onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
      <span className="text-sm font-medium">{currentQuantity}</span>
     
      <button  onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
    </div>
  );
}

export default UpdateItemQuantity;
