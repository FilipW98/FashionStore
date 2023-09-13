import React from 'react';
import style from './Item.module.scss';
import { ItemProps } from '../../../types/types';

const Item: React.FC<ItemProps> = ({item,onAddToCart}) => {
	return (
		<div className={style.item}>
			<img className={style['item-img']} alt={item.name} src={item.image} />
			<div className={style['item-data']}>
				<h4 className={style['item-name']}>{item.name}</h4>
				<span>${item.price}</span>
				<button
					className={`btn ${style['add-btn']}`}
					onClick={() => {
						onAddToCart(item);
					}}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Item;
