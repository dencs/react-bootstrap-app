export default function Card(props) {
    return (
        <div className="card ">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text d-flex flex-column justify-content-between">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore quo impedit distinctio.
              </p>
              <a href="#" className="align-self-start btn btn-outline-primary">
                Get Started
                <i className="bi bi-arrow-right ms-4"></i>
              </a>
            </div>
          </div>
    );
}


function CardWithImg(props) {
  return(
    <div className="card text-bg-dark">
  <img src={props.imgUrl} className="card-img" alt={props.imgAlt} />
  <div className="card-img-overlay d-flex flex-column justify-content-between">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore quo impedit distinctio.</p>
    <a href="#" className="align-self-start btn btn-outline-light text-bg-primary">
                Get Started
                <i className="bi bi-arrow-right ms-4"></i>
              </a>
  </div>
</div>
  );
}

export {CardWithImg};