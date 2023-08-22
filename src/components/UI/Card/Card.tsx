import style from "../Card/Card.module.scss";

interface CardProps{
    children: React.ReactNode;
    className: string;
}

const Card: React.FC<CardProps> = ({children,className}) => {
    const classes = `${style.card} ${className}`;

    return (
        <div className={classes}>{children}</div>
    )
}

export default Card;