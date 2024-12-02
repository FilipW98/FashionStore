import React from 'react';
import ItemsCard from '../../UI/Cards/ItemsCard/ItemsCard';
import Item from '../../UI/Item/Item';

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
		name: 'Casio Watch',
		price: 220,
		image: require('../../../assets/img/Accessories/watch.png'),
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
		image: require('../../../assets/img/Accessories/bag.png'),
		count: 1,
	},
	{
		id: 18,
		name: 'Alpha Fanny Pack',
		price: 129,
		image: require('../../../assets/img/Accessories/fanny-pack.png'),
		count: 1,
	},
];

const Accesories= () => {
  return (
    <ItemsCard className='' categoryName={"Accessories"}>
    {items.map(item => {
        return <Item key={item.id} item={item}></Item>;
    })}
</ItemsCard>
  )
}

export default Accesories