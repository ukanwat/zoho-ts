import { ContactPerson } from "./contactPerson";
import { CustomField } from "./customField";
import { LineItem } from "./lineItem";

export type CreateInvoice =
    /**
     * Required fields
     */
    Pick<Invoice, "customer_id"> &
        /**
         * Optional fields
         */
        Partial<
            Pick<
                Invoice,
                | "contact_persons"
                | "date"
                | "discount_type"
                | "discount"
                | "is_discount_before_tax"
                | "notes"
                | "pricebook_id"
                | "reference_number"
                | "salesperson_name"
                | "shipping_charge_tax_id"
                | "shipping_charge"
            >
        > & /**
         * Additional fields
         */ {
            line_items: (Pick<LineItem, "item_id" | "quantity"> &
                Partial<LineItem>)[];
            /**
             * Unique ID generated for the customer. This is used as an identifier.
             */
            customer_id: string;

            custom_fields?: CustomField[];

            /**
             * The invoice number will be auto-generated in most cases (e.g. INV-00494569)
             */
            invoice_number?: string;

            /**
             * Reference number of the Invoice. The sales order number should be used as the reference_number if you want Zoho to "connect"
             * invoices with Sales Orders
             */
            reference_number?: string;

            /**
             * Used to specify whether the line item rates are inclusive or exclusive of
             * tax.
             */
            is_inclusive_tax?: boolean;

            /**
             * Exchange rate of the currency, with respect to the base currency.
             */
            exchange_rate?: number;

            /**
             * Unique Id generated by the server for address in contacts page. To add a
             * billing address to invoice, send the address_id using this node.
             * Else, the default billing address for that contact is used
             */
            billing_address_id?: string;

            /**
             * Unique Id generated by the server for address in contacts page. To add a
             * shipping address to invoice, send the address_id using this node. Else,
             * the default shipping address for that contact is used
             */
            shipping_address_id?: string;
        };

/**
 * Invoices created
 */
export type Invoice = {
    /**
     * Unique ID generated by the server for the invoice. This is used as an identifier.
     */
    invoice_id: string;

    /**
     * The number of the Invoice.
     */
    invoice_number: string;

    /**
     * The current status of the Invoice.
     */
    status: string;

    /**
     * The date for the Invoice.
     * ISO 8601 format - YYYY-MM-DDThh:mm:ssTZD
     */
    date: string;

    /**
     * Due date for the Invoice.
     * ISO 8601 format - YYYY-MM-DDThh:mm:ssTZD
     */
    due_date: string;

    /**
     * Reference number of the Invoice. The sales order number should be used as the reference_number if you want Zoho to "connect"
     * invoices with Sales Orders
     */
    reference_number: string;

    /**
     * Total amount of the Invoice.
     */
    total: number;

    /**
     * Unique ID generated for the customer. This is used as an identifier.
     */
    customer_id: string;

    /**
     * Unique ID generated by the server for the sales person. This is used as an identifier.
     */
    salesperson_id: number;

    /**
     * Name of the Sales Person.
     */
    salesperson_name: string;

    /**
     * List of contact persons details.
     */
    contact_persons: ContactPerson[];

    /**
     * Balance due for the invoice.
     */
    balance: number;

    /**
     * Discount to be applied on the Sales Order.
     */
    discount_amount: number;

    /**
     * The percentage of Discount applied.
     */
    discount: string;

    /**
     * Used to check whether the discount is applied before tax or after tax.
     */
    is_discount_before_tax: boolean;

    /**
     * Type of discount. Allowed values are entity_level,item_level. For
     * entity_level type, discount is applied at entity level and the node
     * discount resides outside the line_items node.For item_level type,
     * discount is applied at item level and the node discount resides inside
     * each line_item under the line_items node
     */
    discount_type: "entity_level" | "item_level";

    /**
     * Notes for the Sales Order.
     */
    notes: string;

    /**
     * Unique ID generated by the server for the Pricebook. This is used as an identifier.
     */
    pricebook_id: number;

    /**
     * Id of the shipping tax
     *
     * Not documented
     */
    shipping_charge_tax_id: string;

    /**
     * Shipping charge tax rate in percent.
     *
     * Not officially documented
     */
    shipping_charge_tax_percentage: number;

    /**
     * Shipping charges that can be applied to the invoice.
     */
    shipping_charge: number;

    /**
     * Time at which the Sales Order was created.
     */
    created_time: string;

    /**
     * Time at which the sales order details were last modified.
     */
    last_modified_time: string;
};