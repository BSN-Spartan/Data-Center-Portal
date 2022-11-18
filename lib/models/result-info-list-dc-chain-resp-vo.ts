import { DcChainRespVo } from './dc-chain-resp-vo';

/**
 * ResultInfo«List«DcChainRespVO»»
 * @export
 * @interface ResultInfoListDcChainRespVo
 */
export interface ResultInfoListDcChainRespVo {
    /**
     *
     * @type {number}
     * @memberof ResultInfoListDcChainRespVo
     */
    code?: number;
    /**
     *
     * @type {Array<DcChainRespVo>}
     * @memberof ResultInfoListDcChainRespVo
     */
    data?: Array<DcChainRespVo>;
    /**
     *
     * @type {string}
     * @memberof ResultInfoListDcChainRespVo
     */
    msg?: string;
}


