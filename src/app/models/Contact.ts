export class HopitalContact {
    hopitalcontacts_id: number;
    hopital_id?: number; // optional field
    hopitalcontacts_fullname: string;
    hopitalcontacts_phone?: string; // optional field
    hopitalcontacts_email: string;
  
    constructor(
      hopitalcontacts_id: number,
      hopitalcontacts_fullname: string,
      hopitalcontacts_email: string,
      hopital_id: number = 1, // default value set to 1
      hopitalcontacts_phone: string = '70200200' // default value set to '70200200'
    ) {
      this.hopitalcontacts_id = hopitalcontacts_id;
      this.hopital_id = hopital_id;
      this.hopitalcontacts_fullname = hopitalcontacts_fullname;
      this.hopitalcontacts_phone = hopitalcontacts_phone;
      this.hopitalcontacts_email = hopitalcontacts_email;
    }
  }
  