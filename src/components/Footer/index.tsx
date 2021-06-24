import Image from 'next/image';
import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                <Image 
                    src="/images/logotipo-footer.png"
                    width={220.18}
                    height={100}
                    alt="Amoratec - Desenvolvimento e Marketing Digital"
                />
                <div className={styles.grid}>
                    <div>
                        <p>Construa com a gente a peça chave que falta na operação da sua empresa e veja seu negócio mudar de patamar. </p>
                    </div>
                    <div>
                        <strong>Marketing</strong>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Conteúdos</a></li>
                        </ul>
                    </div>
                    <div>
                        <strong>Desenvolvimento</strong>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Conteúdos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
