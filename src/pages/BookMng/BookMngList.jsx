import React, { useState } from 'react';
import AddBook from './AddBook';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

const initialBookings = [
  { id: 1, bookingId: 'BK-1001', customerName: 'John Doe', email: 'john@example.com', service: 'Room Booking', date: '2024-06-15', status: 'Confirmed', amount: 250 },
  { id: 2, bookingId: 'BK-1002', customerName: 'Jane Smith', email: 'jane@example.com', service: 'Conference Hall', date: '2024-06-18', status: 'Pending', amount: 500 },
  { id: 3, bookingId: 'BK-1003', customerName: 'Robert Brown', email: 'robert@example.com', service: 'Event Space', date: '2024-06-20', status: 'Cancelled', amount: 750 },
  { id: 4, bookingId: 'BK-1004', customerName: 'Emily Davis', email: 'emily@example.com', service: 'Room Booking', date: '2024-06-22', status: 'Confirmed', amount: 300 },
  { id: 5, bookingId: 'BK-1005', customerName: 'Michael Wilson', email: 'michael@example.com', service: 'Banquet Hall', date: '2024-06-25', status: 'Pending', amount: 1200 },
];

// Reusable modal shell
const Modal = ({ title, onClose, children }) => (
  <div
    className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mt-10 mb-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          onClick={onClose}
          className="p-1.5 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <svg width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  </div>
);

const BookMngList = () => {
  const [bookings, setBookings] = useState(initialBookings);

  // Modal state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [deletingBooking, setDeletingBooking] = useState(null);

  // ---- Add ----
  const openAdd = () => setIsAddOpen(true);
  const closeAdd = () => setIsAddOpen(false);
  const handleAddSubmit = (newBooking) => {
    setBookings((prev) => [
      ...prev,
      { ...newBooking, id: prev.length ? Math.max(...prev.map((b) => b.id)) + 1 : 1 },
    ]);
    closeAdd();
  };

  // ---- Edit ----
  const openEdit = (booking) => setEditingBooking(booking);
  const closeEdit = () => setEditingBooking(null);
  const handleEditSubmit = (updated) => {
    setBookings((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    closeEdit();
  };

  // ---- Delete ----
  const openDelete = (booking) => setDeletingBooking(booking);
  const closeDelete = () => setDeletingBooking(null);
  const handleDeleteConfirm = (booking) => {
    setBookings((prev) => prev.filter((b) => b.id !== booking.id));
    closeDelete();
  };

  // ---- View ----
  const handleView = (booking) => console.log('View booking:', booking);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Booking Management</h2>
        <button
          onClick={openAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          + Add Booking
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Booking ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="9" className="px-4 py-6 text-center text-gray-500">
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking, index) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{booking.bookingId}</td>
                  <td className="px-4 py-3">{booking.customerName}</td>
                  <td className="px-4 py-3">{booking.email}</td>
                  <td className="px-4 py-3">{booking.service}</td>
                  <td className="px-4 py-3">{booking.date}</td>
                  <td className="px-4 py-3">${booking.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => handleView(booking)} className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300">View</button>
                      <button onClick={() => openEdit(booking)} className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                      <button onClick={() => openDelete(booking)} className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isAddOpen && (
        <Modal title="Add New Booking" onClose={closeAdd}>
          <AddBook onClose={closeAdd} onSubmit={handleAddSubmit} />
        </Modal>
      )}

      {/* Edit Modal */}
      {editingBooking && (
        <Modal title="Edit Booking" onClose={closeEdit}>
          <EditBook
            booking={editingBooking}
            onClose={closeEdit}
            onSubmit={handleEditSubmit}
          />
        </Modal>
      )}

      {/* Delete Modal */}
      {deletingBooking && (
        <Modal title="Delete Booking" onClose={closeDelete}>
          <DeleteBook
            booking={deletingBooking}
            onClose={closeDelete}
            onConfirm={handleDeleteConfirm}
          />
        </Modal>
      )}
    </div>
  );
};

export default BookMngList;