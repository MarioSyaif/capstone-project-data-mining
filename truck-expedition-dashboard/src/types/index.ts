export interface Order {
  id: number;
  customerName: string;
  origin: string;
  destination: string;
  truckType: string;
  weight: number;
  status: 'pending' | 'on-progress' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate: string;
}

export interface Stats {
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  revenue: number;
}