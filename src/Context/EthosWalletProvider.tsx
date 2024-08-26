'use client';

import { EthosConnectProvider } from 'ethos-connect';
import { PropsWithChildren } from 'react';

export const EthosWalletProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <EthosConnectProvider
      ethosConfiguration={{
        hideEmailSignIn: true,
      }}
    >
      {children}
    </EthosConnectProvider>
  );
};
