import React, { useState } from 'react';
import '../styles/checkavailiability.css';

const RoomAvailabilityCheck = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [availableRooms, setAvailableRooms] = useState(null);

  const checkAvailability = async () => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    const apiUrl = 'http://localhost:3000/rooms/check_availability';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start_date: startDate,
          end_date: endDate,
          capacity: parseInt(capacity, 4),
        }),
      });

      const data = await response.json();
      setAvailableRooms(data.available_dates_per_room);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error checking availability:', error);
    }
  };

  return (
    <div className="container">
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
        <input
          id="capacity"
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </label>
      <button type="button" onClick={checkAvailability}>
        Check Availability
      </button>

      {availableRooms && (
        <div>
          <h3>Available Rooms:</h3>
          <ul>
            {Object.entries(availableRooms).map(([roomName, availableDates]) => (
              <li key={roomName}>
                <strong>
                  {roomName}
                  :
                </strong>
                {availableDates.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoomAvailabilityCheck;
