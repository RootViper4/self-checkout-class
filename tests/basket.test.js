const {
  scanItem,
  basket,
  addToBasket,
  getTotalPrice,
  removeItem,
} = require("../basket");

const orange = {
  barcode: 789,
  price: 7,
};
const kiwi = {
  barcode: 765,
  price: 25,
};

const pineapple = {
  barcode: 5367,
  price: 80,
};
const apple = {
  barcode: 123,
  price: 5,
};

const banana = {
  barcode: 456,
  price: 6,
};

const productCatalouge = [apple, banana, orange, pineapple, kiwi];

describe("selft checkout", () => {

    it("should scan an item using barcode", () => {
       const scannedItem = scanItem(456);
       expect(scannedItem).toEqual(banana);
    });


    it("should add item to basket", () => {
        addToBasket(apple);
        expect(basket).toContain(apple);
    });

    it("should show total price of your basket", () => {
        // addToBasket(banana);
        basket.push(banana);
        const total = getTotalPrice()
        expect(total).toBe(11);
    });

    it("should remove an item from your basket", () => {
        removeItem(banana);
        expect(basket).not.toContain(banana);
    });
})