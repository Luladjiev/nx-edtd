import styles from './top-bar.module.scss';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TopBar!</h1>
    </div>
  );
}

export default TopBar;
