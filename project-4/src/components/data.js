import Fuji from "../images/mountain.png";
import River from "../images/river.png";
import Sydney from "../images/sydney.png";
import location from "../images/location-icon.png";

const data = [
  {
    id: 1,
    locationIcon: location,
    title: "Mountain Fuji",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    googleMapsUrl: "https://www.google.com/maps",
    location: "JAPAN",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img: Fuji,
    anchor: "View on Google Maps",
    alt: "The Fuji Mountain",
  },
  {
    id: 2,
    locationIcon: location,
    title: "Sydney Opera House",
    startDate: "27 May, 2021",
    endDate: "8 Jun, 2021",
    googleMapsUrl: "https://www.google.com/maps",
    location: "AUSTRALIA",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    img: Sydney,
    anchor: "View on Google Maps",
    alt: "The Sydney Opera House",
  },
  {
    id: 3,
    locationIcon: location,
    title: "Geirangerfjord",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    googleMapsUrl: "https://www.google.com/maps",
    location: "NORWAY",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    img: River,
    anchor: "View on Google Maps",
    alt: "The Geirangerfjord",
  },
];

export default data;
