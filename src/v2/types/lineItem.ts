/**
 * A sales order can contain multiple line items
 */
export type LineItem = {
    line_item_id: string;

    /**
     * Unique ID generated by the server for the item. This is used as an identifier.
     */
    item_id: string;

    variant_id: string;

    product_id: string;

    /**
     * Name of the line item.
     */
    name: string;

    sku: string;

    /**
     * Description of the line item.
     */
    description: string;

    /**
     * The order of the line items, starts from 0 by default.
     */
    item_order: number;

    /**
     * Item rate in the organization's base currency.
     */
    bcy_rate: number;

    /**
     * Rate / Selling Price of the line item.
     */
    rate: number;

    /**
     * Quantity of the line item.
     */
    quantity: number;

    /**
     * Quantity invoiced of the line item.
     */
    quantity_invoiced: number;

    /**
     * Quantity packed of the line item.
     */
    quantity_packed: number;

    /**
     * Quantity shipped of the line item.
     */
    quantity_shipped: number;

    /**
     * Unit of line item.
     */
    unit: string;

    /**
     * Unique ID generated by the server for the tax. This is used as an identifier.
     */
    tax_id: string;

    /**
     * Name of the tax applied on the line item.
     */
    tax_name: string;

    /**
     * Denotes the type of the tax. This can either be a single tax or a tax group.
     */
    tax_type: string;

    /**
     * Percentage of the tax.
     */
    tax_percentage: number;

    /**
     * Total of line item after discounts.
     * Always the net value
     */
    item_total: number;

    item_total_inclusive_of_tax: number;

    /**
     * Checks whether the Sales Order has been invoiced or not.
     */
    is_invoiced: boolean;

    /**
     * Unique ID generated by the server for the item image. This is used an identifier.
     */
    image_id?: string;

    /**
     * Name of the image of the line item.
     */
    image_name: string;

    /**
     * The type (file format) of the image.
     */
    image_type: string;

    /**
     * Unique ID generated by the server for the ware houses
     */
    warehouse_id: string;

    /**
     * The discount value that is applied to the net price
     */
    discount: number;

    track_batch_number?: boolean;
    is_returnable?: boolean;

    attribute_name1: string;
    attribute_name2: string;
    attribute_name3: string;

    attribute_option_name1: string;
    attribute_option_name2: string;
    attribute_option_name3: string;
    attribute_option_data1: string;
    attribute_option_data2: string;
    attribute_option_data3: string;

    /**
     * Add HSN/SAC code for your goods/services
     *
     * India Edition only
     */
    hsn_or_sac?: number;

    /**
     *  Additional fields that Zoho adds from time to time
     */
    [key: string]: unknown;
};
