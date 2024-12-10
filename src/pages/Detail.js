import React from "react";
import { useParams } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Card Title 1",
    description:
      "This is a detailed description of Card 1. It contains additional information about this card.",
    image:
      "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  },
  {
    id: 2,
    title: "Card Title 2",
    description:
      "This is a detailed description of Card 2. It contains additional information about this card.",
    image:
      "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  },
  {
    id: 3,
    title: "Card Title 3",
    description:
      "This is a detailed description of Card 3. It contains additional information about this card.",
    image:
      "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  },
];

function Detail() {
  const { id } = useParams();
  const card = cardData.find((c) => c.id === parseInt(id));

  if (!card) {
    return (
      <div className="container mt-4">
        <h1>Card Not Found</h1>
        <p>Sorry, the card you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center">
      <div className="card" style={{ width: "800px" }}>
        <img
          src={card.image}
          className="card-img-top"
          alt={card.title}
          style={{
            height: "500px", // Set height
            objectFit: "cover", // Crop or scale image
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    </div>
    <br/>
    </>
  );
}

export default Detail;
