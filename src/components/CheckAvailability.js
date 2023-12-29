import React, { useState } from 'react';
import '../styles/checkavailiability.css';
import MediaCard from './MediaCard';

const RoomAvailabilityCheck = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [availableRooms, setAvailableRooms] = useState(null);
  const [error, setError] = useState(null);

  const checkAvailability = async () => {
    const apiUrl = 'http://localhost:3000/rooms/check_availability';

    try {
      // Input validation: Check if startDate is before endDate
      if (startDate > endDate) {
        setError('End date must be after or equal to start date');
        return;
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start_date: startDate,
          end_date: endDate,
          capacity: parseInt(capacity, 10) || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setAvailableRooms(data.available_dates_per_room);
      setError(null); // Clear any previous errors on success
    } catch (error) {
      console.error('Error checking availability:', error);
      setError('Error checking availability. Please try again.'); // Provide user-friendly error message
    }
  };

  const handleIncrement = () => {
    setCapacity((prevCapacity) => {
      if (prevCapacity === '') {
        return 1;
      } if (prevCapacity + 1 <= 7) {
        return prevCapacity + 1;
      }
      return prevCapacity;
    });
  };

  const handleDecrement = () => {
    setCapacity((prevCapacity) => {
      if (prevCapacity === '') {
        return 1;
      } if (prevCapacity + 1 <= 7) {
        return prevCapacity + 1;
      }
      return prevCapacity;
    });
  };

  return (
    <div className="container">
      <div className="dates">
        <label className="startDate" htmlFor="startDate">
          Start Date:
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className="endDate" htmlFor="endDate">
          End Date:
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label className="capacity" htmlFor="capacity">
          Capacity:
          <div className="capacity-input">
            <input
              id="capacity"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
            <div className="button-container">
              <button className="plus" type="button" onClick={handleIncrement}>+</button>
              <span className="separator">/</span>
              <button className="minus" type="button" onClick={handleDecrement}>-</button>
            </div>
          </div>
        </label>
        <button type="button" onClick={checkAvailability}>
          Check Availability
        </button>
      </div>
      <div className="row">
        {error && <div className="error-message">{error}</div>}

        {availableRooms && (
          <div className="available-rooms-container">
            {Object.entries(availableRooms).map(([roomName, roomData]) => (
              <div key={roomName} className="col-md-6">
                <MediaCard
                  roomName={roomName}
                  description={`Available dates:\n${Array.isArray(roomData.available_dates) ? roomData.available_dates.map(({ date, price }) => `Date: ${date}, Price: ${price}`).join('\n') : 'N/A'}`}
                  imageUrl="https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg="
                />
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default RoomAvailabilityCheck;
