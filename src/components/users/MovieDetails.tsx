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
