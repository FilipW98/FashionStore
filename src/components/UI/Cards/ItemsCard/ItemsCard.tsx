import React from 'react';
import style from './ItemsCard.module.scss';
import { CategoryProps } from '../../../../types/types';

const ItemsCard: React.FC<CategoryProps> = ({ children,categoryName }) => {
	return (
		<div>
      	<div className={style['title-box']}>
						<h3 className={style.title}>{categoryName}</h3>
						<div className={style.underline}></div>
					</div>
		<div className={style.items}>{children}</div>
		</div>
	);
};

export default ItemsCard;
