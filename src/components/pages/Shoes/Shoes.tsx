import ItemsCard from '../../UI/Cards/ItemsCard/ItemsCard';
import Item from '../../UI/Item/Item';

const items = [
	{
		id: 7,
		name: 'Nike Free RN',
		price: 149,
		image: require('../../../assets/img/ShoesImg/nike-air-force.png'),
		count: 1,
	},
	{
		id: 8,
		name: 'Nike Air Force 1',
		price: 130,
		image: require('../../../assets/img/ShoesImg/black-nike2.png'),
		count: 1,
	},
	{
		id: 9,
		name: 'Puma Vikky V3',
		price: 110,
		image: require('../../../assets/img/ShoesImg/puma.png'),
		count: 1,
	},
	{
		id: 10,
		name: 'Adidas Deerupt Runner',
		price: 99,
		image: require('../../../assets/img/ShoesImg/gray-shoe.png'),
		count: 1,
	},
	{
		id: 11,
		name: 'Nike Kyrie 7',
		price: 185,
		image: require('../../../assets/img/ShoesImg/black-nike.png'),
		count: 1,
	},
	{
		id: 12,
		name: 'Steve Madded Filiz',
		price: 129,
		image: require('../../../assets/img/ShoesImg/big-shoe.png'),
		count: 1,
	},
];

const Shoes = () => {
	return (
		<ItemsCard className='' categoryName={"Shoes"}>
			{items.map(item => {
				return <Item key={item.id} item={item}></Item>;
			})}
		</ItemsCard>
	);
};
export default Shoes;
