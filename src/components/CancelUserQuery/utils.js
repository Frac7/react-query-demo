export const endpoint = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const promise = fetch('https://reqres.in/api/users/1?delay=5', {
    signal,
  }).then(res => res.json());
  promise.cancel = () => controller.abort();

  return promise;
};
