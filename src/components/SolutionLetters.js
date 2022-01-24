import propTypes from 'prop-types';
import '../styles/_letters.scss';

function SolutionLetters({ word, userLetters }) {
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      //si la letra no está en userLetters --->  li vacío
      //si la letra sí está en userLetters --->  li con esa letra
      return (
        <li key={index} className="letter">
          {userLetters.includes(letter) ? letter : ''}
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

SolutionLetters.propTypes = {
  word: propTypes.string.isRequired,
  userLetters: propTypes.array.isRequired,
};

export default SolutionLetters;
