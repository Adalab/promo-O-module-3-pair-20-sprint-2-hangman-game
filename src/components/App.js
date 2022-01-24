import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Instructions from './Instructions';
import Options from './Options';
import Footer from './Footer';
import '../styles/App.scss';

//1. Pintar los guiones de la solución (fase 1)
//2. Modificar un array del estado
//3. Pintar los guiones de la solución (fase 2)
//4. Pintar las letras falladas
//5. Pintar el muñeco
function App() {
  //Estados
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
      .then((response) => response.json())
      .then((responseWord) => {
        setWord(responseWord.body.Word);
        setIsLoading(false);
      });
  }, []);

  const handleLastLetter = (lastLetterValue) => {
    // const lastLetterValue = e.target.value;
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
        <Loading loading={isLoading} />
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <section>
                <SolutionLetters word={word} userLetters={userLetters} />
                <ErrorLetters word={word} userLetters={userLetters} />
                <Form
                  lastLetter={lastLetter}
                  handleLastLetter={handleLastLetter}
                />
              </section>
            </Route>
            <Route exact path="/instructions">
              <Instructions />
            </Route>
            <Route exact path="/options">
              <Options />
            </Route>
          </Switch>
          <Dummy word={word} userLetters={userLetters} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
