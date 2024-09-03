export class HopitalManager {
    hopitalmanager_id: number;
    hopital_id: number;
    hopitalmanager_fullname: string;
    hopitalmanager_phone?: string; // optional field
    hopitalmanager_email?: string; // optional field
    hopitalmanager_photo?: string; // optional field
    hopitalmanager_countries?: string; // optional field
    hopitalmanager_deleted?: Date; // optional field
  
    constructor(
      hopitalmanager_id: number,
      hopital_id: number,
      hopitalmanager_fullname: string,
      hopitalmanager_phone?: string,
      hopitalmanager_email?: string,
      hopitalmanager_photo?: string,
      hopitalmanager_countries?: string,
      hopitalmanager_deleted?: Date
    ) {
      this.hopitalmanager_id = hopitalmanager_id;
      this.hopital_id = hopital_id;
      this.hopitalmanager_fullname = hopitalmanager_fullname;
      this.hopitalmanager_phone = hopitalmanager_phone;
      this.hopitalmanager_email = hopitalmanager_email;
      this.hopitalmanager_photo = hopitalmanager_photo;
      this.hopitalmanager_countries = hopitalmanager_countries;
      this.hopitalmanager_deleted = hopitalmanager_deleted;
    }
  }
  