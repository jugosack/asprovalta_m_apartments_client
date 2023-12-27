import React, { useState } from 'react';
import '../styles/checkavailiability.css';

const RoomAvailabilityCheck = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [capacity, setCapacity] = useState(''); // Initial capacity is an empty string
  const [availableRooms, setAvailableRooms] = useState(null);

  const checkAvailability = async () => {
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
          // eslint-disable-next-line max-len
          capacity: parseInt(capacity, 10) || undefined, // Parse capacity, default to undefined if empty
        }),
      });

      const data = await response.json();
      setAvailableRooms(data.available_dates_per_room);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error checking availability:', error);
    }
  };

  const handleIncrement = () => {
    // eslint-disable-next-line no-nested-ternary
    setCapacity((prevCapacity) => (prevCapacity === ''
      ? 1
      : prevCapacity + 1 <= 7
        ? prevCapacity + 1
        : prevCapacity));
  };

  const handleDecrement = () => {
    // eslint-disable-next-line no-nested-ternary
    setCapacity((prevCapacity) => (prevCapacity === ''
      ? ''
      : prevCapacity - 1 >= 1
        ? prevCapacity - 1
        : prevCapacity));
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
        <div className="capacity-input">
          <input
            id="capacity"
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <div className="button-container">
            <button className="plus" type="button" onClick={handleIncrement}>
              +
            </button>
            <span className="separator">/</span>
            <button className="minus" type="button" onClick={handleDecrement}>
              -
            </button>
          </div>
        </div>
      </label>
      <button type="button" onClick={checkAvailability}>
        Check Availability
      </button>

      {/* {availableRooms && (
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
      )} */}
      {availableRooms && (
        <div>
          <h3>Available Rooms:</h3>
          <ul>
            {Object.entries(availableRooms).map(([roomId, roomDetails]) => (
              <li key={roomId}>
                <strong>
                  {roomDetails.name}
                  :
                </strong>
                {Array.isArray(roomDetails.available_dates)
                && roomDetails.available_dates.length > 0 ? (
                  <ul>
                    {roomDetails.available_dates.map(({ date, price }) => (
                      <li key={date}>
                        Date:
                        {' '}
                        {date}
                        , Price:
                        {' '}
                        {price}
                      </li>
                    ))}
                  </ul>
                  ) : (
                    'No available dates'
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoomAvailabilityCheck;
