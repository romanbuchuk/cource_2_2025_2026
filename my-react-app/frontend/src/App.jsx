import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Button/index.js';
import './App.css'

const App = () => {
    const [count, setCount] = useState(0);

    //   let count = 0;
    //
    //   function setCount() {
    //       count = count + 1;
    //
    //       console.log('------> count <-------', count);
    //   }

    const handleClick = useCallback(() => {
        setCount((count) => count + 1)
    }, []);

    //// OK
    // const Pimpa = () => count >= 5 ? null : (
    //     <Button>
    //         Pimpochka
    //     </Button>
    // );
    //
    // // OK
    // const pimpa = count >= 5 ? null : (
    //     <Button>
    //         Pimpochka
    //     </Button>
    // );

    // // Bad
    // const Pimpa =  count >= 5 ? null : (
    //     <Button>
    //         Pimpochka
    //     </Button>
    // );

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button onClick={handleClick}>
                    count is {count}
                </Button>
                {/* {pimpa} */}
                {count < 5 && (
                    <Button>
                        Pimpochka
                    </Button>
                )}
                {count >= 5 && (
                    <Button>
                        Pimpochka 2
                    </Button>
                )}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App;