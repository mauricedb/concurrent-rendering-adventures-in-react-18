import { useState } from 'react';
import { roundUp } from '../utils/roundUp';

const selectItems = [10, 100, 1_000, 10_000, 100_000, 1_000_000];

interface Props {
  defaultValue: number;
  onChange: (value: number) => void;
}

export function PrimeRange({ defaultValue, onChange }: Props) {
  const [maxPrime, setMaxPrime] = useState(defaultValue);
  const [maxSlider, setMaxSlider] = useState(() => {
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
        value={maxPrime}
        max={maxSlider}
        onChange={(e) => {
          setMaxPrime(+e.target.value);
          onChange(+e.target.value);
        }}
        style={{ width: '89%' }}
      />
      <select
        value={maxSlider}
        onChange={(e) => {
          setMaxSlider(+e.target.value);
          setMaxPrime(+e.target.value / 2);
          onChange(+e.target.value / 2);
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
