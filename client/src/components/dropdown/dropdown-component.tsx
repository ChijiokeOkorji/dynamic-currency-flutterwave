import { useCallback, useMemo, useState } from 'react';

import styles from './dropdown-style.module.scss';

interface DropdownProps {
  data: {
    currency: string;
    htmlSymbol: string;
  }[];
  value: number;
  onSelect: (item: number) => void;
}

type handleSelect = (item: number) => void;

export const Dropdown = ({ data, value, onSelect }: DropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const displayValue = useMemo(() => {
    return data[value].currency;
  }, [data, value]);

  const handleClick = useCallback(() => {
    setShowDropdown(prev => !prev);
  }, []);

  const handleSelect: handleSelect = useCallback((item) => {
    onSelect(item);

    setShowDropdown(false);
  }, [onSelect]);

  return (
    <div className={`${showDropdown ? styles.focus : ''} ${styles.menu}`} onClick={handleClick}>
      <div className={styles.div}>{displayValue}</div>

      <div className={styles.icon}>
        <i className={`fa-solid ${showDropdown ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
      </div>

      {showDropdown &&
        <div className={styles.dropdown}>
          <div className={styles.entriesArea}>
            {data.map((item, index) => (<div className={styles.entry} key={item.currency} onClick={(e) => {e.stopPropagation(); handleSelect(index)}}>{item.currency}</div>))}
          </div>
        </div>
      }
    </div>
  );
};
