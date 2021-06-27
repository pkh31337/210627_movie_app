import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCUvEAsTUcAANUnd.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 2,
    name: "Samgiopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.blaud.co.kr%2Fuploads%2Ffw1604005%2F201909%2F4419185ba11a7cc2b1d5f54363f2b0eb.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffoodmoa.co.kr%2Fdata%2Ffile%2Ffood%2F1401%2Ftvmz_BRT0046117_1_Ka73AVA5f5UAc.jpg&f=1&nofb=1",
    rating: 3.2
  },
  {
    id: 4,
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeeUNnlFVV7o%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <img src = {picture} alt={name} />
    <h4>{rating} / 5.0</h4>
    </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
