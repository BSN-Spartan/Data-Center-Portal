import { PaymentTypeRespVo } from './payment-type-resp-vo';

/**
 * ResultInfo«List«PaymentTypeRespVO»»
 * @export
 * @interface ResultInfoListPaymentTypeRespVo
 */
export interface ResultInfoListPaymentTypeRespVo {
    /**
     *
     * @type {number}
     * @memberof ResultInfoListPaymentTypeRespVo
     */
    code?: number;
    /**
     *
     * @type {Array<PaymentTypeRespVo>}
     * @memberof ResultInfoListPaymentTypeRespVo
     */
    data?: Array<PaymentTypeRespVo>;
    /**
     *
     * @type {string}
     * @memberof ResultInfoListPaymentTypeRespVo
     */
    msg?: string;
}


