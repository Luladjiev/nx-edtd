import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/list-page/list-page';
import Chart from './components/chart/chart';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<Chart />} />
      <Route path={'/list'} element={<ListPage />} />
      <Route path={'*'} element={<div>Oops</div>} />
    </Routes>
  );
}
