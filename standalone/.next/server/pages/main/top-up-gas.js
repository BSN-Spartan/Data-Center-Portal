"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/pay-134546.98712b88.png","height":43,"width":170,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGNUMfH2Z2RgEP719/9RPWW+979//xNiYGT4zvCfgRdIM4IUTAQq4Pv3n2FdpLfK9lMXnsswMTH8ACpgAipgAADqrRUmNroGNwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 7771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/pay-134557.a02a9503.png","height":27,"width":214,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAK0lEQVR4nGO8++DV//9sHNMkvjxTYWX/pyC8gHXKlxe/RC/8mM2x2cayCAAm3hDHzSQhgwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 6784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vector.e72d47ad.png","height":45,"width":489,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGNUMfF2V5bivsjExMj8////fwyMDEwMDECSgeE/EDMCAIeCBww95p0AAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 8365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3253);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8847);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9476);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_web_images_pay_134557_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7771);
/* harmony import */ var _public_web_images_pay_134546_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6842);
/* harmony import */ var _public_web_images_vector_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6784);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useHook__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
([_useHook__WEBPACK_IMPORTED_MODULE_2__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TARadioGroup = ({ selected , setSelected , mailingLists  })=>{
    const { t  } = (0,_useHook__WEBPACK_IMPORTED_MODULE_2__/* .useHook */ .d)([
        "website"
    ]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 0: selectedMailingLists , 1: setSelectedMailingLists  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mailingLists[0]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {
        value: selected,
        onChange: (e)=>{
            setSelectedMailingLists(()=>{
                setSelected(e);
                return e;
            });
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Label, {
                className: "font-medium text-gray-900",
                children: t("Website_049")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-2 grid grid-cols-1 gap-y-6 mxl:grid-cols-3 sm:gap-x-4",
                children: mailingLists.map((mailingList)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Option, {
                        value: mailingList,
                        className: "cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none",
                        children: ({ checked , active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .classNames */ .AK)(checked ? "border-transparent" : "border-gray-300", active ? "border-indigo-500 ring-2 ring-indigo-500" : "", "relative flex cursor-pointer rounded-lg border bg-white p-2 shadow-sm focus:outline-none"),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Label, {
                                                as: "div",
                                                className: "text-sm px-2 font-medium text-gray-900 absolute -top-3 bg-white z-[1]",
                                                children: mailingList.payChannelName
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-1 flex-col h-8",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup.Description, {
                                                    as: "div",
                                                    className: "mt-1 flex flex-1 items-center text-sm text-gray-500 relative",
                                                    children: mailingList.payType === 3 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            src: _public_web_images_vector_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            className: "w-full",
                                                            layout: "fill",
                                                            objectFit: "contain",
                                                            alt: ""
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        src: mailingList.payType === 1 ? _public_web_images_pay_134557_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _public_web_images_pay_134546_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                        className: "w-full",
                                                        layout: "fill",
                                                        objectFit: "contain",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.CheckCircleIcon, {
                                        className: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .classNames */ .AK)(!checked ? "invisible" : "", "h-5 w-5 text-indigo-600"),
                                        "aria-hidden": "true"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .classNames */ .AK)(active ? "border" : "border-2", checked ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"),
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                    }, mailingList.paymentTypeId))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TARadioGroup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CustomTitle = ({ title , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl md:text-center px-7 py-7 md:text-3xl border-b-2 border-gray-300 border-solid font-bold",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: title
                })
            }),
            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-6 text-base text-[#767676] leading-7 md:text-xl md:mt-12",
                children: description
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTitle);


/***/ }),

/***/ 385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5944);
/* harmony import */ var _components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4800);
/* harmony import */ var _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1954);
/* harmony import */ var _components_ComSideWin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5248);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8847);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(169);
/* harmony import */ var _components_CustomTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9188);
/* harmony import */ var _components_CustomForm_TARadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8365);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1185);
/* harmony import */ var _utils_ethereum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(423);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__, _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_6__, _components_ComSideWin__WEBPACK_IMPORTED_MODULE_7__, _components_CustomForm_TARadioGroup__WEBPACK_IMPORTED_MODULE_11__, _headlessui_react__WEBPACK_IMPORTED_MODULE_13__]);
([_components_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__, _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_6__, _components_ComSideWin__WEBPACK_IMPORTED_MODULE_7__, _components_CustomForm_TARadioGroup__WEBPACK_IMPORTED_MODULE_11__, _headlessui_react__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-unknown-property */ 

















const TopUp = ({ paymentTypes , chainType  })=>{
    const { HeaderContext , t , getThrottleFn  } = (0,_components_useHook__WEBPACK_IMPORTED_MODULE_1__/* .useHook */ .d)([
        "website",
        "public"
    ]);
    const { 0: validateCodeNum , 1: setValidateCodeNum  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: errorMsg , 1: setValidateErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(chainType[0]);
    const calcGas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)("");
    const agreeCheck = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        chainId: 1,
        chainAccountAddress: "",
        verifyChainAccountAddress: "",
        email: "",
        captchaCode: "",
        gasCount: "",
        payAmount: "",
        payType: 1,
        remarks: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        HeaderContext.setHeaderText(t("Website_010"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setOpen(()=>{
            return open;
        });
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setFormData(()=>{
            return {
                ...formData,
                chainId: selected.value
            };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selected
    ]);
    const { 0: reloadNum , 1: setReloadNum  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: isSubmit , 1: setIsSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        tradeNo: "",
        show: false
    });
    const { 0: paymentType , 1: setPaymentType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(paymentTypes[0]);
    const { 0: errorFormText , 1: setErrorFormText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        chainId: "",
        chainAccountAddress: "",
        verifyChainAccountAddress: "",
        email: "",
        captchaCode: "",
        gasCount: "",
        payAmount: "",
        payType: "",
        remarks: "",
        agreeCheck: ""
    });
    const verification = (attribute, value)=>{
        let help = "";
        switch(attribute){
            case "chainId":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_019"));
                break;
            case "chainAccountAddress":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_051"));
                break;
            case "verifyChainAccountAddress":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_052"));
                else if (formData.chainAccountAddress !== value) help = t("Website_006");
                break;
            case "email":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_021"));
                else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_8___default()(value + "")) help = t("PUB_Correct").replace("****", t("PUB_Mailbox"));
                break;
            case "captchaCode":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_002"));
                break;
            case "gasCount":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .UE)(value)) help = t("PUB_Pleased").replace("****", t("Website_053").replace("enter ", ""));
                break;
            case "agreeCheck":
                if (agreeCheck.current === 0) help = t("Website_007").replace("XXXX", t("Website_008"));
                break;
            default:
                break;
        }
        setErrorFormText(()=>{
            return {
                ...errorFormText,
                [attribute]: help
            };
        });
        return help;
    };
    const saveSetVerificationCodeNum = (num)=>{
        setValidateCodeNum(()=>{
            setTimeout(()=>{
                if (num <= 0) return setValidateCodeNum(0);
                saveSetVerificationCodeNum(num - 1);
            }, 1000);
            return num;
        });
    };
    const getVerificationCode = async ()=>{
        if (verification("email", formData.email)) return;
        const params = {
            email: formData.email,
            captchaType: "gas_recharge_captcha_"
        };
        const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .defaultDcCaptchaSendApi */ .K4)(params);
        if (res.data.code !== 1) return;
        saveSetVerificationCodeNum(60);
    };
    const confirm = getThrottleFn(async ()=>{
        if (formData.chainId == 0) return (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .showMessage */ .PV)("warning", "ChainList cannot be empty", "warning");
        ;
        if (verification("chainAccountAddress", formData?.chainAccountAddress) || verification("verifyChainAccountAddress", formData?.verifyChainAccountAddress) || verification("email", formData.email) || verification("captchaCode", formData.captchaCode) || verification("gasCount", formData.gasCount) || verification("agreeCheck", "")) return;
        const param = {
            chainAccountAddress: formData.chainAccountAddress,
            email: formData.email,
            payAmount: Number(formData.payAmount),
            captchaCode: formData.captchaCode,
            channelCode: paymentType?.channelCode || "",
            payType: paymentType?.payType || 0,
            chainId: Number(formData.chainId),
            gasCount: Number(formData.gasCount),
            remarks: ""
        };
        const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .defaultPaymentCreateOrderApi */ .dz)(param);
        if (res.data.code != 1) return;
        (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .openNewWin */ .X1)(res.data.data.orderUrl + "");
        setIsSubmit(()=>{
            setTimeout(()=>{
                document.getElementById("toSubmitShow")?.click();
            }, 300);
            return {
                tradeNo: res.data.data.tradeNo + "",
                show: true
            };
        });
    }, 3000);
    const getGasPrice = ()=>{
        calcGas.current = "";
        setValidateErrorMsg("");
        if (reloadNum && formData.gasCount) {
            if (formData.chainId == 0) return (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .showMessage */ .PV)("warning", "ChainList cannot be empty", "warning");
        }
        if (!verification("gasCount", formData.gasCount)) (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .defaultPaymentCalcGasCreditApi */ .SL)({
            // chainAccountAddress: formData.chainAccountAddress,
            chainId: formData.chainId,
            payAmount: Number(formData.gasCount)
        }).then((res)=>{
            if (res.data && res.data.code === 1) {
                setFormData(()=>{
                    return {
                        ...formData,
                        // gasCount: res.data.data.gasCount / 100 + "",
                        payAmount: parseFloat(res.data.data.payAmount / 100 + "") + ""
                    };
                });
                calcGas.current = res.data.data.gasCount;
                if (res.data.data.errorMsg !== "") setValidateErrorMsg(res.data.data.errorMsg);
            // verification("gas", res.data.data.errorMsg);
            } else {
                setFormData(()=>{
                    return {
                        ...formData,
                        payAmount: "--"
                    };
                });
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (reloadNum && formData.gasCount) getGasPrice();
        }, 500);
        setReloadNum(reloadNum + 1);
        return ()=>{
            clearTimeout(timer);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formData.gasCount,
        formData.chainId
    ]);
    // formData.gasCount, formData.chainAccountAddress,
    const toReset = ()=>{
        setFormData({
            chainId: 1,
            chainAccountAddress: "",
            verifyChainAccountAddress: "",
            email: "",
            captchaCode: "",
            gasCount: "",
            payAmount: "",
            payType: 0,
            remarks: ""
        });
        setErrorFormText({
            chainId: "",
            chainAccountAddress: "",
            verifyChainAccountAddress: "",
            email: "",
            captchaCode: "",
            gasCount: "",
            payAmount: "",
            payType: "",
            remarks: "",
            agreeCheck: ""
        });
        agreeCheck.current = 0;
        calcGas.current = "";
        setValidateCodeNum(0);
        setIsSubmit({
            tradeNo: "",
            show: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:px-36 mb-40 px-8",
        children: [
            !isSubmit.show ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTitle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        title: "Top Up Gas Credit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAForm */ .m, {
                            customStyle: false,
                            onClick: confirm,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    setSelected: setSelected,
                                    optionLabel: "label",
                                    options: chainType,
                                    optionKey: "value",
                                    className: "mb-7",
                                    multiple: false,
                                    label: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-red-500",
                                                            children: "* "
                                                        }),
                                                        t("Website_019")
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "inline-block float-right text-sm",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        href: "/#chainAccess",
                                                        className: "text-theme cursor-pointer underline",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "underline cursor-pointer",
                                                            children: t("Website_054")
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: t("Website_051")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "inline-block float-right text-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                setOpen(!open);
                                                            },
                                                            className: "text-theme cursor-pointer underline",
                                                            children: t("Website_020")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "hidden md:inline-block",
                                                            children: "\xa0\xa0or\xa0\xa0"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "hidden md:inline-block text-theme cursor-pointer underline",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                (0,_utils_ethereum__WEBPACK_IMPORTED_MODULE_16__/* .connectMetaMask */ .u)();
                                                            },
                                                            children: t("Website_023")
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                    help: errorFormText.chainAccountAddress,
                                    required: true,
                                    validateStatus: errorFormText.chainAccountAddress ? "error" : "success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "text",
                                        value: formData.chainAccountAddress,
                                        name: "nttAccountAddress",
                                        className: "text-sm rounded-md",
                                        placeholder: t("PUB_Pleased").replace("****", t("Website_051")),
                                        onBlur: (e)=>{
                                            verification("chainAccountAddress", e.target.value);
                                        },
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                chainAccountAddress: e.target.value
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: t("Website_087"),
                                    help: errorFormText.verifyChainAccountAddress,
                                    required: true,
                                    validateStatus: errorFormText.verifyChainAccountAddress ? "error" : "success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "text",
                                        value: formData.verifyChainAccountAddress,
                                        name: "verifyNttAccountAddress",
                                        className: "text-sm rounded-md",
                                        placeholder: t("PUB_Pleased").replace("****", t("Website_052")),
                                        onBlur: (e)=>{
                                            verification("verifyChainAccountAddress", e.target.value);
                                        },
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                verifyChainAccountAddress: e.target.value
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        t("Website_055"),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_12__.QuestionMarkCircleIcon, {
                                                            className: "w-5 h-5 text-sm ml-2 ",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                setIsOpen(true);
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Transition, {
                                                    appear: true,
                                                    show: isOpen,
                                                    as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Dialog, {
                                                        as: "div",
                                                        className: "relative z-10",
                                                        onClose: ()=>{
                                                            setIsOpen(false);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Transition.Child, {
                                                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                                enter: "ease-out duration-300",
                                                                enterFrom: "opacity-0",
                                                                enterTo: "opacity-100",
                                                                leave: "ease-in duration-200",
                                                                leaveFrom: "opacity-100",
                                                                leaveTo: "opacity-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "fixed inset-0 bg-black bg-opacity-25"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "fixed inset-0 overflow-y-auto",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex min-h-full items-center justify-center p-4 text-center",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Transition.Child, {
                                                                        as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                                                        enter: "ease-out duration-300",
                                                                        enterFrom: "opacity-0 scale-95",
                                                                        enterTo: "opacity-100 scale-100",
                                                                        leave: "ease-in duration-200",
                                                                        leaveFrom: "opacity-100 scale-100",
                                                                        leaveTo: "opacity-0 scale-95",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Dialog.Panel, {
                                                                            className: "transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Dialog.Title, {
                                                                                    as: "h3",
                                                                                    className: "text-lg font-medium leading-6 text-gray-900",
                                                                                    children: t("Website_075")
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "mt-2 leading-12",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: "text-sm text-gray-600 leading-12 mt-4",
                                                                                            children: t("Website_076")
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                            className: "text-sm text-gray-600 leading-12 mt-4",
                                                                                            children: [
                                                                                                "\xa0\xa0",
                                                                                                t("Website_077")
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                            className: "text-sm text-gray-600 leading-12 mt-4",
                                                                                            children: [
                                                                                                "\xa0\xa0",
                                                                                                t("Website_078")
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                            className: "text-sm text-gray-600 leading-12 mt-4",
                                                                                            children: [
                                                                                                "\xa0\xa0",
                                                                                                t("Website_079")
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: "text-sm text-gray-600 leading-12 mt-4 italic",
                                                                                            children: t("Website_080")
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "mt-4",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        type: "button",
                                                                                        className: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                                                                        onClick: ()=>{
                                                                                            setIsOpen(false);
                                                                                        },
                                                                                        children: t("Website_081")
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                    addonAfter: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: " text-sm px-8 h-full -ml-px m-auto inline-flex items-center rounded-r-md font-medium  bg-gray-300 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "USD"
                                            })
                                        }),
                                    help: errorMsg == "" ? errorFormText.gasCount : errorMsg,
                                    gasTip: calcGas.current !== "" && formData.chainId !== 2 ? "" + calcGas.current + " GWEI" : calcGas.current !== "" && formData.chainId === 2 ? "" + calcGas.current + " UGAS" : "",
                                    required: true,
                                    validateStatus: errorFormText.gasCount || errorMsg !== "" ? "error" : "success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "number",
                                        name: "gasCount",
                                        required: true,
                                        className: "text-sm rounded-md",
                                        value: formData.gasCount,
                                        placeholder: t("PUB_Pleased").replace("****", t("Website_056")),
                                        onBlur: ()=>{
                                            // verification("gasCount", e.target.value);
                                            getGasPrice();
                                        },
                                        onChange: (e)=>setFormData(()=>{
                                                verification("gasCount", e.target.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, "$1"));
                                                return {
                                                    ...formData,
                                                    gasCount: e.target.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, "$1")
                                                };
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: t("Website_001"),
                                    required: true,
                                    help: errorFormText.email,
                                    validateStatus: errorFormText.email ? "error" : "success",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "email",
                                        value: formData.email,
                                        name: "email",
                                        className: "text-sm rounded-md",
                                        placeholder: t("Website_057"),
                                        onBlur: (e)=>{
                                            verification("email", e.target.value);
                                        },
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                email: e.target.value
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: t("Website_002"),
                                    validateStatus: errorFormText.captchaCode ? "error" : "success",
                                    help: errorFormText.captchaCode,
                                    required: true,
                                    addonAfter: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: " text-sm px-2 md:px-8 h-full -ml-px m-auto inline-flex items-center rounded-r-md font-medium  focus:outline-none focus:ring-1 " + (validateCodeNum > 0 ? "bg-gray-300 text-gray-500" : "text-white bg-theme focus:border-theme focus:ring-theme"),
                                            disabled: validateCodeNum > 0,
                                            onClick: getVerificationCode,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: validateCodeNum > 0 ? t("Website_003").replace("****", validateCodeNum + "") : t("Website_004")
                                            })
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "text",
                                        name: "captcha",
                                        placeholder: t("PUB_Pleased").replace("****", t("Website_002")),
                                        className: "text-sm rounded-md rounded-r-none",
                                        onBlur: (event)=>{
                                            verification("captchaCode", event.target.value);
                                        },
                                        onChange: (e)=>{
                                            setFormData({
                                                ...formData,
                                                captchaCode: e.target.value
                                            });
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_4__/* .TAFormItem */ .a, {
                                    label: t("Website_011"),
                                    required: false,
                                    children: [
                                        ""
                                    ].map(()=>{
                                        const list = [
                                            [
                                                t("Website_051") + ": ",
                                                formData.chainAccountAddress || "--", 
                                            ],
                                            [
                                                t("Website_055") + ": ",
                                                formData.payAmount && formData.payAmount != "--" ? "" + parseFloat(formData.payAmount).toFixed(2) : "--", 
                                            ],
                                            [
                                                t("Website_005") + ": ",
                                                formData.payAmount && formData.payAmount != "--" ? "$" + parseFloat(formData.payAmount).toFixed(2) : "--", 
                                            ], 
                                        ];
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border rounded-md border-solid border-gray-300 w-full px-6 py-6 text-md",
                                            children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex mb-2" + (index === 3 ? " font-bold" : ""),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-36 text-right mr-6",
                                                            children: item[0]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex-1",
                                                            children: item[1]
                                                        })
                                                    ]
                                                }, "Details-" + index))
                                        }, "Order");
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TARadioGroup__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    selected: paymentType,
                                    setSelected: setPaymentType,
                                    mailingLists: paymentTypes || []
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "checkbox",
                                                    name: "isOk",
                                                    onChange: ()=>{
                                                        agreeCheck.current = agreeCheck.current ? 0 : 1;
                                                        ;
                                                        verification("agreeCheck", "");
                                                    },
                                                    className: "w-4 h-4 border-2 rounded focus:outline-none focus:ring-0 focus:ring-theme"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "pl-2",
                                                    children: t("Website_009")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/main/terms-of-service",
                                                    target: "noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: " text-blue-800 underline underline-offset-4 cursor-pointer",
                                                        children: t("Website_008")
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "h-5 text-sm text-red-500 pt-2",
                                            children: errorFormText.agreeCheck
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "submitShow",
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        id: "toSubmitShow",
                        href: "#submitShow",
                        className: "h-0 w-0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_12__.CheckCircleIcon, {
                        className: "w-80 h-80 text-green-400"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-6 text-xl text-black font-bold",
                        children: [
                            t("Website_031"),
                            " ",
                            isSubmit.tradeNo
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6 text-xl text-black",
                        children: t("Website_050")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10 grid grid-cols-1 gap-24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "inline-flex items-center rounded-md border border-transparent bg-theme px-6 py-3 text-base font-medium text-white shadow-base hover:bg-theme focus:outline-none focus:ring-2 focus:ring-theme focus:ring-offset-2",
                            onClick: ()=>{
                                toReset();
                            },
                            children: t("Website_030")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComSideWin__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                open: open,
                setOpen: setOpen
            })
        ]
    });
};
TopUp.propTypes = {
    paymentTypes: _utils__WEBPACK_IMPORTED_MODULE_15__/* .propTypesValidator */ .vJ,
    chainType: _utils__WEBPACK_IMPORTED_MODULE_15__/* .propTypesValidator */ .vJ
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopUp);
const getServerSideProps = async ({ locale  })=>{
    const chainType = [];
    const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .getDcChainListApi */ .QZ)();
    const res1 = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .defaultV1PaymentTypeApi */ .N6)();
    if (res.code !== 1 || res1.code !== 1) {
        return {
            redirect: {
                destination: "/500",
                permanent: false
            }
        };
    }
    // res.data = [];
    if (res?.code === 1 && res.data) {
        if (res.data.length !== 0) {
            res.data.map((item)=>{
                chainType.push({
                    label: item.chainName + "",
                    value: item.chainId
                });
            });
        } else {
            chainType.push({
                label: "",
                value: 0
            });
        }
    }
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale || "", [
                "website",
                "public"
            ]),
            paymentTypes: res1.data,
            chainType
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ connectMetaMask)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8847);

// connect to MetaMask
const connectMetaMask = async ()=>{
    const customWindow = window;
    if (typeof customWindow.ethereum !== "undefined") {
        if (customWindow.ethereum.request) {
            const res = await customWindow.ethereum?.request({
                method: "eth_requestAccounts"
            });
            ;
        }
    } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .showAlert */ .wp)({
            title: "MetaMask plugin not installed",
            subTitle: "Did you go to the chrome web store to install the MetaMask plugin?",
            type: "warning"
        }, (res)=>{
            if (res) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .openNewWin */ .X1)("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en");
            }
        });
    }
};


/***/ }),

/***/ 9476:
/***/ ((module) => {

module.exports = require("@heroicons/react/20/solid");

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7379:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,649,169,701,883], () => (__webpack_exec__(385)));
module.exports = __webpack_exports__;

})();