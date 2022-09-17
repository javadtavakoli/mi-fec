import styles from './layout.module.css';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
type AppLayoutProps = {
  children: ReactNode;
  headerExtra?: ReactNode;
};
const PagesLayout = (props: AppLayoutProps) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/videos">Videos</Link> {/** TODO: Add navabar */} {props.headerExtra}
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>VManager Demo v0.0.1</footer>
    </>
  );
};
export default PagesLayout;
