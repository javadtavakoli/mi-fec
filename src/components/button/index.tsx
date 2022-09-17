import type { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  buttonType?: 'primary' | 'info' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ buttonType, ...props }: ButtonProps) => {
  let className = styles.button;

  if (buttonType) className += ` ${styles[buttonType]}`;

  return <button className={className} {...props} />;
};
export default Button;
