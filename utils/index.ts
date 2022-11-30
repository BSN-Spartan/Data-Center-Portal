/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * @description
 * @type {Function}
 * @returns {string | Boolean}
(str: unknown, restr?: boolean) => unknown

 */
export const isNotEmpty: <T, U>(str: T, restr?: U) => T | U | false = (
  str,
  restr
) => {
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
 */
export const propTypesValidator: PropTypesValidator = (
  props,
  propName,
  componentName,
  location,
  propFullName
) => {
  return props[propName] === null || props[propName] === undefined
    ? new Error(
        componentName + "." + location + "." + propName + "__" + propFullName
      )
    : null;
};

/**
 * @description
 *
 */
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const getTableMultistage = (
  _data: object[],
  children: string
): [never[], string[]] => {
  type Datas = Array<{
    children: Datas;
    colSpan?: number;
  }>;

  const arr_1: Array<unknown> = [[]];
  const arr_2: Array<string> = [];
  const fun = (
    // @ts-ignore
    _datas: { colSpan?: number; [arg: string]: Datas },
    num: number
  ) => {
    if (!arr_1[num]) arr_1[num] = [];

    let _colSpan = 0;
    if (_datas[children] && _datas[children].length > 0) {
      for (let index = 0; index < _datas[children].length; index++) {
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
  fun({ [children]: _data }, 0);
  for (let index = 0; index < arr_1.length; index++) {
    const element = arr_1[index];
    //@ts-ignore
    for (let index1 = 0; index1 < element.length; index1++) {
      //@ts-ignore
      const element1 = element[index1];
      if (!element1.children) element1.rowSpan = arr_1.length - index;
    }
  }
  //@ts-ignore
  return [arr_1, arr_2];
};

/**
 * @description
 * @type {Function}
 * @param _url
 */
export function openNewWin(_url: string): void {
  if (_url.indexOf("http://") === 0 || _url.indexOf("https://") === 0) {
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
      window.location.href = _url;
    } else {
      const div: HTMLAnchorElement = window.document.createElement("a");
      div.id = "newWindow";
      div.href = "javascript:void(0)";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      div.onclick = window.open(_url);
      document.body.appendChild(div);
      setTimeout(function () {
        document.getElementById("newWindow")?.click();
      }, 500);
    }
  }
}

export function closeMessage() {
  const TAMessage = document.getElementById("TA-Message");
  if (TAMessage) document.body.removeChild(TAMessage);
}

let timeouter: NodeJS.Timeout;
export function showMessage(
  title: string,
  description: string,
  status: "error" | "warning" | "success" = "success",
  duration?: number
) {
  clearTimeout(timeouter);
  closeMessage();
  let Icon = "",
    bg_className = "",
    className = "",
    but_className = "";
  switch (status) {
    case "success":
      Icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-600">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
    `;
      bg_className = "bg-green-50";
      className = "text-green-700";
      but_className =
        "text-green-400 hover:bg-green-100 focus:ring-offset-green-50";
      break;
    case "warning":
      Icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-yellow-600">
      <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
    </svg>`;
      bg_className = "bg-yellow-50";
      className = "text-yellow-700";
      but_className =
        "text-yellow-400 hover:bg-yellow-100 focus:ring-offset-yellow-50";
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
  div.className =
    "absolute maxmd:bottom-[10%] md:top-[10%] w-full scale-y-0 h-auto";
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
  if (duration !== 0)
    setTimeout(() => {
      closeMessage();
    }, duration || 3000);
}

/**
 * @description
 * @param params
 * @param callback
 */
export function showAlert(
  params: AlertType,
  callback?: (res: boolean) => void
) {
  const image = params?.type || "success";
  const iImage =
    "<img  class='al-animation mx-auto w-24 h-24' src='/static/images/alert/" +
    image +
    ".png'/>";

  const title = params?.title || params?.title == "" ? params?.title : "";

  const subTitle =
    params?.subTitle || params?.subTitle == "" ? params?.subTitle : "";

  const iTitle =
    (title ? "<div class='al-title'>" + title + "</div>" : "") +
    "<div class='al-subtitle leading-24'>" +
    subTitle +
    "</div>";

  const submit =
    "<button id='al-submit' class='al-button al-bottom-right text-base'>" +
    "Confirm" +
    "</button>";

  const close =
    params?.type == "warning" && callback
      ? "<button class='al-button al-bottom-left text-base' id='al-close'>" +
        "Close" +
        "</button>"
      : "";

  const iBottom = "<div class='al-bottom'>" + close + submit + "</div>";

  const iHtml =
    "<div class='al-card al-in-center'>" + iImage + iTitle + iBottom + "</div>";

  addShadow(iHtml);

  if (document.getElementById("al-close")) {
    document.getElementById("al-close")?.addEventListener("click", function () {
      document.getElementById("id-temporary")?.remove();
      callback && callback(false);
    });
  }

  document.getElementById("al-submit")?.addEventListener("click", function () {
    document.getElementById("id-temporary")?.remove();
    callback && callback(true);
  });
}

/**
 * @description
 * @type {Function}
 * @param _html
 */
function addShadow(_html: string) {
  document.getElementById("id-temporary")?.remove();
  const temporary = document.createElement("div");
  temporary.id = "id-temporary";
  temporary.style.backgroundColor = "rgba(0,0,0,0.5)";
  temporary.className = "al-shadow";
  temporary.innerHTML = "<div class='al-all'>" + _html + "</div>";
  document.getElementsByTagName("body")[0].appendChild(temporary);
}
