import styles from './list-page.module.scss';
import Grid from "../../components/grid/grid";

/* eslint-disable-next-line */
export interface ListPageProps {
}

export function ListPage(props: ListPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ListPage!</h1>

      <Grid/>
    </div>
  );
}

export default ListPage;
