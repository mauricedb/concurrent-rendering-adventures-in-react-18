import { useState, useTransition } from 'react';
import useSWR from 'swr';
import type { Account } from '../../types';
import { UserDetails } from './UserDetails';

export function UserList() {
  const [isPending, startTransition] = useTransition();
  const [selectedUser, setSelectedUser] = useState<Account | null>(null);
  const [selectedUserId, setSelectedUserId] = useState(NaN);
  const { data } = useSWR<Account[], Error>(
    `${process.env.REACT_APP_API_BASE}/accounts`
  );

  return (
    <div className="row">
      <h2 className="text-center mt-5">Users</h2>

      <div className="col-3 g-2">
        <ul className="list-group">
          {data?.map((user) => (
            <li
              key={user.id}
              className={
                'list-group-item' + (user === selectedUser ? ' active' : '')
              }
            >
              <button
                className="btn shadow-none"
                onClick={() => {
                  setSelectedUserId(user.id);
                  startTransition(() => setSelectedUser(user));
                }}
              >
                {isPending && selectedUserId === user.id && '⏳ '}
                {user.firstname}
                &nbsp;
                {user.surname}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6">
        {selectedUser && (
          <UserDetails
            key={selectedUser.id}
            userId={selectedUser.id}
            movieId={selectedUser.favorite_movie}
            isPending={isPending}
          />
        )}
      </div>
    </div>
  );
}
