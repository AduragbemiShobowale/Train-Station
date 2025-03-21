import React, { useState, useEffect } from "react";
import "./SeatSelectorModal.css";
import { SEAT_CONFIG } from "../seatConfig";

const SeatSelectorModal = ({
  isOpen,
  onClose,
  onSeatsSelected,
  selectedSeats,
  className,
  coachName,
  trainId,
}) => {
  const [currentSelectedSeats, setCurrentSelectedSeats] = useState(
    selectedSeats || []
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [reservedSeats, setReservedSeats] = useState([]);

  // Get seat configuration based on class and coach
  const getClassConfig = () => SEAT_CONFIG[className] || {};
  const getSeatsPerCoach = () => getClassConfig().seatsPerCoach || 48;

  // Generate seat layout dynamically
  const generateSeatLayout = (seatsPerCoach) => {
    const rows = [];
    for (let i = 0; i < seatsPerCoach; i += 4) {
      rows.push([
        [i + 1, i + 2],
        [i + 3, i + 4],
      ]);
    }
    return rows;
  };

  const seatLayout = generateSeatLayout(getSeatsPerCoach());

  useEffect(() => {
    setCurrentSelectedSeats(selectedSeats || []);
  }, [selectedSeats]);

  // Fetch reserved seats when the component mounts
  useEffect(() => {
    const fetchReservedSeats = async () => {
      try {
        const response = await fetch(`/api/v1/trains/${trainId}`);
        const trainData = await response.json();
        const classData = trainData.classes.find((c) => c.type === className);
        setReservedSeats(classData?.reservedSeatNumbers || []);
      } catch (error) {
        console.error("Error fetching reserved seats:", error);
      }
    };

    if (isOpen && trainId) {
      fetchReservedSeats();
    }
  }, [isOpen, trainId, className]);

  const handleSeatClick = (seatNumber) => {
    // Check if seat is reserved
    if (reservedSeats.includes(seatNumber)) {
      setErrorMessage("This seat is already reserved");
      return;
    }

    // Get maximum allowed seats per class
    const maxSeats =
      {
        "Standard Class": 4,
        "Business Class": 3,
        "First Class": 2,
      }[className] || 4;

    if (
      currentSelectedSeats.length >= maxSeats &&
      !currentSelectedSeats.includes(seatNumber)
    ) {
      setErrorMessage(`You can only select up to ${maxSeats} seats`);
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
          <h2>
            Please Select Seat(s) for {className} - Coach {coachName}
          </h2>
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
                      } ${
                        reservedSeats.includes(seat) ? "unavailable" : ""
                      } ${className.toLowerCase().replace(" ", "-")}`}
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
          <p>
            Selected seats for Coach {coachName}:{" "}
            {currentSelectedSeats.join(", ") || "None"}
          </p>
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
