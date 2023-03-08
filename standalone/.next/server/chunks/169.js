"use strict";
exports.id = 169;
exports.ids = [169];
exports.modules = {

/***/ 169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K4": () => (/* binding */ defaultDcCaptchaSendApi),
  "SL": () => (/* binding */ defaultPaymentCalcGasCreditApi),
  "dz": () => (/* binding */ defaultPaymentCreateOrderApi),
  "b_": () => (/* binding */ defaultTermsServiceApi),
  "hG": () => (/* binding */ defaultUserJoinApi),
  "N6": () => (/* binding */ defaultV1PaymentTypeApi),
  "RY": () => (/* binding */ getDcCaptchaGetApi),
  "QZ": () => (/* binding */ getDcChainListApi),
  "iZ": () => (/* binding */ getSysConfigApi),
  "hA": () => (/* binding */ getSysConfigContactUsApi),
  "h": () => (/* binding */ getSysConfigInfoApi),
  "Uo": () => (/* binding */ getSysConfigTecSupportApi)
});

// UNUSED EXPORTS: defaultPaymentCalcGaspriceApi, getDcChainGetlatesttxApi

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/index.ts
var utils = __webpack_require__(8847);
;// CONCATENATED MODULE: ./utils/axios.ts


let reqNum = 0;
const CancelToken = (external_axios_default()).CancelToken;
const pending = new Map();
const delPending = (config)=>{
    const configUrl = config.url + (config.data ? JSON.stringify(config.data) : "");
    pending.delete(configUrl);
};
const instance = external_axios_default().create({
    baseURL: "/api",
    timeout: 60000,
    headers: {
        "x-requested-with": "XMLHttpRequest",
        "x-frame-options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff"
    }
});
instance.interceptors.request.use((config)=>{
    if (reqNum == 0) ;
    const configUrl = config.url + (config.data ? JSON.stringify(config.data) : "");
    if (pending.has(configUrl)) {
        reqNum--;
        pending.get(configUrl)?.();
    }
    config.cancelToken = new CancelToken((c)=>{
        pending.set(configUrl, c);
    });
    reqNum++;
    return config;
}, (error)=>{
    return Promise.reject(error);
});
instance.interceptors.response.use((response)=>{
    delPending(response.config);
    reqNum--;
    if (reqNum == 0) ;
    if (response.data.code !== 1) (0,utils/* showMessage */.PV)("warning", response.data.msg, "warning");
    return response;
}, (error)=>{
    if (error.message === "canceled") return {
        code: 1,
        data: undefined,
        message: "canceled"
    };
    if (error.response) {
        delPending(error.response.config);
    }
    reqNum--;
    if (reqNum == 0) ;
    return {
        code: -1,
        data: undefined,
        error
    };
});
const axios_request = (url, option)=>{
    return instance(url, {
        ...option
    });
};
const requestB = (url, option)=>{
    return instance(url, {
        method: option?.method || "POST",
        ...option
    });
};

;// CONCATENATED MODULE: ./utils/fetch.ts
/**
 *
 * @param url
 * @param data
 * @param option
 * @returns
 */ const fetch_getFetch = async (url, data, option)=>{
    if (url.indexOf("http:") < 0 && url.indexOf("https:") < 0) url = process.env.baseURL + url;
    let method = "GET", headers = new Headers({});
    if (data) {
        method = "POST";
        headers = new Headers({
            "Content-type": "application/json"
        });
    }
    headers = option?.headers || headers;
    method = option?.method || method;
    const feRes = await fetch(url, {
        body: data ? JSON.stringify(data) : null,
        method,
        headers,
        ...option
    });
    const _data = await feRes.json();
    return _data;
};

;// CONCATENATED MODULE: ./lib/api.ts


