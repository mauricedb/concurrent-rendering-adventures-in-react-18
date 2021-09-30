import { isPrime } from '../utils/isPrime';
import classes from './CheckNumber.module.css';

interface Props {
  value: number;
}

// '⏳'

export function CheckNumber({ value }: Props) {
  return (
    <div className="col">
      <div className={`card ${classes.CheckNumber}`}>
        <div className="card-body text-center">
          <div className="fs-5">{value.toLocaleString()}</div>
          <div className="fs-3">{isPrime(value) ? '✔️' : '❌'}</div>
        </div>
      </div>
    </div>
  );
}
