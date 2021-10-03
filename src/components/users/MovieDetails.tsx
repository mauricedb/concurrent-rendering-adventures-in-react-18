import useSWR from 'swr';
import type { Movie } from '../../types';
import Loading from '../Loading';
import { LabelInput } from './LabelInput';
import { LabelTextarea } from './LabelTextarea';

interface Props {
  movieId: number;
}
export function MovieDetails({ movieId }: Props) {
  const { data: movie, error } = useSWR<Movie, Error>(
    `${process.env.REACT_APP_API_BASE}/top-rated-movies/${movieId}?sleep=500`
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className="row">
      <LabelInput label="Title" value={movie.title} readOnly />
      <LabelInput label="Release date" value={movie.release_date} readOnly />
      <LabelTextarea
        label="Overview"
        value={movie.overview}
        readOnly
        rows={5}
      />
    </div>
  );
}
