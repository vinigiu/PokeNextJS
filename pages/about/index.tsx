import Image from 'next/image';
import styles from '../../styles/About.module.css'

export default function About () {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p> Este projeto foi desenvolvido com o intuito de prática em desenvolvimento utilizando NextJS e Typescript e Deploy na Vercel.</p>
            <p> Para tal, foi utilizada a PokeAPI para prática de consumo de Back-end pelo Front-end.</p>
            <Image 
                src={"/images/charizard.png"}
                width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    )
}