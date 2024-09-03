export class Hopital_avis {
    hopitalavis_id: number;
    hopitalavis_fullname: string;
    hopitalavis_note: number;
    hopitalavis_comment: string;
    hopitalavis_hopital_id: number;
    hopitalavis_dossier: number;
    hopitalavis_date?: string; // Using string to match DATEONLY format, adjust as needed
    hopitalavis_lang: string;
    hopitalavis_reply: string;
    hopitalavis_country: string;
    hopitalavis_commentfr?: string;
    hopitalavis_commenten?: string;
    hopitalavis_commentar?: string;
    hopitalavis_commentru?: string;
    hopitalavis_reply_fr?: string;
    hopitalavis_reply_en?: string;
    hopitalavis_reply_ar?: string;
    hopitalavis_reply_ru?: string;
    hopitalavis_service_rate: number;
    hopitalavis_translator_rate: number;
    hopitalavis_medecin_rate: number;
    hopitalavis_commentes?: string;
    hopitalavis_reply_es?: string;
    hopitalavis_moyenne_rate: number;
  
    constructor(
      hopitalavis_id: number,
      hopitalavis_fullname: string,
      hopitalavis_note: number,
      hopitalavis_comment: string,
      hopitalavis_hopital_id: number,
      hopitalavis_dossier: number,
      hopitalavis_date: string | undefined,
      hopitalavis_lang: string,
      hopitalavis_reply: string,
      hopitalavis_country: string,
      hopitalavis_commentfr: string | undefined,
      hopitalavis_commenten: string | undefined,
      hopitalavis_commentar: string | undefined,
      hopitalavis_commentru: string | undefined,
      hopitalavis_reply_fr: string | undefined,
      hopitalavis_reply_en: string | undefined,
      hopitalavis_reply_ar: string | undefined,
      hopitalavis_reply_ru: string | undefined,
      hopitalavis_service_rate: number,
      hopitalavis_translator_rate: number,
      hopitalavis_medecin_rate: number,
      hopitalavis_commentes: string | undefined,
      hopitalavis_reply_es: string | undefined,
      hopitalavis_moyenne_rate: number
    ) {
      this.hopitalavis_id = hopitalavis_id;
      this.hopitalavis_fullname = hopitalavis_fullname;
      this.hopitalavis_note = hopitalavis_note;
      this.hopitalavis_comment = hopitalavis_comment;
      this.hopitalavis_hopital_id = hopitalavis_hopital_id;
      this.hopitalavis_dossier = hopitalavis_dossier;
      this.hopitalavis_date = hopitalavis_date;
      this.hopitalavis_lang = hopitalavis_lang;
      this.hopitalavis_reply = hopitalavis_reply;
      this.hopitalavis_country = hopitalavis_country;
      this.hopitalavis_commentfr = hopitalavis_commentfr;
      this.hopitalavis_commenten = hopitalavis_commenten;
      this.hopitalavis_commentar = hopitalavis_commentar;
      this.hopitalavis_commentru = hopitalavis_commentru;
      this.hopitalavis_reply_fr = hopitalavis_reply_fr;
      this.hopitalavis_reply_en = hopitalavis_reply_en;
      this.hopitalavis_reply_ar = hopitalavis_reply_ar;
      this.hopitalavis_reply_ru = hopitalavis_reply_ru;
      this.hopitalavis_service_rate = hopitalavis_service_rate;
      this.hopitalavis_translator_rate = hopitalavis_translator_rate;
      this.hopitalavis_medecin_rate = hopitalavis_medecin_rate;
      this.hopitalavis_commentes = hopitalavis_commentes;
      this.hopitalavis_reply_es = hopitalavis_reply_es;
      this.hopitalavis_moyenne_rate = hopitalavis_moyenne_rate;
    }
  }
  