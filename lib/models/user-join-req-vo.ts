/**
 * UserJoinReqVO
 * @export
 * @interface UserJoinReqVo
 */
export interface UserJoinReqVo {
    /**
     *
     * @type {string}
     * @memberof UserJoinReqVo
     */
    captchaCode: string;
    /**
     *
     * @type {Array<number>}
     * @memberof UserJoinReqVo
     */
    chainList?: Array<number>;
    /**
     *
     * @type {string}
     * @memberof UserJoinReqVo
     */
    email: string;
}


