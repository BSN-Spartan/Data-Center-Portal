/**
 * PaymentReqVO
 * @export
 * @interface PaymentReqVo
 */
export interface PaymentReqVo {
    /**
     *
     * @type {string}
     * @memberof PaymentReqVo
     */
    captchaCode: string;
    /**
     *
     * @type {string}
     * @memberof PaymentReqVo
     */
    chainAccountAddress: string;
    /**
     *
     * @type {number}
     * @memberof PaymentReqVo
     */
    chainId: number;
    /**
     *
     * @type {string}
     * @memberof PaymentReqVo
     */
    channelCode: string;
    /**
     *
     * @type {string}
     * @memberof PaymentReqVo
     */
    email: string;
    /**
     *
     * @type {number}
     * @memberof PaymentReqVo
     */
    gasCount: number;
    /**
     *
     * @type {number}
     * @memberof PaymentReqVo
     */
    payAmount: number;
    /**
     *
     * @type {number}
     * @memberof PaymentReqVo
     */
    payType: number;
    /**
     *
     * @type {string}
     * @memberof PaymentReqVo
     */
    remarks?: string;
}


