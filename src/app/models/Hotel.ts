export class HopitalHotel {
    hotel_id: number;
    hotel_hopitalid?: number; // optional field
    hotel_name: string;
    hotel_stars: number;
    hotel_link: string;
    hotel_singleroom: number;
    hotel_doubleroom: number;
    hotel_address: string;
  
    constructor(
      hotel_id: number,
      hotel_name: string,
      hotel_stars: number,
      hotel_link: string,
      hotel_singleroom: number,
      hotel_doubleroom: number,
      hotel_address: string,
      hotel_hopitalid: number = 1 // default value set to 1
    ) {
      this.hotel_id = hotel_id;
      this.hotel_hopitalid = hotel_hopitalid;
      this.hotel_name = hotel_name;
      this.hotel_stars = hotel_stars;
      this.hotel_link = hotel_link;
      this.hotel_singleroom = hotel_singleroom;
      this.hotel_doubleroom = hotel_doubleroom;
      this.hotel_address = hotel_address;
    }
  }
  