import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {

    // Para Fazer as SETAS funcionarem, ESQUERDA E DIREITA

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        
        let x = scrollX + Math.round(window.innerWidth / 2); // Para rolar para esquerda pegando a tela da pessoa.

        if (x > 0) { // Verificação para não passar de 0!
            x = 0;
        }

        setScrollX(x);

    }

    const handleRightArrow = () => {
        
        let x = scrollX - Math.round(window.innerWidth / 2);

        let listW = items.results.length * 150; // Para ver quantos itens tem na lista!

        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60; // Verificação para não passar do lado direito!
        }

        setScrollX(x);

    }

    return (

        <div className="movieRow">
            
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 30}}  />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 30}}  />
            </div>

            
            <div className="movieRow--listarea">

                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>

                {items.results.length > 0 && items.results.map((item, key) => (

                    <div key={key} className="movieRow--item">

                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>

                    </div>
                    
                ))}
                
                </div>

            </div>
        
        </div>

    );

}