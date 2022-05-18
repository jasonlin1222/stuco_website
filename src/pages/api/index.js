const url = 'https://stuco-backendcms.herokuapp.com/api/discussion-pages';
export const readForum = () => fetch(url, { method: 'GET' }).then((response) => response.json());
export const createQuestion = (newQuestion) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQuestion),
  }).then((response) => response.json());
