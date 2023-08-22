import style from './AddItemError.module.scss';
import Button from '../UI/Buttons/ExitButton/Button';
import ConfirmButton from '../UI/Buttons/ConfirmButton/ConfirmButton';

interface AddItemErrorProps {
	setItemError: (newIsCartValue: boolean) => void;
}

const AddItemError: React.FC<AddItemErrorProps> = ({ setItemError }) => {
	return (
		<div>
			<div className={style['error-shadow']}>
				<div className={style['error-box']}>
					<Button
						onClick={() => {
							setItemError(false);
						}}>
							
						</Button>
					<div>
						<p>This item is already in the cart!</p>
						<ConfirmButton onClick={() => {
							setItemError(false);
						}}>Okay</ConfirmButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddItemError;
