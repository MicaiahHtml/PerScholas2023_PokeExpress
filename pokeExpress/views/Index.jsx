const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1>Pokemon Index Page</h1>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return (
                            <li>
                                <a href={`/pokemon/${i}`}>
                                    {pokemon.name}
                                </a>
                                <img src = {pokemon.img}/>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;