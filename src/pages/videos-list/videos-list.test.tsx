import { act } from 'react-dom/test-utils';
import VideosListPage from '../videos-list';
import { render, waitFor, screen, within, fireEvent } from '../../common/utils/test';
import { store } from '../../store';

test('Delete the videos', async () => {
  const { container } = render(<VideosListPage />);
  const tbody = container.getElementsByTagName('tbody')[0];
  await waitFor(() => expect(tbody.childNodes.length).toBeGreaterThan(0));
  const row = tbody.querySelectorAll('tr')[0];
  await waitFor(() => expect(store.getState().authors.authors.length > 0).toBeTruthy());
  const deleteButton = await within(row).findByText('Delete');
  await act(() => {
    fireEvent.click(deleteButton);
  });
  await waitFor(() => expect(deleteButton).not.toBeInTheDocument());
});
