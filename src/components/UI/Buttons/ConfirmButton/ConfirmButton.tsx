import React, { ReactNode } from 'react';
import style from './ConfirmButton.module.scss';

interface ConfirmButtonProps {
children: ReactNode,
onClick: ()=> void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({children,onClick}) => {
    return (
        <button className={style.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default ConfirmButton;