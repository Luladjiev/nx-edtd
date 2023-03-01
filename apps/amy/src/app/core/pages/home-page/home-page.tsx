import styles from './home-page.module.scss';
import Main from '../../components/main/main';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomePage!</h1>

      <Main />
    </div>
  );
}

export default HomePage;
