import { Suspense } from 'react';
import { Loading } from '../Loading';
import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';

interface Props {
  userId: number;
  movieId: number;
}

export function UserDetails({ userId, movieId }: Props) {
  return (
    <div>
      <h4 className="text-center mt-5">User details</h4>
      <Suspense fallback={<Loading />}>
        <AccountDetails userId={userId} />
      </Suspense>
      <h4 className="text-center mt-5">Favorite movie</h4>
      <Suspense fallback={<Loading />}>
        <MovieDetails movieId={movieId} />
      </Suspense>
    </div>
  );
}
