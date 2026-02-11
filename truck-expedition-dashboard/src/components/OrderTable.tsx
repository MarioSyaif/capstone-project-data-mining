import React from 'react';
import { Order } from '../types';
import './OrderTable.css';

interface OrderTableProps {
  orders: Order[];
  onStatusChange: (id: number, newStatus: Order['status']) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, onStatusChange }) => {
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
                  <div className="status-cell">
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                      {order.status}
                    </span>
                    
                    {/* Tombol untuk status Pending */}
                    {order.status === 'pending' && (
                      <div className="status-actions">
                        <button 
                          className="btn-progress"
                          onClick={() => onStatusChange(order.id, 'on-progress')}
                        >
                          🚚 In Progress
                        </button>
                        <button 
                          className="btn-deliver"
                          onClick={() => onStatusChange(order.id, 'delivered')}
                        >
                          ✅ Mark as Delivered
                        </button>
                        <button 
                          className="btn-cancel"
                          onClick={() => {
                            if (window.confirm("Yakin ingin membatalkan pesanan ini?")) {
                              onStatusChange(order.id, 'cancelled');
                            }
                          }}
                        >
                          ❌ Cancel Order
                        </button>
                      </div>
                    )}
                    
                    {/* Tombol untuk status On Progress */}
                    {order.status === 'on-progress' && (
                      <button 
                        className="btn-deliver"
                        onClick={() => onStatusChange(order.id, 'delivered')}
                      >
                        ✅ Mark as Delivered
                      </button>
                    )}
                  </div>
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