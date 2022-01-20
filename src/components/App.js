import Header from './Header';
import { useState } from 'react';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import '../styles/App.scss';

//1. Pintar los guiones de la solución (fase 1)
//2. Modificar un array del estado
//3. Pintar los guiones de la solución (fase 2)
//4. Pintar las letras falladas
//5. Pintar el muñeco
function App() {
  //Estados
  const [numberOfErrors, setError] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const handleLastLetter = (e) => {
    const lastLetterValue = e.target.value;
    // si la letra que meto es una de las indicadas entonces cambias el estado
    if (lastLetterValue.match('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]?$')) {
      setLastLetter(lastLetterValue);
    }
    if (lastLetterValue !== '') {
      setUserLetters([...userLetters, lastLetterValue]); //----- mirar devtools ""
    }
  };

  return (
    <div>
      <div className="page">
        <Header />
        <main className="main">
          <section>
            <SolutionLetters word={word} userLetters={userLetters} />
            <ErrorLetters word={word} userLetters={userLetters} />

            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={lastLetter}
                onChange={handleLastLetter}
              />
            </form>
          </section>

          <Dummy word={word} userLetters={userLetters} />
        </main>
      </div>
    </div>
  );
}

export default App;
