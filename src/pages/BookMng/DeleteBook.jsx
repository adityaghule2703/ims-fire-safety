import React from 'react';

const DeleteBook = ({ booking, onClose, onConfirm }) => {
  if (!booking) return null;

  return (
    <div className="space-y-4">
      {/* Warning icon + message */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <svg width={20} height={20} fill="none" stroke="#DC2626" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            Are you sure you want to delete this booking? This action cannot be undone.
          </p>
        </div>
      </div>

      {/* Booking summary */}
      <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Booking ID</span>
          <span className="font-medium text-gray-800">{booking.bookingId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Customer</span>
          <span className="font-medium text-gray-800">{booking.customerName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Service</span>
          <span className="font-medium text-gray-800">{booking.service}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Amount</span>
          <span className="font-medium text-gray-800">${booking.amount}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onConfirm(booking)}
          className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;