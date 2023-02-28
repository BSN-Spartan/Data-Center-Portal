"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ ChainAccess)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8847);
/* harmony import */ var _components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4800);
/* harmony import */ var _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1954);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5944);
/* harmony import */ var _components_ComSideWin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_5__, _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__, _components_ComSideWin__WEBPACK_IMPORTED_MODULE_8__]);
([_components_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_5__, _components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__, _components_ComSideWin__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import Link from "next/link";


// import { UserManual } from "@/components/CustomHeader";





function ChainAccess({ chainType  }) {
    const { t  } = (0,_components_useHook__WEBPACK_IMPORTED_MODULE_1__/* .useHook */ .d)([
        "website",
        "public"
    ]);
    const { 0: validateCodeNum , 1: setValidateCodeNum  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        chainType[0]
    ]);
    const { 0: dataInfo , 1: setDataInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        email: "",
        captcha: "",
        chainId: []
    });
    const { 0: TAForms , 1: setTAForms  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        help: {
            email: "",
            captcha: "",
            chainId: []
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setOpen(()=>{
            ;
            return open;
        });
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setDataInfo(()=>{
            return {
                ...dataInfo,
                chainId: selected.map((obj)=>Number(obj.value))
            };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selected
    ]);
    const toReset = ()=>{
        setDataInfo({
            email: "",
            captcha: "",
            chainId: selected.map((obj)=>Number(obj.value))
        });
        setTAForms({
            help: {
                email: "",
                captcha: "",
                chainId: []
            }
        });
    };
    const validate = (attribute, value)=>{
        let errMessage = "";
        switch(attribute){
            case "email":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isNotEmpty */ .UE)(value)) errMessage = t("PUB_Pleased").replace("****", t("Website_021"));
                else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default()(value + "")) errMessage = t("PUB_Correct").replace("****", t("PUB_Mailbox"));
                break;
            case "captcha":
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isNotEmpty */ .UE)(value)) errMessage = t("PUB_Pleased").replace("****", t("Website_002"));
                break;
            default:
                break;
        }
        setTAForms(()=>{
            return {
                help: {
                    ...TAForms.help,
                    [attribute]: errMessage
                }
            };
        });
        return errMessage;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (validateCodeNum === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            clearTimeout(timerRef.current); //
            setValidateCodeNum(0); //
        }
    }, [
        validateCodeNum
    ]);
    const saveSetVerificationCodeNum = (num)=>{
        setValidateCodeNum(()=>{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            timerRef.current = setTimeout(()=>{
                if (num <= 0) return setValidateCodeNum(0);
                saveSetVerificationCodeNum(num - 1);
            }, 1000);
            return num;
        });
    };
    const getVerificationCode = async ()=>{
        if (validate("email", dataInfo.email)) return;
        const params = {
            email: dataInfo.email
        };
        const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getDcCaptchaGetApi */ .RY)(params);
        if (res.data.code !== 1) return;
        saveSetVerificationCodeNum(60);
    };
    const saveFoundation = async ()=>{
        dataInfo.chainId = dataInfo.chainId.filter((item)=>{
            return item !== 0;
        });
        if (dataInfo.chainId.length == 0) return (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .showMessage */ .PV)("warning", "ChainList cannot be empty", "warning");
        if (validate("email", dataInfo.email) || validate("captcha", dataInfo.captcha)) return;
        const params = {
            email: dataInfo.email,
            chainList: dataInfo.chainId,
            captchaCode: dataInfo.captcha
        };
        const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .defaultUserJoinApi */ .hG)(params);
        if (res.data.code != 1) return;
        toReset();
        setValidateCodeNum(0);
        (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .showMessage */ .PV)("success", "We will send you access information about NC Chains via email !", "success");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "",
                className: "pt-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-xl md:text-4xl font-bold md:mt-14",
                    children: t("Website_088")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white shadow-2xl px-4 md:px-32 md:mt-14 border rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:text-2xl font-bold md:py-12",
                        children: t("Website_033")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__/* .TAForm */ .m, {
                        customStyle: true,
                        onClick: saveFoundation,
                        className: "py-2 md:px-20 lg:py-2 max-w-7xl lg:pb-14 text-sm mx-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TASelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                setSelected: setSelected,
                                optionLabel: "label",
                                options: chainType,
                                optionKey: "value",
                                className: "mb-7",
                                multiple: true,
                                label: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 flex justify-between",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-red-500",
                                                    children: "* "
                                                }),
                                                t("Website_019")
                                            ]
                                        })
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__/* .TAFormItem */ .a, {
                                label: t("Website_021"),
                                validateStatus: TAForms.help.email ? "error" : "success",
                                help: TAForms.help.email,
                                required: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "email",
                                    name: "email",
                                    placeholder: t("Website_022"),
                                    className: "text-sm rounded-md",
                                    onBlur: (event)=>{
                                        validate("email", event.target.value);
                                    },
                                    value: dataInfo.email,
                                    onChange: (event)=>{
                                        setDataInfo(()=>{
                                            return {
                                                ...dataInfo,
                                                email: event.target.value
                                            };
                                        });
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAForm__WEBPACK_IMPORTED_MODULE_7__/* .TAFormItem */ .a, {
                                label: t("Website_002"),
                                validateStatus: TAForms.help.captcha ? "error" : "success",
                                help: TAForms.help.captcha,
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomForm_TAInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    name: "captcha",
                                    value: dataInfo.captcha,
                                    placeholder: t("PUB_Pleased").replace("****", t("Website_002")),
                                    className: "text-sm rounded-md rounded-r-none",
                                    onBlur: (event)=>{
                                        validate("captcha", event.target.value);
                                    },
                                    onChange: (event)=>{
                                        setDataInfo(()=>{
                                            return {
                                                ...dataInfo,
                                                captcha: event.target.value
                                            };
                                        });
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComSideWin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        open: open,
                        setOpen: setOpen
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chains)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8847);
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useHook__WEBPACK_IMPORTED_MODULE_1__]);
_useHook__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Chains() {
    const { t  } = (0,_useHook__WEBPACK_IMPORTED_MODULE_1__/* .useHook */ .d)([
        "website"
    ]);
    const dataList = [
        {
            title: t("Website_034"),
            url: [
                {
                    name: t("About Spartan-I Chain"),
                    href: "https://spartan.bsnbase.io/static/user-manual/infoonthencchains/infoOntheNCChains.html#spartan-i-chain-powered-by-nc-ethereum"
                },
                {
                    name: t("Website_035"),
                    href: "https://ethereum.org/en/developers/docs/"
                },
                {
                    name: t("Website_036"),
                    href: "https://docs.soliditylang.org/"
                },
                {
                    name: t("Website_037"),
                    href: "https://docs.web3j.io/"
                },
                {
                    name: t("Website_038"),
                    href: "https://web3js.readthedocs.io/en/v1.7.5/"
                }, 
            ],
            explorer: {
                url: "https://spartanone.bsn.foundation"
            }
        },
        {
            title: t("Website_039"),
            url: [
                {
                    name: t("About Spartan-II Chain"),
                    href: "https://spartan.bsnbase.io/static/user-manual/infoonthencchains/infoOntheNCChains.html#spartan-ii-chain-powered-by-nc-cosmos"
                },
                {
                    name: t("Website_040"),
                    href: "https://github.com/BSN-Spartan/NC-Cosmos/tree/main/docs/endpoints"
                },
                {
                    name: t("Website_041"),
                    href: "https://github.com/BSN-Spartan/NC-Cosmos/tree/main/docs/cli-client"
                },
                {
                    name: t("Website_042"),
                    href: "https://docs.soliditylang.org/"
                },
                {
                    name: t("Website_043"),
                    href: "https://docs.web3j.io/"
                },
                {
                    name: t("Website_044"),
                    href: "https://github.com/BSN-Spartan/nc-cosmos-sdk-go"
                }, 
            ],
            explorer: {
                url: "https://spartantwo.bsn.foundation"
            }
        },
        {
            title: t("Website_045"),
            url: [
                {
                    name: t("About Spartan-III Chain"),
                    href: "https://spartan.bsnbase.io/static/user-manual/infoonthencchains/infoOntheNCChains.html#spartan-iii-chain-powered-by-nc-polygonedge"
                },
                {
                    name: t("Website_046"),
                    href: "https://docs.polygon.technology/docs/edge/get-started/json-rpc-commands"
                },
                {
                    name: t("Website_047"),
                    href: "https://docs.polygon.technology/docs/category/smart-contracts"
                },
                {
                    name: t("Website_048"),
                    href: "https://docs.soliditylang.org/"
                },
                {
                    name: t("Website_037"),
                    href: "https://docs.web3j.io/"
                },
                {
                    name: t("Website_038"),
                    href: "https://web3js.readthedocs.io/en/v1.7.5/"
                }, 
            ],
            explorer: {
                url: "https://spartanthree.bsn.foundation"
            }
        }, 
    ];
    const subIndex = (text, str)=>{
        return text.indexOf(str);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-8 lg:mt-14 2xl lg:flex",
        children: dataList.map((item, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 lg:mt-4 flex-1 shadow-xl hover:shadow-2xl lg:mx-8 rounded-md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-theme text-white rounded-tl-md rounded-tr-md text-center py-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-3xl",
                                children: item.title.slice(0, subIndex(item.title, "("))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl pt-2",
                                children: item.title.slice(subIndex(item.title, "("))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white rounded-md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "px-8 py-4 min-h-[16rem]",
                                children: item.url.map((item1, index1)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "leading-9 cursor-pointer",
                                        onClick: ()=>{
                                            (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .openNewWin */ .X1)(item1.href + "");
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block h-4 w-4 rounded-full bg-theme mr-4"
                                            }),
                                            item1.name
                                        ]
                                    }, index1);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-between text-f16 px-8 pb-4 rounded-md",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer hover:text-theme",
                                    onClick: ()=>{
                                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .openNewWin */ .X1)(item.explorer.url + "");
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "crypto_001 text-3F3F3F w-6 h-6 mr-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: t("Website_012")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ComIndexPaseCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ComSideWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ComSideWin__WEBPACK_IMPORTED_MODULE_2__]);
_components_ComSideWin__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ComIndexPaseCard(props) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOpen(()=>{
            return open;
        });
    }, [
        open
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-10 py-2 text-[1rem] md:mb-10 md:py-4 text-white text-center md:text-[1.4rem] " + props.stepImg,
                children: props.stepNo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white sm:h-[30rem] lg:h-[45rem] md:h-[40rem] 3xl:h-[42rem] 4xl:h-[40rem] shadow-2xl px-4 py-4 md:px-4 md:py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-20 m-auto md:h-24 " + props.image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-6 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-bold text-[1rem] md:text-[1.2rem] md:h-[2.4rem]",
                            children: props.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pb-6 md:h-[18rem] lg:h-[22rem] 3xl:h-[20rem] 4xl:h-[18rem] mt-2 lg:mt-5 text-[1rem] md:text-[1.2rem] text-[#767676]",
                        children: typeof props.description !== "string" ? props.description() : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "leading-8 md:px-4",
                            children: props.description
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border-2 border-gray-200 mt-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-8 flex items-center justify-between",
                        children: props.type == "clickHandel" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full",
                            onClick: ()=>{
                                if (props.href == "metaMask") {
                                    setOpen(!open);
                                }
                                (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .openNewWin */ .X1)(props.href);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full md:h-14 text-[1rem] md:text-[1rem] text-center py-2 px-2 md:px-4 md:py-3 inline-flex items-center justify-center border border-transparent font-medium rounded-full shadow-sm text-white bg-theme hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme cursor-pointer",
                                children: props.buttonName
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "w-full",
                            href: props.href,
                            target: props.type == "openWin" ? "_blank" : "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full md:h-14 text-[1rem] md:text-[1rem] text-center py-2 px-2 md:px-4 md:py-3 inline-flex items-center justify-center border border-transparent font-medium rounded-full shadow-sm text-white bg-theme hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme cursor-pointer",
                                children: props.buttonName
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComSideWin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                open: open,
                setOpen: setOpen
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Technical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CustomHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9026);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomHeader__WEBPACK_IMPORTED_MODULE_3__]);
([_useHook__WEBPACK_IMPORTED_MODULE_1__, _components_CustomHeader__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Technical({ children , sysConfigContactUs , sysConfigTecSupport  }) {
    const { t  } = (0,_useHook__WEBPACK_IMPORTED_MODULE_1__/* .useHook */ .d)([
        "website"
    ]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const iframeList: SupportFace[] = [
    //   { id: 0, name: "", url: "" },
    //   { id: 1, name: "", url: "https://www.youtube.com/embed/PM8cT8rYZkg" },
    //   // { id: 2, name: "", url: "https://www.youtube.com/embed/Gpor2jPR3Rc" },
    // ];
    const technicalList = [
        {
            id: 2,
            name: t("Website_017"),
            url: _components_CustomHeader__WEBPACK_IMPORTED_MODULE_3__/* .UserManual */ .FM,
            type: "pdf"
        },
        {
            id: 1,
            name: t("Website_016"),
            url: _components_CustomHeader__WEBPACK_IMPORTED_MODULE_3__/* .whitePaper */ .SU,
            type: "pdf"
        },
        {
            id: 3,
            name: t("Website_018"),
            url: "https://spartan.bsn.foundation/static/quick-start/4learnNon-CryptocurrencyPublicChains/4.html",
            type: ""
        }, 
    ];
    const onJump1 = (_data)=>{
        let iUrl = _data.url + "";
        if (_data.type == "pdf") {
            iUrl = window.origin + iUrl;
        } else {
            if (iUrl.indexOf("https://") == -1 && iUrl.indexOf("http://") == -1) {
                iUrl = window.origin + "/static/quick-start" + iUrl;
            }
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .openNewWin */ .X1)(iUrl);
    };
    const onJump = (_data)=>{
        let iUrl = _data.confValue + "";
        if (_data.type == "pdf") {
            iUrl = window.origin + iUrl;
        } else {
            if (iUrl.indexOf("https://") == -1 && iUrl.indexOf("http://") == -1) {
                iUrl = window.origin + "/static/quick-start" + iUrl;
            }
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .openNewWin */ .X1)(iUrl);
    };
    sysConfigContactUs = sysConfigContactUs.filter((item)=>{
        return item.confValue !== "";
    });
    sysConfigTecSupport = sysConfigTecSupport.filter((item)=>{
        return item.confValue !== "";
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "Documentation",
                className: "pt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl lg:text-4xl font-bold",
                        children: t("Website_013")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols gap-x-4 lg:flex pt-6",
                        children: technicalList.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:flex-auto flex items-center cursor-pointer hover:text-theme my-6 lg:my-10",
                                onClick: ()=>{
                                    if (item.url) {
                                        onJump1(item);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-16 h-16 lg:w-20 lg:h-20 support-10" + item.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 ml-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-base lg:text-xl ",
                                                children: item.name
                                            })
                                        })
                                    })
                                ]
                            }, "technicalList" + item.id);
                        })
                    })
                ]
            }),
            children,
            sysConfigTecSupport.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "TechnicalSupport",
                className: "pt-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl lg:text-4xl font-bold pt-10 lg:pt-16",
                        children: t("Website_014")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-3 pt-6 lg:grid-cols-8 lg:pt-12",
                        children: sysConfigTecSupport.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: [
                                            "items-center cursor-pointer transition duration-50 ease-in-out hover:scale-110 text-center hover:text-theme pt-4",
                                            item.type == "question" ? "hidden lg:block" : "", 
                                        ].join(" "),
                                        onClick: ()=>{
                                            if (item.type == "question") {
                                                setOpen(true);
                                                return;
                                            }
                                            onJump(item);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "m-auto w-12 h-12 lg:w-20 lg:h-20 support-20-" + item.confCode
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-base lg:text-2xl pt-4 lg:pt-10",
                                                children: item.confCode
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/main/question-dialog",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: [
                                                "items-center cursor-pointer transition duration-50 ease-in-out hover:scale-110 text-center hover:text-theme pt-4 lg:hidden",
                                                item.type != "question" ? "hidden " : "", 
                                            ].join(" "),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "m-auto w-12 h-12 lg:w-24 lg:h-24 support-20-" + item.confCode
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-base lg:text-2xl pt-4 lg:pt-10",
                                                    children: item.confCode
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, "supportList" + item.confId);
                        })
                    })
                ]
            }) : null,
            sysConfigContactUs.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "ContactUs",
                className: "pt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl lg:text-4xl font-bold pt-10 lg:pt-14",
                        children: t("Website_015")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-4",
                        children: sysConfigContactUs.map((item)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center pt-6 lg:pt-10 text-[#767676]" + (item.confCode == "email" ? "cursor-pointer" : ""),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-4 h-4 lg:w-6 lg:h-6 support-40-" + item.confCode
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 ml-4 text-base",
                                        children: item.confCode == "email" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: " text-theme hover:text-theme",
                                            href: "mailto:" + item.confValue,
                                            children: item.confValue
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: item.confValue
                                        })
                                    })
                                ]
                            }, "contactList" + item.confId);
                        })
                    })
                ]
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ComIndex_paseCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5958);
/* harmony import */ var _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9026);
/* harmony import */ var _components_ComTechnical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6633);
/* harmony import */ var _components_useHook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3253);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8847);
/* harmony import */ var _components_ComChains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(709);
/* harmony import */ var _components_ComChainAccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1651);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ComIndex_paseCard__WEBPACK_IMPORTED_MODULE_3__, _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__, _components_ComTechnical__WEBPACK_IMPORTED_MODULE_5__, _components_useHook__WEBPACK_IMPORTED_MODULE_6__, _components_ComChains__WEBPACK_IMPORTED_MODULE_7__, _components_ComChainAccess__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ComIndex_paseCard__WEBPACK_IMPORTED_MODULE_3__, _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__, _components_ComTechnical__WEBPACK_IMPORTED_MODULE_5__, _components_useHook__WEBPACK_IMPORTED_MODULE_6__, _components_ComChains__WEBPACK_IMPORTED_MODULE_7__, _components_ComChainAccess__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Home = ({ chainType , sysConfig , sysConfigContactUs , sysConfigTecSupport  })=>{
    const { t  } = (0,_components_useHook__WEBPACK_IMPORTED_MODULE_6__/* .useHook */ .d)([
        "website"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "Home",
                className: "w-full md:h-[32rem] main-index1-img",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full md:h-[32rem]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-white text-center text-3xl pt-10 md:text-6xl md:pt-20 font-bold",
                            children: sysConfig.headline
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-white text-center text-base pt-6 pb-6 md:pt-16 flex-col md:flex-row flex justify-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#getStarted",
                                    className: "w-2/3 my-2 text-xl md:w-auto md:text-3xl inline-flex justify-center items-center px-12 py-5 border border-white font-bold rounded-full shadow-sm text-white hover:scale-105 md:mx-8",
                                    children: t("Website_024")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__/* .GetGas */ .QF,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "w-2/3 my-2 text-xl md:w-auto md:text-3xl inline-flex justify-center items-center px-12 py-5 border border-white font-bold rounded-full shadow-sm text-white hover:scale-105 md:mx-8",
                                        children: t("Website_025")
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-8 md:px-20 xl:px-24 py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base md:text-2xl text-[#767676] leading-7 break-words",
                            style: {
                                whiteSpace: "pre-line"
                            },
                            dangerouslySetInnerHTML: {
                                __html: sysConfig.introduce
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-12",
                        id: "getStarted",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-xl lg:text-4xl font-bold pb-20",
                                children: t("Website_028")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-8 xxl:grid-cols-2",
                                children: [
                                    {
                                        type: "clickHandel",
                                        stepNo: "Step 1",
                                        stepImg: "bg-step",
                                        title: t("Website_058"),
                                        description: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "leading-8",
                                                    children: t("Website_059")
                                                })
                                            }),
                                        buttonName: t("Website_060"),
                                        image: "website_05",
                                        href: "metaMask"
                                    },
                                    {
                                        type: "",
                                        stepNo: "Step 2",
                                        stepImg: "bg-step2",
                                        title: t("Website_061"),
                                        description: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "leading-8",
                                                    children: [
                                                        t("Website_062"),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://spartan.bsn.foundation/static/quick-start/4learnNon-CryptocurrencyPublicChains/4.html",
                                                            target: "_blank",
                                                            className: "text-[#3B7DDD] underline ml-1",
                                                            children: t("Website_063")
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            }),
                                        buttonName: t("Website_064"),
                                        image: "website_01",
                                        href: "#chainAccess"
                                    },
                                    {
                                        type: "",
                                        stepNo: "Step 3",
                                        stepImg: "bg-step2",
                                        title: t("Website_065"),
                                        description: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "leading-8",
                                                    children: t("Website_066")
                                                })
                                            }),
                                        buttonName: t("Website_067"),
                                        image: "website_02",
                                        href: _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__/* .GetGas */ .QF
                                    },
                                    {
                                        type: "openWin",
                                        stepNo: "Step 4",
                                        stepImg: "bg-step2",
                                        title: t("Website_068"),
                                        description: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "leading-8",
                                                children: [
                                                    t("Website_069"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#ContactUs",
                                                        className: "text-[#3B7DDD] underline ml-1",
                                                        children: t("Website_070")
                                                    }),
                                                    "."
                                                ]
                                            }),
                                        buttonName: t("Website_071"),
                                        image: "website_03",
                                        href: _components_CustomHeader__WEBPACK_IMPORTED_MODULE_4__/* .UserManual */ .FM
                                    },
                                    {
                                        type: "clickHandel",
                                        stepNo: "Step 5",
                                        stepImg: "bg-step2",
                                        title: t("Website_072"),
                                        description: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "leading-8",
                                                    children: t("Website_073")
                                                })
                                            }),
                                        buttonName: t("Website_074"),
                                        image: "website_04",
                                        href: "https://www.spartan.bsn.foundation/main/contract"
                                    }, 
                                ].map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComIndex_paseCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            type: item.type,
                                            stepNo: item.stepNo,
                                            stepImg: item.stepImg,
                                            title: item.title,
                                            description: item.description,
                                            buttonName: item.buttonName,
                                            image: item.image,
                                            href: item.href
                                        })
                                    }, item.stepNo))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        id: "chainAccess",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComChainAccess__WEBPACK_IMPORTED_MODULE_8__/* .ChainAccess */ .w, {
                            chainType: chainType
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-12 md:pt-16",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComTechnical__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            sysConfigContactUs: sysConfigContactUs,
                            sysConfigTecSupport: sysConfigTecSupport,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                id: "NonCryptocurrencyPublicChains",
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xl md:text-4xl font-bold md:mt-10",
                                        children: t("Website_089")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ComChains__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
Home.propTypes = {
    chainType: _utils__WEBPACK_IMPORTED_MODULE_10__/* .propTypesValidator */ .vJ,
    sysConfig: _utils__WEBPACK_IMPORTED_MODULE_10__/* .propTypesValidator */ .vJ,
    sysConfigContactUs: _utils__WEBPACK_IMPORTED_MODULE_10__/* .propTypesValidator */ .vJ,
    sysConfigTecSupport: _utils__WEBPACK_IMPORTED_MODULE_10__/* .propTypesValidator */ .vJ
};
const getServerSideProps = async ({ locale  })=>{
    const chainType = [];
    const sysConfig = {};
    const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .getDcChainListApi */ .QZ)();
    const res1 = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .getSysConfigApi */ .iZ)();
    const res2 = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .getSysConfigContactUsApi */ .hA)();
    const res3 = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .getSysConfigTecSupportApi */ .Uo)();
    // res.data = [];
    if (res.code !== 1 || res1.code !== 1 || res2.code !== 1 || res3.code !== 1) {
        return {
            redirect: {
                destination: "/500",
                permanent: false
            }
        };
    }
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
    if (res1?.code === 1 && res1.data) {
        res1?.data.map((item)=>{
            sysConfig[item.confCode] = item.confValue;
        });
    }
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale || "", [
                "public",
                "website"
            ]),
            chainType: chainType ?? null,
            sysConfig: sysConfig ?? null,
            sysConfigContactUs: res2.data ?? null,
            sysConfigTecSupport: res3.data ?? null
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,649,169,701,883], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();