import useSWR from 'swr';
import type { Account } from '../../types';
import Loading from '../Loading';
interface Props {
  userId: number;
}
export function AccountDetails({ userId }: Props) {
  const { data: account, error } = useSWR<Account, Error>(
    `https://the-problem-solver-sample-data.azurewebsites.net/accounts/${userId}?sleep=1000`
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!account) {
    return <Loading />;
  }

  return (
    <div className="row">
      <div className="mb-3">
        <label className="form-label">Firstname</label>
        <input className="form-control" value={account.firstname} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Surname</label>
        <input className="form-control" value={account.surname} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input className="form-control" value={account.email} readOnly />
      </div>
    </div>
  );
}
