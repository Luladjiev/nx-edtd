import { Route, Routes } from 'react-router-dom';

export function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<div>hello world</div>} />
      <Route path={'/list'} element={<div>List</div>} />
    </Routes>
  );
}
