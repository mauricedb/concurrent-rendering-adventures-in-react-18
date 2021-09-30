import { useState } from 'react';
import { CheckNumber } from './CheckNumber';
import { PrimeRange } from './PrimeRange';

const defaultValue = 2500;

export function PrimeNumbers() {
  const [maxPrime, setMaxPrime] = useState(defaultValue);
  const values = new Array(maxPrime).fill(null);

  return (
    <div>
      <PrimeRange
        defaultValue={defaultValue}
        onChange={(value) => setMaxPrime(value)}
      />

      <div>
        {values
          .filter((_, index) => index < 10_000)
          .map((_, index) => {
            return <CheckNumber key={index} value={maxPrime - index} />;
          })}
      </div>
    </div>
  );
}
