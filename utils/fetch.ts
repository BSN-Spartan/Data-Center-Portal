/**
 *
 * @param url
 * @param data
 * @param option
 * @returns
 */
export const getFetch = async (
  url: string,
  data?: object | null,
  option?: RequestInit
) => {
  if (url.indexOf("http:") < 0 && url.indexOf("https:") < 0)
    url = process.env.baseURL + url;

  let method = "GET",
    headers: HeadersInit = new Headers({});

  if (data) {
    method = "POST";
    headers = new Headers({
      "Content-type": "application/json",
    });
  }

  headers = option?.headers || headers;
  method = option?.method || method;

  const feRes = await fetch(url, {
    body: data ? JSON.stringify(data) : null,
    method,
    headers,
    ...option,
  });
  const _data = await feRes.json();
  return _data;
};
