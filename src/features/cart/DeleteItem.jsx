/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import { deleteItem } from './cartSlice';

function DeleteItem({ id }) {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(deleteItem(id))} className='btn'>Effacer</button>;
}

export default DeleteItem;
