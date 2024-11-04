import { Routes, Route } from 'react-router-dom';
import { PATH_URL } from '../constants/constants';
import Home from '../page/Home';
import TestFlex from '../page/TestFlex'

const MainRouter = () => {
    return(
        <Routes>
            <Route>
            <Route path={PATH_URL.HOME} element={<Home />} />
            <Route path={PATH_URL.TEST} element={<TestFlex />} />
            </Route>
        </Routes>
    );
};
export default MainRouter;