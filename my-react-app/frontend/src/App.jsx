import './App.css'
// import AppRouter from './Router';
import { useTasks } from './hooks/useTasks.js';

const App = () => {
    const tasks = useTasks();

    console.log(tasks);

    return (
        <h1>Hello tasks</h1>
    );
}

export default App;