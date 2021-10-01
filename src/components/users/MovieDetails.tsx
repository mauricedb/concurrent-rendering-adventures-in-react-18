import useSWR from 'swr';
import type { Account, Movie } from '../../types';
import Loading from '../Loading';

interface Props {
  movieId: number;
}
export function MovieDetails({ movieId }: Props) {
  const { data: movie, error } = useSWR<Movie, Error>(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movieId}?sleep=500`
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className="row">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" value={movie.title} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Release date</label>
        <input className="form-control" value={movie.release_date} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Overview</label>
        <textarea
          className="form-control"
          rows={5}
          value={movie.overview}
          readOnly
        />
      </div>
    </div>
  );
}
