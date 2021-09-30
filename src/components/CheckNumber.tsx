import { isPrime } from '../utils/isPrime';

interface Props {
  value: number;
}
export function CheckNumber({ value }: Props) {
  return (
    <div>
      {value.toLocaleString()}
      {isPrime(value) ? '✔️' : '❌'}
    </div>
  );
}
