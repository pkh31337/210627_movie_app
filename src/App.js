function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src = {picture} />
    </div>;
}

const foodIlike = [
  {
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCUvEAsTUcAANUnd.jpg&f=1&nofb=1"
  },
  {
    name: "Samgiopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.blaud.co.kr%2Fuploads%2Ffw1604005%2F201909%2F4419185ba11a7cc2b1d5f54363f2b0eb.jpg&f=1&nofb=1"
  },
  {
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffoodmoa.co.kr%2Fdata%2Ffile%2Ffood%2F1401%2Ftvmz_BRT0046117_1_Ka73AVA5f5UAc.jpg&f=1&nofb=1"
  },
  {
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeeUNnlFVV7o%2Fmaxresdefault.jpg&f=1&nofb=1"
  }
];

function App() {
  return (
    <div className="App">
      {foodIlike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
