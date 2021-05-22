export const put = name =>
  fetch('https://reqres.in/api/users/1?delay=3', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: name,
    }),
  }).then(res => res.json());
