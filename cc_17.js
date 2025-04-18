// Task 1 - Create a Customer class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    // Method to add purchase amount
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    // Method to get total spent by the customer
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Log: New customer creation and total spent after purchases
const customer1 = new Customer("John Doe", "john@example.com");
customer1.addPurchase(200);
customer1.addPurchase(150);
console.log(`${customer1.name} has spent a total of $${customer1.getTotalSpent()}`);


// Task 2 - Create a SalesRep class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    // Method to add a client to the sales rep's list
    addClient(customer) {
        this.clients.push(customer);
    }

    // Method to get total spent by a specific client
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : `Client ${name} not found.`;
    }
}

// Log: Sales rep’s clients and total spent for a specific client
const salesRep1 = new SalesRep("Alice");
salesRep1.addClient(customer1);
console.log(`${salesRep1.name}'s client ${customer1.name} has spent a total of $${salesRep1.getClientTotal("John Doe")}`);


// Task 3 - Create a VIPCustomer class that extends Customer
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    // Override the getTotalSpent method to add a 10% loyalty bonus
    getTotalSpent() {
        const totalSpent = super.getTotalSpent();
        return totalSpent + (totalSpent * 0.1); // 10% loyalty bonus
    }
}

// Log: VIP customer's total spent with bonus
const vipCustomer1 = new VIPCustomer("Jane Smith", "jane@example.com", "Gold");
vipCustomer1.addPurchase(500);
vipCustomer1.addPurchase(300);
console.log(`${vipCustomer1.name} (VIP level: ${vipCustomer1.vipLevel}) has spent a total of $${vipCustomer1.getTotalSpent()}`);


// Task 4 - Build a Client Report System

// Create additional customers
const customer2 = new Customer("Tom Johnson", "tom@example.com");
customer2.addPurchase(600);
customer2.addPurchase(200);

const vipCustomer2 = new VIPCustomer("Sarah Lee", "sarah@example.com", "Platinum");
vipCustomer2.addPurchase(700);
vipCustomer2.addPurchase(100);

// Create an array of customers
const customers = [customer1, customer2, vipCustomer1, vipCustomer2];

// Calculate total revenue from all customers using .reduce()
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);

// Filter customers who spent over $500
const highSpendingCustomers = customers.filter(customer => customer.getTotalSpent() > 500);

// Create an array of customer names and their total spent using .map()
const customerSummary = customers.map(customer => ({
    name: customer.name,
    totalSpent: customer.getTotalSpent()
}));

// Log: Total revenue, high-spending customers, and customer summary
console.log(`Total Revenue: $${totalRevenue}`);
console.log("High-Spending Customers:", highSpendingCustomers.map(customer => customer.name));
console.log("Customer Summary:", customerSummary);