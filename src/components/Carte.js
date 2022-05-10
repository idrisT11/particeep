import React from 'react';
import LikeBar from './LikeBar';
import CarteFooter from './CarteFooter';
import '../style/Carte.css';

class Carte extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className='carte-ctn'>
                
                <h1 className='carte-title'>{this.props.title}</h1>
                <div className='carte-category'>
                    <span className='carte-category-title'>
                        Category :
                    </span>
                    <span className='carte-category-name'>
                        {this.props.category}
                    </span>
                </div>

                <LikeBar likes={this.props.likes} dislikes={this.props.dislikes} />

                <CarteFooter id={this.props.id}/>

            </div>
        );
    }


}

export default Carte;
