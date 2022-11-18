import { PaymentRespVo } from './payment-resp-vo';

/**
 * ResultInfo«PaymentRespVO»
 * @export
 * @interface ResultInfoPaymentRespVo
 */
export interface ResultInfoPaymentRespVo {
    /**
     *
     * @type {number}
     * @memberof ResultInfoPaymentRespVo
     */
    code?: number;
    /**
     *
     * @type {PaymentRespVo}
     * @memberof ResultInfoPaymentRespVo
     */
    data?: PaymentRespVo;
    /**
     *
     * @type {string}
     * @memberof ResultInfoPaymentRespVo
     */
    msg?: string;
}


