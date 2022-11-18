export {};
import * as API from "./models";
declare global {
  export interface dcHelpVo {
    email: string;
    questionMgs: string;
    fileList: UploadUserFile[];
  }
  ResultInfoListDcSystemConfRespVo;
  export type ResultInfoListChainRespVo = API.ResultInfoListChainRespVo;
  export type ResultInfoListDcSystemConfRespVo =
    API.ResultInfoListDcSystemConfRespVo;
  export type EmailReqVo = EmailReqVo;
  export type ResultInfo = API.ResultInfo;
  export type UserJoinReqVO = API.UserJoinReqVO;
  export type CalcGasPriceReqVO = API.CalcGasPriceReqVO;
  export type ResultInfoCalcGasPriceRespVO = API.ResultInfoCalcGasPriceRespVO;
  export type PaymentReqVo = API.PaymentReqVo;
  export type ResultInfoPaymentRespVO = API.ResultInfoPaymentRespVO;
  export type GasExchangeRateReqVO = GasExchangeRateReqVO;
  export type ResultInfoGasExchangeRateRespVO =
    API.ResultInfoGasExchangeRateRespVO;
  export type ResultInfoListPaymentTypeRespVO = ResultInfoListPaymentTypeRespVO;
  export type PaymentTypeRespVO = PaymentTypeRespVO;
  export type DcChainRespVO = DcChainRespVO;
  export type DcSystemConfRespVO = DcSystemConfRespVO;
}
