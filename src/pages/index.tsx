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
        <div className={styles.links}>
          <Link to="/videos">Videos</Link>{' '}
          <nav className={styles.navbar}>
            <ul>
              <li className={styles.active}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        {props.headerExtra}
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>VManager Demo v0.0.1</footer>
    </>
  );
};
export default PagesLayout;
