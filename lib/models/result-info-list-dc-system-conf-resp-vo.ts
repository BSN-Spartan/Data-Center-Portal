import { DcSystemConfRespVo } from './dc-system-conf-resp-vo';

/**
 * ResultInfo«List«DcSystemConfRespVO»»
 * @export
 * @interface ResultInfoListDcSystemConfRespVo
 */
export interface ResultInfoListDcSystemConfRespVo {
    /**
     *
     * @type {number}
     * @memberof ResultInfoListDcSystemConfRespVo
     */
    code?: number;
    /**
     *
     * @type {Array<DcSystemConfRespVo>}
     * @memberof ResultInfoListDcSystemConfRespVo
     */
    data?: Array<DcSystemConfRespVo>;
    /**
     *
     * @type {string}
     * @memberof ResultInfoListDcSystemConfRespVo
     */
    msg?: string;
}


