'use client';
import React, { PropsWithChildren } from 'react';
import {
  NotifiContextProvider,
  NotifiCardModalProps,
} from '@notifi-network/notifi-react';
import { ethos } from 'ethos-connect';

export const copy: NotifiCardModalProps['copy'] = {
  Connect: {
    description: 'See your activity and gain access to alerts',
  },
  Ftu: {
    FtuTargetEdit: {
      TargetInputs: {
        inputSeparators: {
          email: 'OR',
          telegram: 'OR',
        },
      },
      description: 'Select a minimum of one destination',
    },
  },
  Inbox: {
    InboxConfigTargetEdit: {
      TargetInputs: {
        inputSeparators: {
          email: 'OR',
          telegram: 'OR',
        },
      },
    },
  },
};

export const NotifiContextWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { wallet } = ethos.useWallet();

  const signMessage = async (message: Uint8Array) => {
    if (!wallet) {
      throw new Error('Wallet not connected');
    }

    const signature = await wallet.signPersonalMessage({
      message,
    });

    const signatureBuffer = Buffer.from(signature.signature);
    return signatureBuffer;
  };

  const address = wallet?.address || '';

  return (
    <NotifiContextProvider
      tenantId={'suins'}
      cardId={'6c9b175016bb4834819f6514e68e022f'}
      env={'Production'}
      walletBlockchain={'SUI'}
      accountAddress={address}
      walletPublicKey={address}
      signMessage={signMessage}
      notificationCountPerPage={8}
    >
      {children}
    </NotifiContextProvider>
  );
};