/**
 * @description
 * @return {Promise<ResultInfoListDcChainRespVo>}
 */ const getDcChainListApi = ()=>{
    return fetch_getFetch("/parameters/query/chain");
};
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */ const getSysConfigApi = ()=>{
    return fetch_getFetch("/parameters/query/systemconf");
};
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */ const getSysConfigContactUsApi = ()=>{
    return fetch_getFetch("/parameters/query/systemconfcontactus");
};
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */ const getSysConfigTecSupportApi = ()=>{
    return fetch_getFetch("/parameters/query/systemconftechnicalsupport");
};
/**
 * @description
 * @return {Promise<ResultInfoListDcSystemConfRespVo>}
 */ const getSysConfigInfoApi = ()=>{
    return axios_request("/parameters/query/systemconf", {
        method: "GET"
    });
};
/**
 * @description
 * @param {EmailReqVo} param
 * @return {Promise<ResultInfo>}
 */ const getDcCaptchaGetApi = (param)=>{
    return axios_request("/v1/dc/captcha/get", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @param {CaptchaReqVo} param
 * @return {Promise<ResultInfo>}
 */ const defaultDcCaptchaSendApi = (param)=>{
    return axios_request("/v1/dc/captcha/send", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @param {UserJoinReqVO} param
 * @return {Promise<ResultInfo>}
 */ const defaultUserJoinApi = (param)=>{
    return axios_request("/v1/dc/chain/userJoin", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @param {CalcGasPriceReqVO} param
 * @return {Promise<ResultInfoCalcGasPriceRespVO>}
 */ const defaultPaymentCalcGaspriceApi = (param)=>{
    return request("/v1/payment/calc/gasPrice", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @param {CalcGasPriceReqVO} param
 * @return {Promise<ResultInfoCalcGasPriceRespVO>}
 */ const defaultPaymentCalcGasCreditApi = (param)=>{
    return axios_request("/v1/payment/calc/gasCredit", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @param {PaymentReqVO} param
 * @return {Promise<ResultInfoPaymentRespVO>}
 */ const defaultPaymentCreateOrderApi = (param)=>{
    return axios_request("/v1/payment/create/order", {
        method: "POST",
        data: param
    });
};
/**
 * @description
 * @return {Promise<ResultInfoGasExchangeRateRespVO>}
 */ const getDcChainGetlatesttxApi = (param)=>{
    return getFetch("/v1/payment/gas/exchangeRate", param);
};
/**
 * @description
 * @return {Promise<ResultInfoListPaymentTypeRespVO>}
 */ const defaultV1PaymentTypeApi = ()=>{
    return fetch_getFetch("/v1/payment/type", {});
};
/**
 * @description
 * @return {Promise<ResultInfoListPaymentTypeRespVO>}
 */ const defaultTermsServiceApi = ()=>{
    return axios_request("/ground/portalconfiguration/query/treaty", {
        method: "GET"
    });
};


/***/ }),

/***/ 8847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* binding */ classNames),
/* harmony export */   "PV": () => (/* binding */ showMessage),
/* harmony export */   "UE": () => (/* binding */ isNotEmpty),
/* harmony export */   "X1": () => (/* binding */ openNewWin),
/* harmony export */   "vJ": () => (/* binding */ propTypesValidator),
/* harmony export */   "wp": () => (/* binding */ showAlert)
/* harmony export */ });
/* unused harmony exports getTableMultistage, closeMessage */
/* eslint-disable @typescript-eslint/ban-ts-comment */ /**
 * @description
 * @type {Function}
 * @returns {string | Boolean}
(str: unknown, restr?: boolean) => unknown

 */ const isNotEmpty = (str, restr)=>{
    if (str === undefined || str === null) return restr || false;
    if ((str + "").trim() === "") return restr || false;
    return str;
};
/**
 *
 * @param props
 * @param propName
 * @param componentName
 * @param location
 * @param propFullName
 * @returns
 */ const propTypesValidator = (props, propName, componentName, location, propFullName)=>{
    return props[propName] === null || props[propName] === undefined ? new Error(componentName + "." + location + "." + propName + "__" + propFullName) : null;
};
/**
 * @description
 *
 */ const classNames = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};
const getTableMultistage = (_data, children)=>{
    const arr_1 = [
        []
    ];
    const arr_2 = [];
    const fun = (// @ts-ignore
    _datas, num)=>{
        if (!arr_1[num]) arr_1[num] = [];
        let _colSpan = 0;
        if (_datas[children] && _datas[children].length > 0) {
            for(let index = 0; index < _datas[children].length; index++){
                const element = _datas[children][index];
                if (element.children && element.children.length > 0) {
                    // @ts-ignore
                    const nNum = fun(element, num + 1);
                    _colSpan = _colSpan + nNum;
                    element.colSpan = nNum;
                    // @ts-ignore
                    arr_1[num].push(element);
                } else {
                    element.colSpan = 1;
                    if (num > 0) _colSpan = _colSpan + 1;
                    // @ts-ignore
                    arr_1[num].push(element);
                    // @ts-ignore
                    arr_2.push(element?.prop || "");
                }
            }
        } else {
            _datas.colSpan = 1;
            // @ts-ignore
            arr_1[num].push(_datas);
            // @ts-ignore
            arr_2.push(_datas?.prop || "");
        }
        return _colSpan;
    };
    // @ts-ignore
    fun({
        [children]: _data
    }, 0);
    for(let index = 0; index < arr_1.length; index++){
        const element = arr_1[index];
        //@ts-ignore
        for(let index1 = 0; index1 < element.length; index1++){
            //@ts-ignore
            const element1 = element[index1];
            if (!element1.children) element1.rowSpan = arr_1.length - index;
        }
    }
    //@ts-ignore
    return [
        arr_1,
        arr_2
    ];
};
/**
 * @description
 * @type {Function}
 * @param _url
 */ function openNewWin(_url) {
    if (_url.indexOf("http://") === 0 || _url.indexOf("https://") === 0) {
        const u = navigator.userAgent;
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS) {
            window.location.href = _url;
        } else {
            const div = window.document.createElement("a");
            div.id = "newWindow";
            div.href = "javascript:void(0)";
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            div.onclick = window.open(_url);
            document.body.appendChild(div);
            setTimeout(function() {
                document.getElementById("newWindow")?.click();
            }, 500);
        }
    }
}
function closeMessage() {
    const TAMessage = document.getElementById("TA-Message");
    if (TAMessage) document.body.removeChild(TAMessage);
}
let timeouter;
function showMessage(title, description, status = "success", duration) {
    clearTimeout(timeouter);
    closeMessage();
    let Icon = "", bg_className = "", className = "", but_className = "";
    switch(status){
        case "success":
            Icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-600">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
    `;
            bg_className = "bg-green-50";
            className = "text-green-700";
            but_className = "text-green-400 hover:bg-green-100 focus:ring-offset-green-50";
            break;
        case "warning":
            Icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-yellow-600">
      <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
    </svg>`;
            bg_className = "bg-yellow-50";
            className = "text-yellow-700";
            but_className = "text-yellow-400 hover:bg-yellow-100 focus:ring-offset-yellow-50";
            break;
        case "error":
            Icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-red-600">
      <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
    </svg>`;
            bg_className = "bg-red-50";
            className = "text-red-700";
            but_className = "text-red-400 hover:bg-red-100 focus:ring-offset-red-50";
            break;
    }
    const div = document.createElement("div");
    div.id = "TA-Message";
    div.className = "absolute maxmd:bottom-[10%] md:top-[10%] w-full scale-y-0 h-auto";
    div.innerHTML = `
  <div class="flex rounded-md ${bg_className} p-4 mx-auto w-1/3 max-w-[75vw]">
      <div class="flex-shrink-0">
        ${Icon}
      </div>
      <div class="ml-3">
        <div class="text-base font-medium ${className}">
          ${title}
        </div>
        <div class="mt-2 text-sm ${className}">
          <p>
            ${description}
          </p>
        </div>
      </div>
      <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              class="${but_className} inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onclick="document.body.removeChild(document.getElementById('TA-Message'))"
            >
              <span class="sr-only">Dismiss</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  </div>
  `;
    document.body.appendChild(div);
    div.className = div.className + " md:scale-up-ver-top scale-up-ver-bottom";
    if (duration !== 0) setTimeout(()=>{
        closeMessage();
    }, duration || 3000);
}
/**
 * @description
 * @param params
 * @param callback
 */ function showAlert(params, callback) {
    const image = params?.type || "success";
    const iImage = "<img  class='al-animation mx-auto w-24 h-24' src='/static/images/alert/" + image + ".png'/>";
    const title = params?.title || params?.title == "" ? params?.title : "";
    const subTitle = params?.subTitle || params?.subTitle == "" ? params?.subTitle : "";
    const iTitle = (title ? "<div class='al-title'>" + title + "</div>" : "") + "<div class='al-subtitle leading-24'>" + subTitle + "</div>";
    const submit = "<button id='al-submit' class='al-button al-bottom-right text-base'>" + "Confirm" + "</button>";
    const close = params?.type == "warning" && callback ? "<button class='al-button al-bottom-left text-base' id='al-close'>" + "Close" + "</button>" : "";
    const iBottom = "<div class='al-bottom'>" + close + submit + "</div>";
    const iHtml = "<div class='al-card al-in-center'>" + iImage + iTitle + iBottom + "</div>";
    addShadow(iHtml);
    if (document.getElementById("al-close")) {
        document.getElementById("al-close")?.addEventListener("click", function() {
            document.getElementById("id-temporary")?.remove();
            callback && callback(false);
        });
    }
    document.getElementById("al-submit")?.addEventListener("click", function() {
        document.getElementById("id-temporary")?.remove();
        callback && callback(true);
    });
}
/**
 * @description
 * @type {Function}
 * @param _html
 */ function addShadow(_html) {
    document.getElementById("id-temporary")?.remove();
    const temporary = document.createElement("div");
    temporary.id = "id-temporary";
    temporary.style.backgroundColor = "rgba(0,0,0,0.5)";
    temporary.className = "al-shadow";
    temporary.innerHTML = "<div class='al-all'>" + _html + "</div>";
    document.getElementsByTagName("body")[0].appendChild(temporary);
}


/***/ })

};
;
