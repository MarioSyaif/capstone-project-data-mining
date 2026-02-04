import { Order } from '../types';

export const mockOrders: Order[] = [
  {
    id: 1,
    customerName: 'PT. Maju Jaya',
    origin: 'Semarang',
    destination: 'Surabaya',
    truckType: 'Fuso',
    weight: 5000,
    status: 'delivered',
    orderDate: '2026-01-15',
    deliveryDate: '2026-01-17'
  },
  {
    id: 2,
    customerName: 'CV. Sentosa Abadi',
    origin: 'Semarang',
    destination: 'Jakarta',
    truckType: 'Tronton',
    weight: 10000,
    status: 'on-progress',
    orderDate: '2026-01-20',
    deliveryDate: '2026-01-23'
  },
  {
    id: 3,
    customerName: 'UD. Berkah',
    origin: 'Semarang',
    destination: 'Yogyakarta',
    truckType: 'Pickup',
    weight: 1000,
    status: 'pending',
    orderDate: '2026-01-22',
    deliveryDate: '2026-01-24'
  }
];