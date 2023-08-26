import style from './UnavailableFeature.module.scss';
import ExitButton from '../../UI/Buttons/ExitButton/ExitButton';
import ConfirmButton from '../../UI/Buttons/ConfirmButton/ConfirmButton';
import Card from "../../UI/Card/Card";

interface UnavailableFeatureProps {
	setUnavaliableFeature: (isFeature: boolean) => void;
}


const UnavailableFeature: React.FC<UnavailableFeatureProps> = ({ setUnavaliableFeature }) => {
	return (
		<div className={style['box-shadow']}>
			<Card className={style['box']}>
				<ExitButton className={style.button} size={29}
					onClick={() => {
						setUnavaliableFeature(false)
					}}>

                    </ExitButton>
                    <div>
						<p>This feature is unavaliable.</p>
						<ConfirmButton
							onClick={() => {
								setUnavaliableFeature(false);
							}}>
							Okay
						</ConfirmButton>
					</div>
			</Card>
		</div>
	);
};

export default UnavailableFeature;
