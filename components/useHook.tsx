import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { CustomHeaderContext } from "./CustomHeader";

export const useHook = (translation?: string[]) => {
  const HeaderContext = useContext(CustomHeaderContext);
  const router = useRouter();
  const { t } = useTranslation(translation || "");
  const [thValid, setThValid] = useState(true);

  const routerBack = () => router.back();

  const routerPush = async (
    url: string | object,
    as?: string,
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
      unstable_skipClientCache?: boolean;
    }
  ): Promise<boolean> => await router.push(url, as, options);

  const routerReplace = async (
    url: string | object,
    as?: string,
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
      unstable_skipClientCache?: boolean;
    }
  ): Promise<boolean> => await router.replace(url, as, options);

  const getQuery = (queryData: unknown) => {
    return queryData;
  };

  const getThrottleFn = (fn: () => void, delay: number): (() => void) => {
    return function () {
      if (!thValid) {
        return false;
      }
      setThValid(false);
      fn();
      setTimeout(() => {
        setThValid(true);
      }, delay);
    };
  };

  return {
    t: (str: string) => t(str, { ns: translation }),
    routerPush,
    routerReplace,
    routerBack,
    getQuery,
    router,
    HeaderContext,
    getThrottleFn,
  };
};
