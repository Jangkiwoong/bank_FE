import { Routes, Route } from 'react-router-dom';
import { PATH_URL } from '../constants/constants';
import Home from '../page/Home';

const MainRouter = () => {
    return(
        <Routes>
            <Route>
            <Route path={PATH_URL.HOME} element={<Home />} />
            </Route>
        </Routes>
    );
};
export default MainRouter;