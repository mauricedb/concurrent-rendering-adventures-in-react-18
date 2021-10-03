import useSWR from 'swr';
import type { Movie } from '../../types';
import { LabelInput } from './LabelInput';
import { LabelTextarea } from './LabelTextarea';

interface Props {
  movieId: number;
}

export function MovieDetails({ movieId }: Props) {
  const { data } = useSWR<Movie, Error>(
    `${process.env.REACT_APP_API_BASE}/top-rated-movies/${movieId}?sleep=500`
  );
  const movie = data!;

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
