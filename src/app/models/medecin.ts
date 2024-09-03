export class HopitalMedecin {
    hopitalmedecins_id: number;
    hopital_id?: number; // optional field
    hopitalmedecins_fullname: string;
    hopitalmedecins_phone?: string; // optional field
    hopitalmedecins_description?: string; // optional field
    hopitalmedecins_photo?: string; // optional field
    hopitalmedecins_langs?: string; // optional field
    hopitalmedecins_status: number; // using number for SMALLINT
    hopitalmedecins_cvfile?: string; // optional field
  
    constructor(
      hopitalmedecins_id: number,
      hopitalmedecins_fullname: string,
      hopitalmedecins_status: number,
      hopital_id?: number,
      hopitalmedecins_phone?: string,
      hopitalmedecins_description?: string,
      hopitalmedecins_photo?: string,
      hopitalmedecins_langs?: string,
      hopitalmedecins_cvfile?: string
    ) {
      this.hopitalmedecins_id = hopitalmedecins_id;
      this.hopital_id = hopital_id;
      this.hopitalmedecins_fullname = hopitalmedecins_fullname;
      this.hopitalmedecins_phone = hopitalmedecins_phone;
      this.hopitalmedecins_description = hopitalmedecins_description;
      this.hopitalmedecins_photo = hopitalmedecins_photo;
      this.hopitalmedecins_langs = hopitalmedecins_langs;
      this.hopitalmedecins_status = hopitalmedecins_status;
      this.hopitalmedecins_cvfile = hopitalmedecins_cvfile;
    }
  }
  