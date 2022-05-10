import React from 'react';
import { connect } from 'react-redux';
import { toggleLike, toggleDislike, deleteFilm } from '../actions';

import LikeBar from './LikeBar';
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

    }

    handleDelete(){
        this.props.deleteFilm(this.props.id);
    }

    liked(){
        return this.props.likedFilm[this.props.id-1].likeValue == 'LIKED';
    }

    disliked(){
        return this.props.likedFilm[this.props.id-1].likeValue == 'DISLIKED';
    }

    render(){
        return this.props.likedFilm.length != 0 && (

            <div className='carte-footer'>
                <button onClick={this.handleDelete} className='delete-button'> 
                    <img 
                        src='/images/delete.svg' 
                        width={"30px"}  
                        alt="dislike"
                    /> 
                </button>

                <div className='like-zone'>
                    <div className='like-dislike-ctn'>
                        <button onClick={this.handleLike} className='like-button'> 
                            <img 
                                src={this.liked()?'/images/like_full.svg':'/images/like.svg'}
                                width={"30px"}  
                                alt="like"
                            /> 
                            <span>{this.props.likes+(this.liked()?1:0)}</span>
                        </button>


                        <button onClick={this.handleDislike} className='dislike-button'> 
                            <img 
                                src={this.disliked()?'/images/dislike_full.svg':'/images/dislike.svg'}
                                width={"30px"}  
                                alt="dislike"
                            /> 
                            <span>{this.props.dislikes+(this.disliked()?1:0)}</span>
                        </button>

                    </div>

                    <LikeBar likes={this.props.likes+(this.liked()?1:0)} dislikes={this.props.dislikes+(this.disliked()?1:0)} />

                </div>


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