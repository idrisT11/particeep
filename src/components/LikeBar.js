import React from "react";
import { connect } from 'react-redux';
import { toggleLike, toggleDislike } from '../actions';
import '../style/LikeBar.css';

class LikeBar extends React.Component{

    render(){

        let percent = 100 * this.props.likes / (this.props.likes + this.props.dislikes) + '%';


        return (
            <div className='like-bar-ctn'>
                <div className="like-bar-exterior">
                    <div className="like-bar-interior" style={{width:percent}}>
                    </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeBar);