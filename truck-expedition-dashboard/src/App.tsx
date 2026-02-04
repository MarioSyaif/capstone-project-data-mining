import React, { useState } from 'react';
import { Order, Stats } from './types';
import { mockOrders } from './data/mockData';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';
import StatsCard from './components/StatsCard';
import './App.css';

function App() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  // Calculate stats
  const stats: Stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    deliveredOrders: orders.filter(o => o.status === 'delivered').length,
    revenue: orders.reduce((sum, order) => sum + (order.weight * 100), 0)
  };

  // Handle new order submission
  const handleNewOrder = (orderData: Omit<Order, 'id' | 'status' | 'orderDate'>) => {
    const newOrder: Order = {
      id: orders.length + 1,
      ...orderData,
      status: 'pending',
      orderDate: new Date().toISOString().split('T')[0]
    };
    setOrders([newOrder, ...orders]);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">🚚 Truck Expedition Dashboard</h1>
          
          <StatsCard stats={stats} />
          
          <div className="content-grid">
            <section id="new-order" className="content-section">
              <OrderForm onSubmit={handleNewOrder} />
            </section>
            
            <section id="orders" className="content-section">
              <OrderTable orders={orders} />
            </section>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>© 2026 Truck Expedition Dashboard | Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;