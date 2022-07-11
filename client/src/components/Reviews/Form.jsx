import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleChange(event, state) {

  }

  render() {
    return (
      <div onClick = {() => onClick}>
        <div></div>


      </div>

    );
  }
}


// export default function Card({ recipe, onClick }) {

//   // See examples/Card.html for what this component should render.
//   return (<aside
//     onClick = {() => onClick(recipe._id)}>
//     <img src = {`https://source.unsplash.com/${recipe.image_id}`} width="384" height="192" alt="header image"></img>
//     <h2>{recipe.name}  {recipe.favorite ? <sup>⭐️</sup> : null}</h2>
//     <small>{recipe.createdAt}</small>
//     <p>{recipe.description}</p>
//   </aside>);
// }
