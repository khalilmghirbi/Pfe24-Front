export class Hopital {
    hopital_id: number;
    creator_id: number;
    hopital_name: string;
    hopital_logo?: string;
    hopital_adress: string;
    hopital_city: string;
    hopital_cp?: number;
    hopital_tel?: string;
    hopital_fax?: string;
    hopital_emailcontact?: string;
    hopital_emaildemande1?: string;
    hopital_emaildemande2?: string;
    hopital_emaildemande3?: string;
    hopital_dateexpiration?: string;
    hopital_commission?: number;
    hopital_description?: string;
    hopital_commissionNegociationMarge?: number;
    hopital_typecommission?: string;
    hopital_typefacturation?: string;
    hopital_enabled: number;
    hopital_activationend?: string;
    hopital_supportfr?: number;
    hopital_arabictranslator?: number;
    hopital_openyear?: number;
    hopital_nbrlits?: number;
    hopital_frenshtranslator?: number;
    hopital_courtedescription?: string;
    hopital_top?: number;
    hopital_onslider?: number;
    hopital_appreciated?: number;
    hopital_responsetime?: number;
    hopital_responseratio?: number;
    hopital_sendfile?: number;
    hopital_name_ar?: string;
    hopital_commission_type?: string;
    hopital_inassurance?: number;
    hopital_boenabled?: number;
    hopital_dispatchmode?: number;
    hopital_addnightprice?: number;
    hopital_intensivecareprice?: number;
    hopital_prixconsultation?: number;
    hopital_accepthiv?: number;
    hopital_gbnote?: number;
    hopital_certificat?: string;
    affectation_geo: number;
  
    constructor(
      hopital_id: number,
      creator_id: number,
      hopital_name: string,
      hopital_adress: string,
      hopital_city: string,
      hopital_enabled: number,
      affectation_geo: number = 1, // Valeur par défaut
      hopital_logo?: string,
      hopital_cp?: number,
      hopital_tel?: string,
      hopital_fax?: string,
      hopital_emailcontact?: string,
      hopital_emaildemande1?: string,
      hopital_emaildemande2?: string,
      hopital_emaildemande3?: string,
      hopital_dateexpiration?: string,
      hopital_commission?: number,
      hopital_description?: string,
      hopital_commissionNegociationMarge?: number,
      hopital_typecommission?: string,
      hopital_typefacturation?: string,
      hopital_activationend?: string,
      hopital_supportfr?: number,
      hopital_arabictranslator?: number,
      hopital_openyear?: number,
      hopital_nbrlits?: number,
      hopital_frenshtranslator?: number,
      hopital_courtedescription?: string,
      hopital_top?: number,
      hopital_onslider?: number,
      hopital_appreciated?: number,
      hopital_responsetime?: number,
      hopital_responseratio?: number,
      hopital_sendfile?: number,
      hopital_name_ar?: string,
      hopital_commission_type?: string,
      hopital_inassurance?: number,
      hopital_boenabled?: number,
      hopital_dispatchmode?: number,
      hopital_addnightprice?: number,
      hopital_intensivecareprice?: number,
      hopital_prixconsultation?: number,
      hopital_accepthiv?: number,
      hopital_gbnote?: number,
      hopital_certificat?: string
    ) {
      this.hopital_id = hopital_id;
      this.creator_id = creator_id;
      this.hopital_name = hopital_name;
      this.hopital_adress = hopital_adress;
      this.hopital_city = hopital_city;
      this.hopital_enabled = hopital_enabled;
      this.affectation_geo = affectation_geo;
      this.hopital_logo = hopital_logo;
      this.hopital_cp = hopital_cp;
      this.hopital_tel = hopital_tel;
      this.hopital_fax = hopital_fax;
      this.hopital_emailcontact = hopital_emailcontact;
      this.hopital_emaildemande1 = hopital_emaildemande1;
      this.hopital_emaildemande2 = hopital_emaildemande2;
      this.hopital_emaildemande3 = hopital_emaildemande3;
      this.hopital_dateexpiration = hopital_dateexpiration;
      this.hopital_commission = hopital_commission;
      this.hopital_description = hopital_description;
      this.hopital_commissionNegociationMarge = hopital_commissionNegociationMarge;
      this.hopital_typecommission = hopital_typecommission;
      this.hopital_typefacturation = hopital_typefacturation;
      this.hopital_activationend = hopital_activationend;
      this.hopital_supportfr = hopital_supportfr;
      this.hopital_arabictranslator = hopital_arabictranslator;
      this.hopital_openyear = hopital_openyear;
      this.hopital_nbrlits = hopital_nbrlits;
      this.hopital_frenshtranslator = hopital_frenshtranslator;
      this.hopital_courtedescription = hopital_courtedescription;
      this.hopital_top = hopital_top;
      this.hopital_onslider = hopital_onslider;
      this.hopital_appreciated = hopital_appreciated;
      this.hopital_responsetime = hopital_responsetime;
      this.hopital_responseratio = hopital_responseratio;
      this.hopital_sendfile = hopital_sendfile;
      this.hopital_name_ar = hopital_name_ar;
      this.hopital_commission_type = hopital_commission_type;
      this.hopital_inassurance = hopital_inassurance;
      this.hopital_boenabled = hopital_boenabled;
      this.hopital_dispatchmode = hopital_dispatchmode;
      this.hopital_addnightprice = hopital_addnightprice;
      this.hopital_intensivecareprice = hopital_intensivecareprice;
      this.hopital_prixconsultation = hopital_prixconsultation;
      this.hopital_accepthiv = hopital_accepthiv;
      this.hopital_gbnote = hopital_gbnote;
      this.hopital_certificat = hopital_certificat;
    }
  }
  