import propTypes from 'prop-types';

function ErrorLetters(props) {
  const renderErrorLetters = () => {
    const wordLetters = props.word.split('');
    const errorLetter = props.userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );

    return errorLetter.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">{renderErrorLetters()}</ul>
    </div>
  );
}

ErrorLetters.propTypes = {
  word: propTypes.string.isRequired,
  userLetters: propTypes.array.isRequired,
};

export default ErrorLetters;
