import "./Card.css";

/**
 * Reusable Card component.
 *
 * Props:
 *  - image:       URL of the card image
 *  - imageAlt:    alt text for the image (optional, falls back to title)
 *  - title:       heading shown below the image
 *  - description: short text shown under the title
 */
const Card = ({ image, imageAlt, title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img className="card-image" src={image} alt={imageAlt || title} />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
