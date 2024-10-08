import { Products, Clothing, Appliances } from "../../data/products-class.js";

describe("Test Suite: Products-class", () => {
    let product;
    beforeEach(() => {
        product = new Products({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: [
              "socks",
              "sports",
              "apparel"
            ]
          });
    });

    it("Has a correct properties:", () => {
        expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(product.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(product.rating).toEqual({
            stars: 4.5,
            count: 87
          });
        expect(product.priceCents).toEqual(1090);
    });

    it("getStarURL:", () => {
        expect(product.getStarURL()).toEqual('images/ratings/rating-45.png');
    });

    it("getPrice:", () => {
        expect(product.getPrice()).toEqual('$10.90');
    });

    it("getSizeChartLink:", () => {
        expect(product.getSizeChartLink()).toEqual('');
    });
});

describe("Test Suite: Clothing-class", () => {
    let product;
    beforeEach(() => {
        product = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
              stars: 4.5,
              count: 56
            },
            priceCents: 799,
            keywords: [
              "tshirts",
              "apparel",
              "mens"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
          });
    });

    it("Has a correct properties:", () => {
        expect(product.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
        expect(product.image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
        expect(product.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
        expect(product.rating).toEqual({
            stars: 4.5,
            count: 56
          });
        expect(product.priceCents).toEqual(799);
        expect(product.sizeChartLink).toEqual("images/clothing-size-chart.png");
    });

    it("getStarURL:", () => {
        expect(product.getStarURL()).toEqual('images/ratings/rating-45.png');
    });

    it("getPrice:", () => {
        expect(product.getPrice()).toEqual('$7.99');
    });

    it("getSizeChartLink:", () => {
        expect(product.getSizeChartLink()).toEqual('<a href="images/clothing-size-chart.png" target="_blank">Size chart</a>');
    });
});

describe("Test Suite: Appliance-class", () => {
    let product;
    beforeEach(() => {
        product = new Appliances({
            id: "54e0eccd-8f36-462b-b68a-8182611d9add",
            image: "images/products/black-2-slot-toaster.jpg",
            name: "2 Slot Toaster - Black",
            rating: {
              stars: 5,
              count: 2197
            },
            priceCents: 1899,
            keywords: [
              "toaster",
              "kitchen",
              "appliances"
            ],
            type: 'appliance'
          });
    });

    it("Has a correct properties:", () => {
        expect(product.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(product.image).toEqual("images/products/black-2-slot-toaster.jpg");
        expect(product.name).toEqual("2 Slot Toaster - Black");
        expect(product.rating).toEqual({
            stars: 5,
            count: 2197
          });
        expect(product.priceCents).toEqual(1899);
    });

    it("getStarURL:", () => {
        expect(product.getStarURL()).toEqual('images/ratings/rating-50.png');
    });

    it("getPrice:", () => {
        expect(product.getPrice()).toEqual('$18.99');
    });

    it("getSizeChartLink:", () => {
        expect(product.getSizeChartLink()).toEqual(`<a href="${product.instructionLink} target="_blank">Instruction</a> <a href="${product.warrantyLink} target="_blank">Warranty</a>`);
    });
});