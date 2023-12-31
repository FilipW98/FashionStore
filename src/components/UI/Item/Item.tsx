import React, { useContext } from 'react';
import style from './Item.module.scss';
import { ItemProps } from '../../../types/types';
import AuthContext from '../../../store/auth-context';

const Item: React.FC<ItemProps> = ({ item }) => {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		return null;
	}

	return (
		<div className={style.item}>
			<img className={style['item-img']} alt={item.name} src={item.image} />
			<div className={style['item-data']}>
				<h4 className={style['item-name']}>{item.name}</h4>
				<span>${item.price}</span>
				<button
					className={`btn ${style['add-btn']}`}
					onClick={() => {
						ctx.onAddItems(item);
						ctx.setIsAnimation(true);

						setTimeout(() => {
							ctx.setIsAnimation(false);
						}, 500);
					}}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Item;
