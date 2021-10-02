import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

export function LabelInput({ label, value, ...rest }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" value={value} {...rest} />
    </div>
  );
}
