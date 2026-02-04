import React from 'react';
import { Stats } from '../types';
import './StatsCard.css';

interface StatsCardProps {
  stats: Stats;
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-icon">📦</div>
        <div className="stat-content">
          <h3>Total Orders</h3>
          <p className="stat-number">{stats.totalOrders}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">⏳</div>
        <div className="stat-content">
          <h3>Pending</h3>
          <p className="stat-number">{stats.pendingOrders}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">✅</div>
        <div className="stat-content">
          <h3>Delivered</h3>
          <p className="stat-number">{stats.deliveredOrders}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">💰</div>
        <div className="stat-content">
          <h3>Revenue</h3>
          <p className="stat-number">Rp{stats.revenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;