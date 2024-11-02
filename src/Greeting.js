// Ajouter des props name et message
function Greeting({ name, message }) {
  return (
    <h1>
      {message} {name} !
    </h1>
  );
}

export default Greeting;
