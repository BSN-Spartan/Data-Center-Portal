/* eslint-disable @typescript-eslint/ban-types */

import type { NextPageContext } from "next/types";
import type { BaseContext } from "next/dist/shared/lib/utils";
import type { ComponentType } from "react";

declare global {
  /** @Description global api type Start */
  export type {
    NextApiRequest,
    NextApiResponse,
  } from "next/dist/shared/lib/utils";
  export type { GetServerSideProps, GetStaticProps } from "next/types";
  export type { PropsWithChildren, ReactNode } from "react";
  export interface PropTypesValidator {
    (
      props: {
        [key: string]: unknown;
      },
      propName: string,
      componentName: string,
      location: string,
      propFullName: string
    ): Error | null;
  }

  type NextComponentType<
    C extends BaseContext = NextPageContext,
    IP = {},
    P = {}
  > = ComponentType<P> & {
    /**
     * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
     * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
     * @param ctx Context of `page`
     */
    getServerSideProps?(context: C): IP | Promise<IP>;
    getStaticProps?(context: C): IP | Promise<IP>;
    getLayout?(page: JSX.Element): JSX.Element;
  };
  export type NextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  >;
  export interface ResultInfo {
    /**
     * @description:
     * @type {string}
     */
    code: number;
    /**
     * @description
     */
    data: T;
    /**
     * @description
     */
    message?: string;
  }

  export interface SupportFace {
    id?: number;
    name?: string;
    url?: string;
    type?: string;
  }

  export interface AlertType {
    title?: string;
    subTitle?: string;
    type?: "success" | "warning" | "error";
  }
  /** @Description global api type END */
}
