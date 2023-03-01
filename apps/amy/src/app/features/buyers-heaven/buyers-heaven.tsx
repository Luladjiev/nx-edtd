import {Link} from 'react-router-dom';

import styles from './buyers-heaven.module.scss';
import {Routing} from './routing';

/* eslint-disable-next-line */
export interface BuyersHeavenProps {}

export function BuyersHeaven(props: BuyersHeavenProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BuyersHeaven!</h1>

      <ul>
        <li>
          <Link to="/buyers-heaven">buyers-heaven root</Link>
        </li>
      </ul>

      <Routing />
    </div>
  );
}

export default BuyersHeaven;
