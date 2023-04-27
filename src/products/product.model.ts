export class Product {
  //   id: string;
  //   title: string;
  //   description: string;
  //   price: number;

  // shortcut using the public accessor
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {
    // this.id = id;
    // this.title = title;
    // this.description = description;
    // this.price = price;
  }
}
