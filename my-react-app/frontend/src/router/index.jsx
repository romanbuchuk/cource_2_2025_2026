import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';
import Layout from './Layout.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Route path="/" element={<Layout/>}>
                <Route path={}>

                </Route>
            </Route>
        </Router>
    )
}