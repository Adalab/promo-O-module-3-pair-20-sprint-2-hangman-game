import '../styles/_letters.scss';

function SolutionLetters(props) {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split('');
    return wordLetters.map((letter, index) => {
      //si la letra no está en userLetters --->  li vacío
      //si la letra sí está en userLetters --->  li con esa letra
      return (
        <li key={index} className="letter">
          {props.userLetters.includes(letter) ? letter : ''}
        </li>
      );
    });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>

      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
