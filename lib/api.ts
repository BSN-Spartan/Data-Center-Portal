import { AxiosPromise } from "axios";
import { request } from "@/utils/axios";
import { getFetch } from "@/utils/fetch";

export {};

/**
 * @description
 * @return {Promise<ResultInfoListDcChainRespVo>}
 */
export const getDcChainListApi = (): Promise<ResultInfoListChainRespVo> => {
  return getFetch("/parameters/query/chain");
};
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */
export const getSysConfigApi =
  (): Promise<ResultInfoListDcSystemConfRespVo> => {
    return getFetch("/parameters/query/systemconf");
  };
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */
export const getSysConfigContactUsApi =
  (): Promise<ResultInfoListDcSystemConfRespVo> => {
    return getFetch("/parameters/query/systemconfcontactus");
  };
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */
export const getSysConfigTecSupportApi =
  (): Promise<ResultInfoListDcSystemConfRespVo> => {
    return getFetch("/parameters/query/systemconftechnicalsupport");
  };
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */
export const getSysConfigInfoApi = (): AxiosPromise<ResultInfo> => {
  return request("/parameters/query/systemconf", {
    method: "GET",
  });
};
/**
 * @description
 * @param {EmailReqVo} param
 * @return {Promise<ResultInfo>}
 */
export const getDcCaptchaGetApi = (
  param: EmailReqVo
): AxiosPromise<ResultInfo> => {
  return request("/v1/dc/captcha/get", {
    method: "POST",
    data: param,
  });
};
/**
 * @description
 * @param {CaptchaReqVo} param
 * @return {Promise<ResultInfo>}
 */
export const defaultDcCaptchaSendApi = (
  param: object
): AxiosPromise<ResultInfo> => {
  return request("/v1/dc/captcha/send", {
    method: "POST",
    data: param,
  });
};
/**
 * @description
 * @param {UserJoinReqVO} param
 * @return {Promise<ResultInfo>}
 */
export const defaultUserJoinApi = (
  param: UserJoinReqVO
): AxiosPromise<ResultInfo> => {
  return request("/v1/dc/chain/userJoin", {
    method: "POST",
    data: param,
  });
};
/**
 * @description
 * @param {CalcGasPriceReqVO} param
 * @return {Promise<ResultInfoCalcGasPriceRespVO>}
 */
export const defaultPaymentCalcGaspriceApi = (
  param: CalcGasPriceReqVO
): AxiosPromise<ResultInfoCalcGasPriceRespVO> => {
  return request("/v1/payment/calc/gasPrice", {
    method: "POST",
    data: param,
  });
};
/**
 * @description
 * @param {PaymentReqVO} param
 * @return {Promise<ResultInfoPaymentRespVO>}
 */
export const defaultPaymentCreateOrderApi = (
  param: PaymentReqVo
): AxiosPromise<ResultInfoPaymentRespVO> => {
  return request("/v1/payment/create/order", {
    method: "POST",
    data: param,
  });
};
/**
 * @description
 * @return {Promise<ResultInfoGasExchangeRateRespVO>}
 */
export const getDcChainGetlatesttxApi = (
  param: GasExchangeRateReqVO
): Promise<ResultInfoGasExchangeRateRespVO> => {
  return getFetch("/v1/payment/gas/exchangeRate", param);
};
/**
 * @description
 * @return {Promise<ResultInfoListPaymentTypeRespVO>}
 */
export const defaultV1PaymentTypeApi =
  (): Promise<ResultInfoListPaymentTypeRespVO> => {
    return getFetch("/v1/payment/type", {});
  };
