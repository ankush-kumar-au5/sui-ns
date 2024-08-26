'use client';

import { Chain, EthosConnectProvider } from 'ethos-connect';
import { PropsWithChildren } from 'react';

const ethosConfiguration = {
  preferredWallets: ['Ethos Wallet'],
  chain: Chain.SUI_TESTNET,
  hideEmailSignIn: true,
};

export const EthosWalletProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
    >
      {children}
    </EthosConnectProvider>
  );
};
