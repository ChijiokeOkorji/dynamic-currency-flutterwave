import { useLayoutEffect, useState } from 'react';
import axios from 'axios';

import { Dropdown } from '../dropdown';
import { Card } from '../card';
import { Loading } from '../loading';

import styles from './app-style.module.scss';

const currencyArray = [
  {
    currency: 'EUR',
    htmlSymbol: '&#8364;',// this is the html character code for the currency symbol (https://www.toptal.com/designers/htmlarrows/currency/)
  },
  {
    currency: 'GBP',
    htmlSymbol: '&#163;',
  },
  {
    currency: 'NGN',
    htmlSymbol: '&#8358;',// You could also just pass a character (eg. 'N' for Naira)
  },
  {
    currency: 'USD',
    htmlSymbol: '&#36;',
  }
];

const BASE_CURRENCY = 'NGN';
const BASE_INDEX = currencyArray.findIndex((item) => item.currency === BASE_CURRENCY);

const App = () => {
  const [value, setValue] = useState(BASE_INDEX);
  const [rate, setRate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    async function getRate() {
      try {
        setIsLoading(true);

        const response = await axios.post('/api/rate', {
          source_currency: currencyArray[value].currency,
          destination_currency: BASE_CURRENCY
        });

        setRate(response.data.rate);
      } catch (error) {
        console.log(error);

        setValue(BASE_INDEX);
        setRate(1);
      } finally {
        setIsLoading(false);
      }
    }

    getRate();
  }, [value]);

  return (
    <div className={styles.child}>
      <Dropdown data={currencyArray} value={value} onSelect={(item) => setValue(item)} />
      <Card title='Store Item' basePrice={5000} currency={currencyArray[value]} rate={rate} />

      {isLoading && <Loading />}
    </div>
  );
};

export { App };
