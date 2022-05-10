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

    handlePageJump(inc){
        let nbPages = Math.floor(this.props.nbFilm/this.props.nbFilmPage) + 1;

        if (inc > 0 && this.props.pageNumber + 1 <= nbPages) 

            this.props.setPage(this.props.pageNumber + 1);

        else if (inc < 0 && this.props.pageNumber - 1 > 0) 
            this.props.setPage(this.props.pageNumber - 1);
            
    }

    render(){


        if ( this.props.nbFilm && this.props.pageNumber && this.props.nbFilmPage) 
        {
            let nbPages = Math.ceil(this.props.nbFilm/this.props.nbFilmPage),
                tav = new Array(nbPages).fill(0).map((_, i)=>(i+1));
            
            return (
                <nav id='pagination-ctn'>
                    
                    <div onClick={()=>this.handlePageJump(-1)} className="pagination-avance-retour">
                    ❰
                    </div>

                    <div id='pagination-button-ctn'>
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

                    <div onClick={()=>this.handlePageJump(1)} className="pagination-avance-retour">
                    ❱
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