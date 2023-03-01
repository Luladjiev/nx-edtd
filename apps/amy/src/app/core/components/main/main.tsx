import styles from './main.module.scss';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return <div className={styles['container']}>This is Main component</div>;
}

export default Main;
