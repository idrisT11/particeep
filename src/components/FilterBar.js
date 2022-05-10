import React from "react";
import { connect } from 'react-redux';

import { changeFilter, setPrintedFilmsList, setNbFilmPage, setPage } from '../actions';

import '../style/FilterBar.css';


class FilterBar extends React.Component{

    constructor(props){
        super(props);

        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    componentDidMount(){
        this.props.setNbFilmPage(8);

    }


    handleCategoryClick(category){

        if (category != this.props.selectedFilter) 
        {
            this.props.changeFilter(category);
            let newList =  this.props.allFilmList.filter((film)=>film.category == category);
            this.props.setPrintedFilmsList(newList);   
        }

        else
        {
            this.props.changeFilter('');
            this.props.setPrintedFilmsList(this.props.allFilmList);
        }

        this.props.setPage(1);

    }

    handleNbFilmPage(nb){
        this.props.setNbFilmPage(nb);
        this.props.setPage(1);
    }


    render(){

        return (
            <div className='filter-bar-ctn'>
                <h1>Filtrez vos résulats</h1>
                <div id="filter-bar-cetegory-ctn">

                    {this.props.categories && this.props.categories.map((category, i)=>((
                        <div 
                            className="catogory-filter" 
                            id={category===this.props.selectedFilter?'category-filter-selected': ''} 
                            key={i}
                            onClick={()=>this.handleCategoryClick(category)}
                        > 
                            {category} 
                        </div>
                    )))}


                </div>


                <div>
                    {this.props.printedFilmList && this.props.printedFilmList.length} résulat(s) affiché(s)
                </div>
                
                <h2>Nombre d'élements par page :</h2>

                <div id="nbFilmPage">
                    
                    <button 
                        onClick={()=>this.handleNbFilmPage(4)}
                        id={4==this.props.nbFilmPage?'nbFilmPage-selected': ''}
                        className="nbFilmPage-button"
                    >
                        4
                    </button>
                    <button 
                        onClick={()=>this.handleNbFilmPage(8)}
                        id={8==this.props.nbFilmPage?'nbFilmPage-selected': ''}
                        className="nbFilmPage-button"
                    >
                        8
                    </button>
                    <button 
                        onClick={()=>this.handleNbFilmPage(12)}
                        id={12==this.props.nbFilmPage?'nbFilmPage-selected': ''}
                        className="nbFilmPage-button"
                    >
                    12</button>
                </div>

            </div>
        );
    }


}

const mapStateToProps = function(state, m_props) {
    return {
      selectedFilter: state.filter,
      categories: state.filmList.categories,
      allFilmList: state.filmList.allFilmList,
      printedFilmList: state.filmList.printedFilmList,
      nbFilmPage: state.pagination.nbFilmPage,
      
    }
}

const mapDispatchToProps = function(dispatch, m_props) {
    return {
        changeFilter: (id) => dispatch(changeFilter(id)),
        setPrintedFilmsList: (newList) => dispatch(setPrintedFilmsList(newList)),
        setNbFilmPage: (nb) => dispatch(setNbFilmPage(nb)),
        setPage: (newPage) => dispatch(setPage(newPage)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);