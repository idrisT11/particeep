import React from 'react';
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

                <CarteFooter id={this.props.id} likes={this.props.likes} dislikes={this.props.dislikes}/>

            </div>
        );
    }


}

export default Carte;
