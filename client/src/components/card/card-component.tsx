import { useCallback, useState } from 'react';
import axios from 'axios';

import { Button } from '../button';
import { Loading } from '../loading';
import { formatCurrency } from '../../utilities/formatCurrency';

import styles from './card-style.module.scss';

interface CardProps {
  title: string;
  basePrice: number;
  currency: {
    currency: string,
    htmlSymbol: string,
  };
  rate: number;
}

const Card = ({ title, basePrice, currency, rate }: CardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await axios.post('/api/checkout', {
        amount: basePrice * rate,
        currency: currency.currency
      });

      window.location.href = response.data.link;
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  }, [currency, rate]);

  return (
    <div className={styles.card}>
      <div className={styles.image}>IMAGE</div>
      
      <div className={styles.bodyArea}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price} dangerouslySetInnerHTML={{__html: `${currency.htmlSymbol}${formatCurrency(basePrice * rate)}`}} />
        <Button label='Pay Now' onClick={handleClick} />

        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export { Card };
