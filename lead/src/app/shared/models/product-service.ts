export interface ProductService {
    lm_offerings_id:Number;
    name:string;
    description:string;
    type:string;
    ddo_client_id: number;
    ddo_org_id: number;
    isactive: boolean;
    created_by: string;
    updated_by: string;
    created: Date,
    updated:Date;
}
