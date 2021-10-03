import { unstable_useOpaqueIdentifier } from 'react';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

export function LabelInput({ label, value, ...rest }: Props) {
  const id = unstable_useOpaqueIdentifier();

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className="form-control" value={value} {...rest} />
    </div>
  );
}
