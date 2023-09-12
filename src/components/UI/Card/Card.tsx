import style from "../Card/Card.module.scss";

import {CardProps} from "../../../types/types";

const Card: React.FC<CardProps> = ({children,className}) => {
    const classes = `${style.card} ${className}`;

    return (
        <div className={classes}>{children}</div>
    )
}

export default Card;