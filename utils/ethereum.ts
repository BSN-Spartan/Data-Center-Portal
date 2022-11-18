import { openNewWin, showAlert } from "@/utils";

export interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

interface ICustomWindow extends Window {
  ethereum?: {
    request?: (arg: RequestArguments) => Promise<Array<string>>;
  };
}

// connect to MetaMask
export const connectMetaMask = async () => {
  const customWindow: ICustomWindow = window;
  if (typeof customWindow.ethereum !== "undefined") {
    if (customWindow.ethereum.request) {
      const res = await customWindow.ethereum?.request({
        method: "eth_requestAccounts",
      });
      console.log("res===", res);
    }
  } else {
    showAlert(
      {
        title: "MetaMask plugin not installed",
        subTitle:
          "Did you go to the chrome web store to install the MetaMask plugin?",
        type: "warning",
      },
      (res: boolean) => {
        if (res) {
          openNewWin(
            "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          );
        }
      }
    );
  }
};
