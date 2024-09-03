export class Media {
    hopital_photos_id: number;
    hopital_id: number;
    photo_path: string;
    photo_desc: string;
    photo_type: string;
    photo_lang?: string;
    display_order: number;

    constructor(
        hopital_photos_id: number,
        hopital_id: number,
        photo_path: string,
        photo_desc: string,
        photo_type: string,
        display_order: number,
        photo_lang?: string,
    ) {
        this.hopital_photos_id = hopital_photos_id;
        this.hopital_id = hopital_id;
        this.photo_path = photo_path;
        this.photo_desc = photo_desc;
        this.photo_type = photo_type;
        this.photo_lang = photo_lang;
        this.display_order = display_order;
    }
}
