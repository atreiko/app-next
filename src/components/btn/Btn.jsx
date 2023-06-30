import Link from 'next/link';
import styles from './btn.module.css';

const Btn = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Btn;
