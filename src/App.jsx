import Card from "./components/Card.jsx";
import cardsData from "./data/cardsData.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="page-title">All the cards are here.</h1>
      <div className="card-grid">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
