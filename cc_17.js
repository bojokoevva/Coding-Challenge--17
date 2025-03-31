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
