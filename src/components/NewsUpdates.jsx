import "./NewsUpdates.css";
import TrainOnTrack from "./assets/TrainOnTrack.png"; // Importing local images
import ExpressService from "./assets/ExpressService.png";

const newsData = [
  {
    id: 1,
    image: TrainOnTrack,
    title: "Enhanced Safety Measures Implementation",
    description:
      "New safety protocols and equipment installations across all major stations.",
    date: "02 Jan, 2025",
    readTime: "1 min read",
  },
  {
    id: 2,
    image: ExpressService,
    title: "New Express Service Launch on Lagos-Ibadan Route",
    description:
      "Starting next month, enjoy faster journey times with our new express service...",
    date: "02 Jan, 2025",
    readTime: "1 min read",
  },
  {
    id: 3,
    image: ExpressService,
    title: "New Express Service Launch on Lagos-Ibadan Route",
    description:
      "Starting next month, enjoy faster journey times with our new express service...",
    date: "02 Jan, 2025",
    readTime: "1 min read",
  },
];

const NewsUpdates = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>News & Updates</h2>
        <p>
          Experience comfort in our modern air-conditioned trains with spacious
          seating
        </p>
      </div>

      <div className="news-container">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <div className="news-meta">
                <span>📅 {news.date}</span>
                <span>⏳ {news.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsUpdates;
