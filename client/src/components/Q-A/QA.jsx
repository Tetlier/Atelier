import React from 'React';
// comment in QA
/*
export default function Card({ recipe, onClick }) {
  let url = `https://source.unsplash.com/${recipe.image_id}`;
  // See examples/Card.html for what this component should render.
  let header;
  if (recipe.favorite) {
    header = <h2>{recipe.name}&nbsp;<sup>⭐️</sup></h2>;
  } else {
    header = <h2>{recipe.name}&nbsp;</h2>;
  }
  return (
    <aside onClick={() => { onClick({'id': recipe._id}); }}>
      <img src={url} width="384" height="192" alt={`${recipe.name} image`}></img>
      {header}
      <small>{formatDistanceToNow(new Date(parseISO(recipe.createdAt)), {
        addSuffix: true,
        includeSeconds: true
      })}</small>
      <p>{recipe.description}</p>
    </aside>
  );
}*/