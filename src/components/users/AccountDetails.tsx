import useSWR from 'swr';
import type { Account } from '../../types';
import { LabelInput } from './LabelInput';

interface Props {
  userId: number;
}

export function AccountDetails({ userId }: Props) {
  const { data } = useSWR<Account, Error>(
    `${process.env.REACT_APP_API_BASE}/accounts/${userId}?sleep=1000`
  );

  const account = data!;

  return (
    <div className="row">
      <LabelInput label="Firstname" value={account.firstname} readOnly />
      <LabelInput label="Surname" value={account.surname} readOnly />
      <LabelInput label="Email address" value={account.email} readOnly />
    </div>
  );
}
