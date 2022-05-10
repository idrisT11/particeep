import React from 'react';
import { connect } from 'react-redux';
import { toggleLike, toggleDislike, deleteFilm } from '../actions';

import '../style/Carte.css';

class CarteFooter extends React.Component{

    constructor(props){
        super(props);
        

        this.handleDislike = this.handleDislike.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleLike(){
        this.props.toggleLike(this.props.id);
    }

    handleDislike(){
        this.props.toggleDislike(this.props.id);
        //console.log(this.props.auth);

    }

    handleDelete(){
        this.props.deleteFilm(this.props.id);
    }

    render(){
        return(
            <div className='carte-footer'>
                <button onClick={this.handleDelete} className='delete-button'> <img src='/images/delete.svg' width={"30px"}  alt="dislike"/> </button>
                <button onClick={this.handleLike} className='like-button'> <img src='/images/like.svg' width={"30px"}  alt="like"/> </button>
                <button onClick={this.handleDislike} className='dislike-button'> <img src='/images/dislike.svg' width={"30px"}  alt="dislike"/> </button>
            </div>
        );
    }
}

const mapStateToProps = function(state, m_props) {
    return {
      likedFilm: state.likedFilms,
    }
}

const mapDispatchToProps = function(dispatch, m_props) {
    return {
      toggleLike: (id) => dispatch(toggleLike(id)),
      toggleDislike: (id) => dispatch(toggleDislike(id)),
      deleteFilm: (id) => dispatch(deleteFilm(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarteFooter);