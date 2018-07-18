import React from "react";


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const ImageCard = (props) => {

  let shuffleImgs = shuffleArray(props.image)

return (
<div className = "container text-center" >
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <p className="lead">Click Count: {props.count} Highscore: {props.highScore}</p>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <div className="row">
    <div className="col-md-1">
    </div>
        <div className="col-md-10">
            {
              shuffleImgs.map(item => {
                return ( 
                <img key={item.id} id={item.id} src={item.image} alt= {item.name} height= "300" width="200" isClicked = {item.isClicked} onClick={() => props.handleIncrement(item.id)} />
            )})}
    
        </div>
    <div className="col-md-1">
    </div>
    </div>
  </div>
</div>
</div>
)
}

export default ImageCard;