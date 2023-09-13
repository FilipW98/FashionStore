import React from 'react'
import ItemsCard from '../../UI/Cards/ItemsCard/ItemsCard';
import Item from '../../UI/Item/Item';
import { CategoryProps } from '../../../types/types';

const items = [
	{
		id: 13,
		name: 'H&M Scarf',
		price: 30,
		image: require('../../../assets/img/Accessories/scarf.png'),
		count: 1,
	},
	{
		id: 14,
		name: 'Betlewski Belt',
		price: 70,
		image: require('../../../assets/img/Accessories/belt.png'),
		count: 1,
	},
	{
		id: 15,
		name: 'Okulary',
		price: 110,
		image: require('../../../assets/img/Accessories/sunglasses-removebg-preview.png'),
		count: 1,
	},
	{
		id: 16,
		name: 'Ray-Ban Sunglasses',
		price: 50,
		image: require('../../../assets/img/Accessories/sunglasses.png'),
		count: 1,
	},
	{
		id: 17,
		name: 'Nike Bag',
		price: 199,
		image: require('../../../assets/img/Accessories/torba-removebg-preview.png'),
		count: 1,
	},
	{
		id: 18,
		name: 'Nerka',
		price: 129,
		image: require('../../../assets/img/Accessories/fanny-pack-removebg-preview.png'),
		count: 1,
	},
];

const Accesories: React.FC <CategoryProps> = ({addItemsToCart}) => {
  return (
    <ItemsCard className='' categoryName={"Accessories"}>
    {items.map(item => {
        return <Item key={item.id} item={item} onAddToCart={addItemsToCart}></Item>;
    })}
</ItemsCard>
  )
}

export default Accesories