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
          // discord: 'OR',
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
          // discord: 'OR',
        },
      },
    },
  },
};

export const NotifiContextWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { status, wallet } = ethos.useWallet();

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
      tenantId={'c4n03sqskvhrr7nu5izi'}
      cardId={'86ff2af847fb4ffc9457bd3d5177e9ba'}
      env={'Production'}
      // tenantId={'4ch951h6kt0a4g6dpuh7'}
      // cardId={'a4e4aa1048c34770be47b5d31a564871'}
      // env={'Development'}
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
