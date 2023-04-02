import styles from './button-style.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'contained' | 'outlined' | 'text';
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({ className, type = 'contained', label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${className ? `${className} ` : ''}${styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.label}>{label.toUpperCase()}</span>
    </button>
  );
};
