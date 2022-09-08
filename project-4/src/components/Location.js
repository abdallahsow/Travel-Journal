const Location = (props) => {
  const { item } = props;

  return (
    <div className="sightseeing">
      <img src={item.img} alt={item.alt} />
      <did>
        <div className="address-place">
          <img src={item.locationIcon} alt="" />
          <p className="address-name">{item.location}</p>
          <a
            className="address-web"
            href={item.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {item.anchor}
          </a>
        </div>
        <div className="description">
          <h1 className="description-title">{item.title}</h1>
          <p className="description-period">
            {item.startDate} - {item.endDate}
          </p>
          <p className="description-text">{item.description}</p>
        </div>
      </did>
    </div>
  );
};

export default Location;
