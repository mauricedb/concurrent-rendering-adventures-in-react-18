import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
}

export function LabelTextarea({ label, value, ...rest }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea className="form-control" value={value} {...rest} />
    </div>
  );
}
