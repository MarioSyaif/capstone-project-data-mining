import React, { useState } from 'react';
import { Order } from '../types';
import './OrderForm.css';

interface OrderFormProps {
  onSubmit: (order: Omit<Order, 'id' | 'status' | 'orderDate'>) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    origin: 'Semarang',
    destination: '',
    truckType: 'Pickup',
    weight: 0,
    deliveryDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      ...formData,
      weight: Number(formData.weight)
    });
    
    // Reset form
    setFormData({
      customerName: '',
      origin: 'Semarang',
      destination: '',
      truckType: 'Pickup',
      weight: 0,
      deliveryDate: ''
    });
  };

  return (
    <div className="order-form-container">
      <h2>➕ New Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Origin</label>
            <input
              type="text"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Truck Type</label>
            <select
              value={formData.truckType}
              onChange={(e) => setFormData({ ...formData, truckType: e.target.value })}
            >
              <option value="Pickup">Pickup</option>
              <option value="Fuso">Fuso</option>
              <option value="Tronton">Tronton</option>
              <option value="Container">Container</option>
            </select>
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Delivery Date</label>
          <input
            type="date"
            value={formData.deliveryDate}
            onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;