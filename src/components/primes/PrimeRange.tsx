import { useDeferredValue, useEffect, useState } from 'react';
import { roundUp } from '../../utils/roundUp';
import classes from './PrimeRange.module.css';

const selectItems = [100, 1_000, 10_000, 100_000, 1_000_000];

interface Props {
  defaultValue: number;
  onChange: (value: number) => void;
}

export function PrimeRange({ defaultValue, onChange }: Props) {
  const [maxPrimeRange, setMaxPrimeRange] = useState(defaultValue);

  const deferredMaxPrimeRange = useDeferredValue(maxPrimeRange);
  useEffect(() => {
    onChange(deferredMaxPrimeRange);
  }, [deferredMaxPrimeRange, onChange]);

  const [maxPrime, setMaxPrime] = useState(() => {
    for (let i = 0; i < selectItems.length; i++) {
      if (selectItems[i] > defaultValue) {
        return roundUp(defaultValue, selectItems[i]);
      }
    }
  });

  return (
    <div className="row input-group g-2">
      <input
        className="form-control shadow-none"
        type="range"
        value={maxPrimeRange}
        max={maxPrime}
        onChange={(e) => {
          setMaxPrimeRange(+e.target.value);
        }}
      />
      <select
        className={`form-select shadow-none ${classes.formSelect}`}
        value={maxPrime}
        onChange={(e) => {
          setMaxPrime(+e.target.value);
          setMaxPrimeRange(+e.target.value / 4);
        }}
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
