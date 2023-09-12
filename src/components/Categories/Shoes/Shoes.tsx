// import style from './Shoes.module.scss';
import ItemsCard from '../../UI/Cards/ItemsCard/ItemsCard';
import Item from '../../UI/Item/ItemCard/Item';
import { ShoesProps } from '../../../types/types';

const items = [
	{
		id: 1,
		name: 'Nike Free RN',
		price: 149,
		image: require('../../../assets/img/nike-air-force.png'),
		count: 1,
	},
	{
		id: 2,
		name: 'Nike Air Force 1',
		price: 130,
		image: require('../../../assets/img/black-nike2.png'),
		count: 1,
	},
	{
		id: 3,
		name: 'Puma Vikky V3',
		price: 110,
		image: require('../../../assets/img/puma.png'),
		count: 1,
	},
	{
		id: 4,
		name: 'Adidas Deerupt Runner',
		price: 99,
		image: require('../../../assets/img/gray-shoe.png'),
		count: 1,
	},
	{
		id: 5,
		name: 'Nike Kyrie 7',
		price: 185,
		image: require('../../../assets/img/black-nike.png'),
		count: 1,
	},
	{
		id: 6,
		name: 'Steve Madded Filiz',
		price: 129,
		image: require('../../../assets/img/big-shoe.png'),
		count: 1,
	},
];

const Shoes: React.FC<ShoesProps> = ({ addItemsToCart }) => {
	return (
		<ItemsCard className=''>
			{items.map(item => {
				return <Item key={item.id} item={item} onAddToCart={addItemsToCart}></Item>;
			})}
		</ItemsCard>
	);
};

export default Shoes;
