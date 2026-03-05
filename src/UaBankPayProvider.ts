import { UaBankPayLinkRequest } from './UaBankPayLinkRequest';

// noinspection JSUnusedGlobalSymbols
export default class UaBankPayProvider {
    public static generatePayLink(request: UaBankPayLinkRequest): string {
        // NBU QR code format specification: https://bank.gov.ua/qr/
        const baseUrl = 'https://bank.gov.ua/qr/';

        // Validate that all required fields are present in the request
        if (!request.receiverName || !request.receiverIban || !request.receiverCode || !request.destination) {
            throw new Error('Missing required fields in UaBankPayLinkRequest');
        }

        // Construct the payment data string according to the NBU QR code format
        const payStructureString: string = [
            'BCD',
            '002',
            '2',
            'UCT',
            '', // reserved
            request.receiverName,
            request.receiverIban,
            request.amount,
            request.receiverCode,
            '', // reserved
            '', // reserved
            request.destination,
            '' // reserved
        ].join('\n');

        // Convert the encoded data to a Base64 string
        const base64EncodedData: string = this.utf8ToBase64Url(payStructureString);

        // Construct the final payment link by appending the Base64-encoded data to the base URL
        return `${baseUrl}${base64EncodedData}`;
    }

    private static utf8ToBase64Url(utf8String: string): string {
        const buffer: Buffer<ArrayBuffer> = Buffer.from(utf8String, 'utf8');
        const standardBase64: string = buffer.toString('base64');
        return standardBase64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }
}
