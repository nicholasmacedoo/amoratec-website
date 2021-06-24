import { InputHTMLAttributes, useState, useRef } from "react"
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

export const Input = (props: InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }
    return (
        <div className={isFocused ? `${styles.container} ${styles.isFocused}` : styles.container}>
            <input 
                ref={inputRef}
                {...props}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    )
}