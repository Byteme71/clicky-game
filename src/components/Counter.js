import React from "react";
import ImageCard from "./ImageCard";
import image from "../image.json";



class Counter extends React.Component {

constructor(props){
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
}
    state = {
        count : 0,
        highScore: 0,
        image,
    }

    
handleIncrement = id => {

    console.log(id)

    this.setState({ count: this.state.count + 1, id:id, isClicked: true});

    // this.state.image.filter(function(item){
    //     console.log(item);

        if(this.state.isClicked === true && id === this.state.id){
          alert("No double clicks")
             this.setState({count: 0})

          if(this.state.count >= this.state.highScore){
            return(
            this.setState({
                highScore: this.state.count
            },() =>{this.setState({isClicked:false})})
            )
        }}
    // })
    
};



render () {

    if (this.state.highScore >= this.state.count){
    this.state.highScore === this.state.highScore 
    }


    if (this.state.count === 13){
    alert("Game over!")
    this.setState({count : this.state.count = 0})
    }

    
    return (
    <div>
        <ImageCard count = {this.state.count} handleIncrement = {this.handleIncrement} image = {image} isClicked = {this.state.isClicked} highScore = {this.state.highScore}/>
    </div>
    );
}
}

export default Counter;