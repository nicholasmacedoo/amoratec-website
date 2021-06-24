import { ButtonHTMLAttributes } from "react"
import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
    return <button className={styles.container} {...rest}>{children}</button>
}