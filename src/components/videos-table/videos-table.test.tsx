import { VideosTable } from '.';
import { ProcessedVideo } from '../../common/interfaces';
import { render } from '../../common/utils/test';

test('renders videos', () => {
  const processedVideos: ProcessedVideo[] = [
    {
      author: 'Christopher Nolan',
      categories: ['Sci-fi'],
      highestQualityFormat: {
        formatName: 'best',
        res: '1080p',
        size: 1000,
      },
      id: 1,
      name: 'Interstellar',
      releaseDate: '2014-11-05',
    },
  ];
  const { getByText } = render(<VideosTable videos={processedVideos} deleteVideo={() => {}} />);
  expect(getByText('Christopher Nolan')).toBeInTheDocument();
  expect(getByText('Sci-fi')).toBeInTheDocument();
  expect(getByText('best 1080p')).toBeInTheDocument();
  expect(getByText('Interstellar')).toBeInTheDocument();
  expect(getByText('2014-11-05')).toBeInTheDocument();
});
