import React from 'react';
import { connect } from 'react-redux';

import { setPage, setNbFilmPage } from '../actions';
import '../style/PaginationBar.css';



class PaginationBar extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.setPage(1);

    }

    handlePageChange(page){
        this.props.setPage(page);

    }

    render(){


        if ( this.props.nbFilm && this.props.pageNumber && this.props.nbFilmPage) 
        {
            let nbPages = Math.floor(this.props.nbFilm/this.props.nbFilmPage) + 1,
                tav = new Array(nbPages).fill(0).map((_, i)=>(i+1));
                console.log(nbPages);
            
            return (
                <nav className='carte-ctn'>
                    
                    <div>
                        Retour
                    </div>

                    <div>
                        {
                            tav.map((page, i)=>((
                                <div 
                                    className='pagition-button'
                                    id={page==this.props.pageNumber?'pagition-button-selected':''}
                                    onClick={()=>this.handlePageChange(page)}
                                    key={i+'p'}
                                > 
                                    {page} 
                                </div>
                            )))
                        }
                    </div>

                    <div>
                        Avancer
                    </div>

                </nav>
            );
        }
    }


}

const mapStateToProps = function(state, m_props) {
    return {
        nbFilm: state.filmList.printedFilmList.length,
        nbFilmPage: state.pagination.nbFilmPage,
        pageNumber: state.pagination.pageNumber,
      
    }
}

const mapDispatchToProps = function(dispatch, m_props) {
    return {
        setPage: (newPage) => dispatch(setPage(newPage)),
        setNbFilmPage: (nb) => dispatch(setNbFilmPage(nb))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);