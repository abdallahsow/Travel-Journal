const Location = (props) => {
  const { item } = props;

  return (
    <div className="sightseeing">
      <img src={item.img} alt={item.alt} />
      <div className="address-place">
        <img src={item.locationIcon} alt="" />
        <p className="address-name">{item.location}</p>
        <a
          className="adress-web"
          href={item.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {item.anchor}
        </a>
      </div>
    </div>
  );
};

export default Location;
