import { InputHTMLAttributes } from 'react';
import styles from "../../common/css/inputs.module.css";
const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} type="text" {...props} />;
};
export default TextInput;
