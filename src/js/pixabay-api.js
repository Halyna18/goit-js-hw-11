export default function searchImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45274072-c4fd7d8686b7f4ab052de4717';

  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `${error}`,
      });
    });
}
