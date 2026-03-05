export type UaBankPayLinkRequest = {
    /**
     * The name of the person or entity receiving the payment. This is typically the name of the payee or beneficiary.
     * It is important to provide the correct receiver name to ensure that the payment is directed to the intended recipient.
     * @type {string}
     * @example Громадська організація "Верховний Порядок"
     */
    receiverName: string;

    /**
     * The International Bank Account Number (IBAN) of the receiver. The IBAN is a standardized format for bank account
     * numbers that is used internationally to facilitate cross-border transactions. It includes a country code, check
     * digits, and the bank account number. Providing the correct IBAN is crucial for ensuring that the payment is
     * processed correctly and reaches the intended recipient.
     * @type {string}
     * @example UA123456789012345678901234567890
     */
    receiverIban: string;

    /**
     * The amount of money to be paid, specified in the currency of the transaction. This value should be a positive number
     * representing the total payment amount. It is important to ensure that the amount is accurate and corresponds to the
     * agreed-upon payment terms between the payer and the receiver. The amount should be specified in the smallest unit of
     * currency (e.g., shaghs for UAH) to avoid any issues with decimal places.
     * @type {string}
     * @example UAH123.45
     */
    amount: string | '';

    /**
     * The code representing the receiver's state identification number (EDRPOU). This is a numeric code that identifies
     * the legal entity or individual entrepreneur in Ukraine. It is used for tax and legal purposes and is required for
     * processing payments to ensure that the funds are directed to the correct recipient.
     * @type {number | string}
     * @example 43723254
     */
    receiverCode: number | string;

    /**
     * A description of the payment, providing details about the purpose of the transaction. This information can be
     * useful for both the payer and the receiver to understand the context of the payment. It may include information
     * such as the reason for the payment, the invoice number, or any other relevant details that can help identify
     * the transaction. Providing a clear and concise description can help avoid confusion and ensure that the payment
     * is properly documented and taken into account for accounting and record-keeping purposes.
     * @type {string}
     * @example Добровільний внесок на здійснення статутної діяльності ГО "Верховний Порядок"
     */
    destination: string;
}
