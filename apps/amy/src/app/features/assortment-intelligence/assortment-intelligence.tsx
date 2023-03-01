import {Link} from 'react-router-dom';

import styles from './assortment-intelligence.module.scss';
import {Routing} from './routing'; /* eslint-disable-next-line */

/* eslint-disable-next-line */
export interface AssortmentIntelligenceProps {}

export function AssortmentIntelligence(props: AssortmentIntelligenceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AssortmentIntelligence!</h1>

      <ul>
        <li>
          <Link to="/assortment-intelligence">
            assortment-intelligence root
          </Link>
        </li>
      </ul>
      <Routing />
    </div>
  );
}

export default AssortmentIntelligence;
