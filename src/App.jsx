import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);

  const sortAlphabetically = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));

    setGoods(sorted);
  };

  const sortByLength = () => {
    const sorted = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sorted);
  };

  const reverseGoods = () => {
    setGoods([...goods].reverse());
  };

  const resetGoods = () => {
    setGoods(goodsFromServer);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          onClick={sortAlphabetically}
          className="button is-info is-light"
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={sortByLength}
          className="button is-success is-light"
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={reverseGoods}
          className="button is-warning is-light"
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={resetGoods}
          className="button is-danger is-light"
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
