import React, { useState, useEffect } from "react";
import "./SeatSelectorModal.css";

const SeatSelectorModal = ({
  isOpen,
  onClose,
  onSeatsSelected,
  selectedSeats,
}) => {
  const [currentSelectedSeats, setCurrentSelectedSeats] = useState(
    selectedSeats || []
  );
  const [errorMessage, setErrorMessage] = useState("");

  // Seat layout: each "row" has two sub-arrays (seat pairs), so 4 seats per row
  const seatLayout = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
    [
      [9, 10],
      [11, 12],
    ],
    [
      [13, 14],
      [15, 16],
    ],
    [
      [17, 18],
      [19, 20],
    ],
    [
      [21, 22],
      [23, 24],
    ],
    [
      [25, 26],
      [27, 28],
    ],
    [
      [29, 30],
      [31, 32],
    ],
    [
      [33, 34],
      [35, 36],
    ],
    [
      [37, 38],
      [39, 40],
    ],
    [
      [41, 42],
      [43, 44],
    ],
    [
      [45, 46],
      [47, 48],
    ],
  ];

  useEffect(() => {
    setCurrentSelectedSeats(selectedSeats || []);
  }, [selectedSeats]);

  const handleSeatClick = (seatNumber) => {
    // Limit 4 seats total
    if (
      currentSelectedSeats.length >= 4 &&
      !currentSelectedSeats.includes(seatNumber)
    ) {
      setErrorMessage("You can only select up to 4 seats");
      return;
    }

    if (currentSelectedSeats.includes(seatNumber)) {
      // Deselect seat
      setCurrentSelectedSeats(
        currentSelectedSeats.filter((seat) => seat !== seatNumber)
      );
      setErrorMessage("");
    } else {
      // Select seat
      setCurrentSelectedSeats([...currentSelectedSeats, seatNumber]);
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    onSeatsSelected(currentSelectedSeats);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <h2>Please Select Seat(s)</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <div className="legend-seat available"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="legend-seat selected"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="legend-seat unavailable"></div>
            <span>Unavailable</span>
          </div>
        </div>

        {/* Single-column seat grid with 4 seats per row */}
        <div className="seat-grid">
          {seatLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seatPair, pairIndex) => (
                <div key={pairIndex} className="seat-pair mx-auto">
                  {seatPair.map((seat) => (
                    <div
                      key={seat}
                      className={`seat ${
                        currentSelectedSeats.includes(seat) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <p>Selected seats: {currentSelectedSeats.join(", ") || "None"}</p>
          <div className="button-group">
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={currentSelectedSeats.length === 0}
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectorModal;
