// import eventDetailReducer from '../slice/eventDetailSlice';
// import eventReducer from '../slice/eventSlice';
// import ticketReducer from '../slice/ticketSlice';
// import reservationReducer from '../slice/reservationSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // eventDetail: eventDetailReducer,
    // events: eventReducer,
    // tickets: ticketReducer,
    // reservations: reservationReducer,
  },
});

export default store;
