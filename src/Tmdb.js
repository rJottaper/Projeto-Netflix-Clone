const API_KEY = 'd498db982a1854a0a9e15345b695ccef';
const API_BASE = 'https://api.themoviedb.org/3';

/* 

    - Originais NetFlix
    - Recomendados
    - Em Alta
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentários

*/

const basicFetch = async (endpoint) => { // Função para auxiliar para pegar o json e retornar o resultado para esse json

    const req = await fetch(`${API_BASE}${endpoint}`); // await = É usado para esperar por uma Promise, Fetch = Usado para manipular interfaces com HTTP.
    const json = await req.json(); 
    
    return json;

}

/* 

    SLUG: São o final de uma URL, links 'permanentes ou amigáveis' = gênero 
    ITEMS: [] = Array com a lista dos Filmes 

*/

export default {

    getHomeList: async () => { // ASYNC = Quem chamou não precisa esperar por sua execução e ela pode continuar normalmente sem bloquear a aplicação e quando termina volta ao inicio como um 'loop'!
        
        return [
         
            {

                slug: 'originals', 
                title: 'Originais do NetFlix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)

            },

            {

                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },
            
            {

                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            },
        
        ];
    },

    // Para pegar mais informações do filme selecionado. (FILME EM DESTAQUE) 
    
    getMovieInfo: async (movieId, type) => {

        let info = {};

        if (movieId) {
            
            switch(type) {

                case 'movie': 
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                                                            
                break;

                default:
                    info = null;
                break;

            }
        
        }

        return info;

    }

}