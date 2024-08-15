// ClassBooking.js
import React, { useState } from 'react';

// Sample data for classes
const classes = [
  { id: 1, name: 'Yoga', time: '9:00 AM - 10:00 AM', instructor: 'Jane Doe' },
  { id: 2, name: 'Pilates', time: '10:30 AM - 11:30 AM', instructor: 'John Smith' },
  { id: 3, name: 'Spinning', time: '12:00 PM - 1:00 PM', instructor: 'Emily Johnson' },
];

const ClassBooking = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [bookings, setBookings] = useState([]);

  // Handle booking
  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedClass) {
      setBookings([...bookings, { ...selectedClass, status: 'Booked' }]);
      setSelectedClass(null);
    }
  };

  // Handle cancel booking
  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Class Booking</h1>

      {/* Available Classes */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Available Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{cls.name}</h3>
              <p className="text-gray-600 mb-2">{cls.time}</p>
              <p className="text-gray-600 mb-4">Instructor: {cls.instructor}</p>
              <button
                onClick={() => setSelectedClass(cls)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book Class
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      {selectedClass && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirm Booking</h2>
          <form onSubmit={handleBooking}>
            <p className="text-lg text-gray-700 mb-4">
              Are you sure you want to book the <strong>{selectedClass.name}</strong> class with{' '}
              <strong>{selectedClass.instructor}</strong> at <strong>{selectedClass.time}</strong>?
            </p>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-4"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => setSelectedClass(null)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Manage Bookings */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{booking.name}</h3>
                <p className="text-gray-600 mb-2">{booking.time}</p>
                <p className="text-gray-600 mb-4">Instructor: {booking.instructor}</p>
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Cancel Booking
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-700">You have no bookings at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassBooking;
