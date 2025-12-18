import { ThemeProvider } from 'styled-components';
import { useFetchData } from './hooks/useFetchData.js';

import TaskList from './pages/TaskList/TaskList.jsx';
import Button from './components/Button/Button.jsx';
import { useCallback, useState } from 'react';

import { lightTheme, darkTheme } from './constants/themeValues.js';

import * as SC from './App.styled.ts.js';
import { GlobalStyles } from './App.styled.ts.js';

const App = () => {
    const { data: tasks/*, error*/, fetchData } = useFetchData();

    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    // setCurrentTheme((currentThemeValue) => {
    //     const { name } = currentThemeValue;
    //
    //     return name === 'dark' ? lightTheme : darkTheme;
    // });
    const handleThemeToggle = useCallback(() => {
        setCurrentTheme(({ name }) => {
            return name === 'dark' ? lightTheme : darkTheme;
        });
    }, []);

    const refetchData = useCallback(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <GlobalStyles/>
            <h1>Hello tasks</h1>
            <ThemeProvider theme={currentTheme}>
                <Button onClick={handleThemeToggle}>Change Theme</Button>
                <Button onClick={refetchData}>Refetch</Button>
                <TaskList tasks={tasks}/>
            </ThemeProvider>
        </div>
    );
}

export default App;