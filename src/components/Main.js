import React from 'react';
import { connect } from 'react-redux';

import { setAllFilmsFromAPI, setPrintedFilmsList, setLikeList } from '../actions';
import { movies$ } from '../api/movies';

import Carte from './Carte';
import FilterBar from './FilterBar';
import PaginationBar from './PaginationBar';

import '../style/Main.css';



class Main extends React.Component{

    constructor(props){
        super(props);

        this.fetchFromAPI();
    }

    fetchFromAPI() {

        movies$.then((filmList)=>{
            this.props.setAllFilms(filmList);
            this.props.setPrintedFilms(filmList);
            this.props.setLikeList(filmList.length);

        });

    }

    getShowed(){
        let a = this.props.nbFilmPage * (this.props.pageNumber - 1),
            b = this.props.nbFilmPage * this.props.pageNumber;

            
        return this.props.printedFilmList.filter((_, idx)=> a <= idx && b > idx );
    }

    
    render(){

        return this.props.printedFilmList && this.props.allFilmList &&  (
            <main>
                <FilterBar/>

                <div id='main-content'>
                    <h1>Liste des résultats :</h1>

                    <div id='filmList'>
                        {this.getShowed().map((film, i) => ((
                            <Carte id={film.id} title={film.title} category={film.category} likes={film.likes} dislikes={film.dislikes} key={i}/>

                        )))}
                    </div>

                    <PaginationBar />
                </div>




                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"/>

            </main>
        );
    }


}

const mapStateToProps = function(state, m_props) {
    return {
        allFilmList: state.filmList.allFilmList,
        printedFilmList: state.filmList.printedFilmList,

        nbFilmPage: state.pagination.nbFilmPage,
        pageNumber: state.pagination.pageNumber,

    }
}

const mapDispatchToProps = function(dispatch, m_props) {
    return {
        setAllFilms: (filmList) => dispatch(setAllFilmsFromAPI(filmList)),
        setPrintedFilms: (filmList) => dispatch(setPrintedFilmsList(filmList)),

        setLikeList: (nbElem) => dispatch(setLikeList(nbElem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);