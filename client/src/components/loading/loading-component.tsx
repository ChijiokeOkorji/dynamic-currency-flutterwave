import appLogo from '../../assets/logo.png';

import styles from './loading-style.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img className={styles.logo} src={appLogo} alt="logo" />
    </div>
  );
};

export { Loading };
