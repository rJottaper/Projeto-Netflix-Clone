import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {

    // Manipulando dados para pegar a DATA e o GÊNERO!

    let firstDate = new Date(item.first_air_date);
    
    let genres = [];
    for (let i in item.genres) {
        genres.push( item.genres[i].name )
    }
   
    return (

        <section className="featured" style={{

            backgroundSize: 'cover', // Para a imagem aumentar ou diminuir dependendo do monitor da pessoa!
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            
            <div className="featured--vertical">
                
                <div className="featured--horizontal">
                    
                    <div className="featured--name">{item.original_name}</div>
                    
                    <div className="featured--info">

                        <div className="featured--points">{item.vote_average} PONTOS</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} TEMPORADA{item.number_of_seasons !== 1 ? 'S' : ''}</div> 


                     </div>

                     <div className="featured--description">{item.overview}</div>
                     <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--listbutton">+ Minha Lista</a>
                     </div>

                     <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                
                </div>
            
            </div>
            
        </section>

    );

}