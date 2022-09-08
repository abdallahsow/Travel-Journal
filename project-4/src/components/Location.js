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
        <div>
          <h1>{item.title}</h1>
          <p>
            {item.startDate} - {item.endDate}
          </p>
          <p>{item.description}</p>
        </div>
      </did>
    </div>
  );
};

export default Location;
