import React from 'react';
import { Order } from '../types';
import './OrderTable.css';

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'orange';
      case 'on-progress': return 'blue';
      case 'delivered': return 'green';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="order-table-container">
      <h2>📋 Order Tracking</h2>
      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Route</th>
              <th>Truck</th>
              <th>Weight</th>
              <th>Status</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customerName}</td>
                <td>
                  <div className="route">
                    <span className="origin">{order.origin}</span>
                    <span className="arrow">→</span>
                    <span className="destination">{order.destination}</span>
                  </div>
                </td>
                <td>{order.truckType}</td>
                <td>{order.weight.toLocaleString()} kg</td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                    {order.status}
                  </span>
                </td>
                <td>{new Date(order.deliveryDate).toLocaleDateString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;