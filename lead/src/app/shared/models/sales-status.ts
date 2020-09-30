export interface SalesStatus {
    lm_sales_status_id:Number;
    name:string;
    description:string;
    ddo_client_id: number;
    ddo_org_id: number;
    isactive: boolean;
    created_by: string;
    updated_by: string;
    created: Date,
    updated:Date;
}
