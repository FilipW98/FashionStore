import style from './AddItemError.module.scss';
import ExitButton from '../../UI/Buttons/ExitButton/ExitButton';
import ConfirmButton from '../../UI/Buttons/ConfirmButton/ConfirmButton';
import Card from "../../UI/Card/Card";

interface AddItemErrorProps {
	setItemError: (newIsCartValue: boolean) => void;
}

const AddItemError: React.FC<AddItemErrorProps> = ({ setItemError }) => {
	return (
		
			<div className={style['error-shadow']}>
				<Card className={style['error-box']}>
					<ExitButton className={style.button} size={29}
						onClick={() => {
							setItemError(false);
						}}>
						</ExitButton>
					<div>
						<p>This item is already in the cart!</p>
						<ConfirmButton
							onClick={() => {
								setItemError(false);
							}}>
							Okay
						</ConfirmButton>
					</div>
				</Card>
			</div>
		
	);
};

export default AddItemError;
