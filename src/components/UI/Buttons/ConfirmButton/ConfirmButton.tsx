import React from 'react';
import style from './ConfirmButton.module.scss';
import {ConfirmButtonProps} from "../../../../types/types"; 


const ConfirmButton: React.FC<ConfirmButtonProps> = ({children,onClick}) => {
    return (
        <button className={style.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default ConfirmButton;