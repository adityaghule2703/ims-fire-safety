import React, { useEffect, useState } from 'react';

const EditBook = ({ booking, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    bookingId: '',
    customerName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    amount: '',
    status: 'Pending',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  // Pre-fill form when booking prop changes
  useEffect(() => {
    if (booking) {
      setForm({
        bookingId: booking.bookingId || '',
        customerName: booking.customerName || '',
        email: booking.email || '',
        phone: booking.phone || '',
        service: booking.service || '',
        date: booking.date || '',
        amount: booking.amount ?? '',
        status: booking.status || 'Pending',
        notes: booking.notes || '',
      });
    }
  }, [booking]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.customerName.trim()) errs.customerName = 'Customer name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.service) errs.service = 'Service is required';
    if (!form.date) errs.date = 'Date is required';
    if (!form.amount) errs.amount = 'Amount is required';
    else if (isNaN(form.amount) || Number(form.amount) <= 0) errs.amount = 'Enter a valid amount';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    onSubmit({
      ...booking,
      ...form,
      amount: Number(form.amount),
    });
  };

  const inputClass = (field) =>
    `w-full px-3 py-2 text-sm border rounded-md outline-none transition focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${
      errors[field] ? 'border-red-400' : 'border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Booking ID (read-only) */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Booking ID</label>
          <input
            type="text"
            name="bookingId"
            value={form.bookingId}
            readOnly
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-gray-50 text-gray-500"
          />
        </div>

        {/* Customer Name */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            className={inputClass('customerName')}
          />
          {errors.customerName && (
            <p className="text-[11px] text-red-500 mt-1">{errors.customerName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass('email')}
          />
          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass('phone')}
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass('service')}
          >
            <option value="">Select service</option>
            <option value="Room Booking">Room Booking</option>
            <option value="Conference Hall">Conference Hall</option>
            <option value="Event Space">Event Space</option>
            <option value="Banquet Hall">Banquet Hall</option>
          </select>
          {errors.service && <p className="text-[11px] text-red-500 mt-1">{errors.service}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass('date')}
          />
          {errors.date && <p className="text-[11px] text-red-500 mt-1">{errors.date}</p>}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Amount ($) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            min="0"
            className={inputClass('amount')}
          />
          {errors.amount && <p className="text-[11px] text-red-500 mt-1">{errors.amount}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className={inputClass('status')}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Additional details..."
          className={inputClass('notes')}
        />
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
          type="submit"
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Update Booking
        </button>
      </div>
    </form>
  );
};

export default EditBook;