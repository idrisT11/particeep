import React from "react";
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

export default LikeBar;