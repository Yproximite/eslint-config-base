const doubleArrayValues = (arr) => arr.map(v => v * 2);

(() => {
  const set = new Set();
  const map = new Map();

  console.log(doubleArrayValues([1, 2, 3]));
  console.log(global.location.href);

  const promise = new Promise(resolve => {
    return fetch('https://example.com')
      .then(response => {
        if (!response.ok) {
          return;
        }

        return response.json();
      })
      .then(json => resolve(json));
  });

  promise.then(json => {
    set.add('foo');
    set.add('bar');
    map.set('first_value', 123);
    map.set('json', json);
  });
})();
