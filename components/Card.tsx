import Image from "next/image"
import Link from "next/link";
import styles from "../styles/Card.module.css"

export default function Card ({pokemon}:any) {
    const pokeName = pokemon.name;
    const pokeNameUpper = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    
    return (
        <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
            <div className={styles.card}>
                <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="240"
                    height={'240'}
                    alt={pokemon.name}
                    className={styles.sprite}
                />
                <p className={styles.id}>#{pokemon.id}</p>
                <h3 className={styles.title}>{pokeNameUpper}</h3>
            </div>
        </Link>
    )
}