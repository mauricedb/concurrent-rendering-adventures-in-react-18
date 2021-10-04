import useSWR from 'swr';
import type { Account } from '../../types';
import { Loading } from '../Loading';
import { LabelInput } from './LabelInput';
interface Props {
  userId: number;
}
export function AccountDetails({ userId }: Props) {
  const { data: account, error } = useSWR<Account, Error>(
    `${process.env.REACT_APP_API_BASE}/accounts/${userId}?sleep=1000`
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!account) {
    return <Loading />;
  }

  return (
    <div className="row">
      <LabelInput label="Firstname" value={account.firstname} readOnly />
      <LabelInput label="Surname" value={account.surname} readOnly />
      <LabelInput label="Email address" value={account.email} readOnly />
    </div>
  );
}
