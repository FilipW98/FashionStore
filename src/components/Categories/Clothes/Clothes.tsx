import React from 'react'
import ItemsCard from '../../UI/Cards/ItemsCard/ItemsCard';
import Item from '../../UI/Item/Item';
import { ShoesProps } from '../../../types/types';


const items = [
	{
		id: 1,
		name: 'Malfini Adler T-Shirt',
		price: 65,
		image: require('../../../assets/img/ClothesImg/t-shirt.png'),
		count: 1,
	},
	{
		id: 2,
		name: `Chino's Roy Trousers`,
		price: 110,
		image: require('../../../assets/img/ClothesImg/gray-trousers.png'),
		count: 1,
	},
	{
		id: 3,
		name: 'Rainbow Shorts',
		price: 99,
		image: require('../../../assets/img/ClothesImg/szorty-z-paskiem-removebg-preview.png'),
		count: 1,
	},
	{
		id: 4,
		name: 'Graphite Bugatti Coat',
		price: 599,
		image: require('../../../assets/img/ClothesImg/coat.png'),
		count: 1,
	},
	{
		id: 5,
		name: 'Blue Jeans Jacket',
		price: 150,
		image: require('../../../assets/img/ClothesImg/jeans-jacket.png'),
		count: 1,
	},
	{
		id: 6,
		name: 'New York Yankees Cap',
		price: 75,
		image: require('../../../assets/img/ClothesImg/black-cap.png'),
		count: 1,
	},
];


const Clothes: React.FC<ShoesProps>  = ({ addItemsToCart }) => {
  return (
    <ItemsCard className='' categoryName={'Clothes'}>
    {items.map(item => {
        return <Item key={item.id} item={item} onAddToCart={addItemsToCart}></Item>;
    })}
</ItemsCard>
  )
}

export default Clothes