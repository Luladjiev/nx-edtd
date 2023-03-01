import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './core/pages/home-page/home-page';
import { lazy } from 'react';

const AssortmentIntelligence = lazy(
  () => import('./features/assortment-intelligence/assortment-intelligence')
);
const BuyersHeaven = lazy(
  () => import('./features/buyers-heaven/buyers-heaven')
);

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/assortment-intelligence/*"
        element={<AssortmentIntelligence />}
      />
      <Route path="/buyers-heaven/*" element={<BuyersHeaven />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
