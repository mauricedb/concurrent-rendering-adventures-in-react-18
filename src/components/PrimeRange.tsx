import { useState } from 'react';
import { roundUp } from '../utils/roundUp';

const selectItems = [100, 1_000, 10_000, 100_000, 1_000_000];

interface Props {
  defaultValue: number;
  onChange: (value: number) => void;
}

export function PrimeRange({ defaultValue, onChange }: Props) {
  const [maxPrimeRange, setMaxPrimeRange] = useState(defaultValue);
  const [maxPrime, setMaxPrime] = useState(() => {
    for (let i = 0; i < selectItems.length; i++) {
      if (selectItems[i] > defaultValue) {
        return roundUp(defaultValue, selectItems[i]);
      }
    }
  });

  return (
    <div>
      <input
        type="range"
        value={maxPrimeRange}
        max={maxPrime}
        onChange={(e) => {
          setMaxPrimeRange(+e.target.value);
          onChange(+e.target.value);
        }}
        style={{ width: '89%' }}
      />
      <select
        value={maxPrime}
        onChange={(e) => {
          setMaxPrime(+e.target.value);
          setMaxPrimeRange(+e.target.value / 4);
          onChange(+e.target.value / 4);
        }}
        style={{ width: '10%' }}
      >
        {selectItems.map((v) => (
          <option key={v} value={v}>
            {v.toLocaleString()}
          </option>
        ))}
      </select>
    </div>
  );
}
