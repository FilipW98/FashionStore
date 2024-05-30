import React, { useContext, useState, ChangeEventHandler } from 'react';
import style from './Newsletter.module.scss';
import AuthContext from '../../../store/auth-context';

const Newsletter = () => {
	const [inputValue, setInputValue] = useState('');
	const newsCtx = useContext(AuthContext);

	if (!newsCtx) {
		return null;
	}

	const subscribeHandler = () => {
		if (inputValue.includes('@')) {
			newsCtx.setPopup(true);
			newsCtx.setMessage({
				text: 'You have been subscribed.',
			});
		}
	};

	const inputHandler: ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value);
	};

	return (
		<div className={style['newsletter-box']}>
			<h2 className={style.title}>NEWSLETTER</h2>
			<p className={style.text}>
				Get exclusive discounts and offers delivered straight to your inbox. Stay ahead of the trends with early access
				to our latest products and collections.
			</p>

			<div className={style['input-btn-box']}>
				<input type='text' className={style.input} value={inputValue} onChange={inputHandler} />
				<button
					className={style.btn}
					onClick={() => {
						subscribeHandler();
					}}
				>
					SUBSCRIBE
				</button>
			</div>
			<div className={` ${style['wave']} `}>
				<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 1440 320'>
					<g>
						<path
							fill='#343434'
							fill-opacity='1'
							d='M0,32L12,80C24,128,48,224,72,250.7C96,277,120,235,144,197.3C168,160,192,128,216,101.3C240,75,264,53,288,80C312,107,336,181,360,197.3C384,213,408,171,432,176C456,181,480,235,504,250.7C528,267,552,245,576,229.3C600,213,624,203,648,197.3C672,192,696,192,720,192C744,192,768,192,792,213.3C816,235,840,277,864,261.3C888,245,912,171,936,160C960,149,984,203,1008,234.7C1032,267,1056,277,1080,272C1104,267,1128,245,1152,202.7C1176,160,1200,96,1224,74.7C1248,53,1272,75,1296,90.7C1320,107,1344,117,1368,144C1392,171,1416,213,1428,234.7L1440,256L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z'
						></path>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default Newsletter;
