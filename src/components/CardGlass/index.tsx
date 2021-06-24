import Image from 'next/image';
import styles from './styles.module.scss';

interface ICardGlassProps {
    icon: string;
    title: string;
    description: string;
}

export function CardGlass({ title, icon, description }: ICardGlassProps) {
    return (
        <article className={styles.container}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <Image
                        height={32}
                        width={32}
                        src={icon} 
                        alt={title} 
                    />
                </div>
                <strong>{title}</strong>
            </div>
            <p>{description}</p>
        </article>
    )
}