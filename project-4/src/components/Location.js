const Location = (props) => {
  const { item } = props;

  return (
    <div className="sightseeing">
      <img src={props.img} alt={props.alt} />
      <did>
        <div className="address-place">
          <img src={props.locationIcon} alt="" />
          <p className="address-name">{props.location}</p>
          <a
            className="address-web"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {props.anchor}
          </a>
        </div>
        <div className="description">
          <h1 className="description-title">{props.title}</h1>
          <p className="description-period">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description-text">{props.description}</p>
        </div>
      </did>
    </div>
  );
};

export default Location;
