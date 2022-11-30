/*
 * @Autor: shixuechao
 * @Date: 2022-11-17 09:24:42
 * @LastEditors: shixuechao
 * @LastEditTime: 2022-11-17 09:24:58
 * @Description: Description
 */
import { React } from "react";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tipTitle?: string;
  }
}
