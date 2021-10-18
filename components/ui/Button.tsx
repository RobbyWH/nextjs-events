import Link from 'next/link';
import styles from './Button.module.css';

interface Button {
  link: string;
  children: any;
}

const Button = (props: Button) => {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>
        {props.children}
      </a>
    </Link>
  )
}

export default Button;