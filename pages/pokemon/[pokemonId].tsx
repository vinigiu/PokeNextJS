import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async() => {
    const maxPokemons: number = 251;

    const api: string = 'https://pokeapi.co/api/v2/pokemon/';

    const res: Response = await fetch(`${api}/?limit=${maxPokemons}`);

    const data = await res.json();

    const paths = data.results.map((pokemon:any, index:number) => {
        return{
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context:any) => {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon:data }
    }
}

export default function Pokemon({pokemon}:any) {
    return(
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="300"
                height={'300'}
                alt={pokemon.name}
            />
            <div className={styles.id_container}>
                <h3>PokeDex Number:</h3>
                <p className={styles.id}>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item:any, index:number) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height*10} cm</p>
                </div>
                <div className={styles.weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight/10} kg</p>
                </div>
            </div>
        </div>
    )
}