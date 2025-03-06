import { useState } from "react";
import "./FindTrain.css"

const FindTrain = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const findTrain = () => {
    if (!origin || !destination || !date) {
      alert("Please select all fields!");
      return;
    }
    alert(`Searching trains from ${origin} to ${destination} on ${date}`);
  };

  return (
    <div className="train-search-container">
      <div className="input-group">
        <label>From</label>
        <select
          className="NAJ"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="">Select Originating Station</option>
          <option value="oni">Onipanu</option>
          <option value="mus">Mushin</option>
          <option value="iga">Igando</option>
        </select>
      </div>

      <div className="input-group">
        <label>To</label>
        <select
          className="Sedn"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination Station</option>
          <option value="ig">Igando</option>
          <option value="afa">Afanda</option>
          <option value="oni">Onipanu</option>
        </select>
      </div>

      <div className="input-group">
        <label>Date</label>
        <div className="date-input">
          <input
            className="Nba"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="calendar-icon">📅</span>
        </div>
      </div>

      <button className="find-train-btn" onClick={findTrain}>
        Find My Train
      </button>
    </div>
  );
};

export default FindTrain;
