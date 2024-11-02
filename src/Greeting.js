// Ajouter des props name et message
function Greeting({ name, message, age, origine }) {
  return (
    <h1>
      {message} {name} quelle age as-tu {age} et quelle est ton origine{" "}
      {origine} ?
    </h1>
  );
}

export default Greeting;
