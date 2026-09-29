import {useState} from 'react';

const books = [
  {
    img: '/1.svg',
    title: 'Чистый код',
    rating: '4.8',
    desc: 'Книга о том, как писать понятный и поддерживаемый код.',
    price: '1200 руб.',
    caption: 'Хит продаж для программистов',
  },
  {
    img: '/2.svg',
    title: 'Мастер и Маргарита',
    rating: '4.9',
    desc: 'Роман Михаила Булгакова о визите дьявола в Москву 1930-х годов.',
    price: '650 руб.',
    caption: 'Классика русской литературы',
  },
  {
    img: '/3.svg',
    title: '1984',
    rating: '4.7',
    desc: 'Антиутопия Джорджа Оруэлла о тоталитарном обществе.',
    price: '500 руб.',
    caption: 'Новинка недели',
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  function show(n) {
    if (n >= books.length) {
      n = 0;
    }
    if (n < 0) {
      n = books.length - 1;
    }
    setCurrent(n);
  }

  const book = books[current];

  return (
    <div className="slider">
      <div className="card" data-testid="book-slide">
        <img src={book.img} alt={book.title} />
        <div className="info">
          <h2>{book.title}</h2>
          <p className="rating">Рейтинг: {book.rating}</p>
          <p>{book.desc}</p>
          <p className="price">{book.price}</p>
        </div>
      </div>

      <p className="caption">{book.caption}</p>

      <div className="controls">
        <button data-testid="slide-prev" onClick={() => show(current - 1)}>
          Назад
        </button>
        <span className="counter" data-testid="slide-indicator">
          {current + 1} / {books.length}
        </span>
        <button data-testid="slide-next" onClick={() => show(current + 1)}>
          Далее
        </button>
      </div>

      <div className="dots">
        {books.map((_, i) => (
          <span
            key={i}
            data-testid="slide-dot"
            className={i === current ? 'dot active' : 'dot'}
            onClick={() => show(i)}
          />
        ))}
      </div>
    </div>
  );
}
