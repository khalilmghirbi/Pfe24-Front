export class HopitalProcedure {
    hopital_procedure_id: number;
    procedures_id: number;
    hopital_id: number;
    procedures_price?: number; // optional field
    procedures_consultation_price?: number; // optional field
    procedures_price_currency: string;
  
    constructor(
      hopital_procedure_id: number,
      procedures_id: number,
      hopital_id: number,
      procedures_price_currency: string,
      procedures_price?: number,
      procedures_consultation_price?: number
    ) {
      this.hopital_procedure_id = hopital_procedure_id;
      this.procedures_id = procedures_id;
      this.hopital_id = hopital_id;
      this.procedures_price_currency = procedures_price_currency;
      this.procedures_price = procedures_price;
      this.procedures_consultation_price = procedures_consultation_price;
    }
  }
  