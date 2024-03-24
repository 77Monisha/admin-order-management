interface Customer {
  name: string;
  contactNumber: string;
}

export interface OrderInterface {
  orderId: string;
  date: [string, string]; // Tuple type for date and time
  machine: [string, string]; // Tuple type for machine name and code
  customer: Customer;
  totalAmount: number;
  status: string;
}
