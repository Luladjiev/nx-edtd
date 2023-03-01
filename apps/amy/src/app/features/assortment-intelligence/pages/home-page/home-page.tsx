import styles from './home-page.module.scss';
import Chart from "../../components/chart/chart";

/* eslint-disable-next-line */
export interface HomePageProps {
}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomePage!</h1>

      <Chart/>
    </div>
  );
}

export default HomePage;
