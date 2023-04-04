import "./Card.css";

function Card(props) {
  //We create a variable called classes and store 'props.className' in it. so that we can use the assigned class in the case
  const classes = "card " + props.className;

  // props.children is a built-in property used to wrap components in any react component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
