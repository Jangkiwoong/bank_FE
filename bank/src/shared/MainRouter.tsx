import { Routes, Route } from 'react-router-dom';
import { PATH_URL } from '../constants/constants';
import Home from '../page/Home';
import TestFlex from '../page/TestFlex'
import TestGrid from '../page/TestGrid';

const MainRouter = () => {
    return(
        <Routes>
            <Route>
            <Route path={PATH_URL.HOME} element={<Home />} />
            <Route path={PATH_URL.TESTFLEX} element={<TestFlex />} />
            <Route path={PATH_URL.TESTGRID} element={<TestGrid />} />
            </Route>
        </Routes>
    );
};
export default MainRouter;