import "./App.css";

export const Item = ({ name, description, price, img, addDonut }) => {
  //  console.log(img);
  return (
    <div>
      <div className="card-item">
        <div className="card-details">
          <center>
            <img
              src={process.env.PUBLIC_URL + img}
              alt={name}
              className="white-shadow"
              height="150px"
              width="180px"
            ></img>
          </center>
          <p className="title">{name}</p>
          <p className="description">{description}</p>
          <p className="description">${price}</p>
          <button onClick={addDonut} className="white-shadow">
            ADD ME!
          </button>
        </div>
      </div>
    </div>
  );
};
