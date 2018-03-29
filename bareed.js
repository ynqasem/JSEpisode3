/**************************************************************
* Point - defines a point on the map using X and Y coordinates
*
* x - x coordinate
* y - y coordinate
*
* distanceTo(point) - takes a point, calculates the distance to
*                     that point from the current point.
*
* let point = new Point(x, y);
****************************************************************/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(point) {
    let xDelta = this.x - point.x;
    let yDelta = this.y - point.y;
    return Math.sqrt(xDelta*xDelta + yDelta*yDelta); // PYTHAGORAS!
  }

  static randomPoint(maxX, maxY) {
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    return new Point(x, y);
  }
}


/**********************************************************
* Wallet - keeps track of money
*
* money - how much money is in the wallet. Defaults to 0.
*
* credit(amount) - adds `amount` to `money`.
*
* debit(amount) - subtracts `amount` from `money`.
*
* let wallet = new Wallet(money);
**********************************************************/
class Wallet {
  // implement Wallet!
  constructor(x) {
    this.money = x || 0;
    this.credit = 0;
    this.debit = 0;


  }

  credit(amount) {
    this.money += amount;

  }

  debit(amount) {
    this.money -= amount;

  }

}


let wallet = new Wallet(500);

/**********************************************************
* Person - defines a person with a name and feelings
*
* name - name of said person
* location - a Point
* wallet` - a Wallet instance initially with 0.
*
* moveTo(point) - updates the location to point
*
* let person = new Person(name, x, y);
**********************************************************/
class Person {
  // implement Person!
}


/**********************************************************
* Vendor - defines a vendor with a desire for money
* Subclasses Person
*
* range - the maximum distance this vendor can travel - initially 5
* price - the cost of a single ice creams - initially 1
*
* sellTo(customer, numberOfIceCreams) -  sells a specific number of ice creams
*     to the customer by doing the following:
*         - Moves to the customer's location
*         - Transfers money from the customer's wallet
*           to the vendor's wallet
*
* new vendor = new Vendor(name, x, y);
**********************************************************/
class Vendor {
  // implement Vendor!
}


/**********************************************************
* Customer - defines a customer with a desire for ice cream
* Subclasses Person
*
* wallet - a Wallet instance initially with 10.
*
* _isInRange(vendor) - checks if the customer is in range of vendor.
*
* _haveEnoughMoney(vendor, numberOfIceCreams) - checks if the customer
*     has enough money to buy a specific number of ice creams from vendor.
*
* requestIceCream(vendor, numberOfIceCreams) - if the customer is in the vendor's
*     range and has enough money for, a request is sent to the vendor.
*
* new customer = new Customer(name, x, y);
**********************************************************/
class Customer {
  // implement Customer!
}


export {Point, Wallet, Person, Customer, Vendor};
