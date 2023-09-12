import React from 'react'
import style from "./ItemsCard.module.scss";
import {CardProps} from "../../../../types/types";

const ItemsCard: React.FC <CardProps> = ({children}) => {
  return (
    <div className={style.items}>{children}</div>
  )
}

export default ItemsCard