'use client';
import { useNotifiHistoryContext } from '@notifi-network/notifi-react';
import { SignInButton, ethos } from 'ethos-connect';
import { useState } from 'react';
import { NotifiCard } from './notifi/NotifiCard';

export const Header = () => {
  const [isNotifiModalOpen, setIsNotifiModalOpen] = useState<boolean>(false);
  const { unreadCount: unreadNotificationCount } = useNotifiHistoryContext();
  const { wallet } = ethos.useWallet();

  const handleBellIconClick = () => {
    if (!wallet) return;
    setIsNotifiModalOpen(!isNotifiModalOpen);
  };

  return (
    <div className="relative flex justify-end items-center p-4 gap-8">
      <div
        className="relative flex-shrink-0 border-solid border-2 rounded-full p-3.5 border-gray-500 cursor-pointer"
        onClick={handleBellIconClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.95344 6.70464C4.95344 3.91739 7.21296 1.65788 10.0002 1.65788C12.7875 1.65788 15.047 3.91739 15.047 6.70464V9.09068V9.13335L15.0513 9.1758C15.1163 9.80879 15.2941 10.4262 15.5775 10.9985L17.0005 13.8726C17.2202 14.3164 16.8973 14.8365 16.4021 14.8365H3.59808C3.10287 14.8365 2.77999 14.3164 2.99971 13.8726L4.39926 11.0459C4.76373 10.3098 4.95334 9.49948 4.95334 8.67808V8.25595H4.95344V7.42262V6.70464ZM10.0002 -0.00878906C6.33101 -0.00878906 3.34932 2.93477 3.28775 6.58929H3.28668V7.42262V8.67808C3.28668 9.24294 3.15628 9.80018 2.90565 10.3064L1.5061 13.1331C0.737887 14.6846 1.86675 16.5032 3.59808 16.5032H16.4021C18.1335 16.5032 19.2623 14.6846 18.4941 13.1331L17.0711 10.259C16.8823 9.87761 16.7616 9.46703 16.7136 9.04583V6.70464C16.7136 2.99691 13.7079 -0.00878906 10.0002 -0.00878906ZM9.99802 19.9994C8.4708 19.9994 7.20735 19.0309 6.99721 17.7711H12.9988C12.7887 19.0309 11.5252 19.9994 9.99802 19.9994Z"
            fill="white"
          />
        </svg>

        {wallet && unreadNotificationCount > 0 ? (
          <div
            className={`absolute top-0 bg-green-300 flex justify-center items-center text-black font-semibold text-xs h-4 ${
              unreadNotificationCount > 99
                ? 'w-7 rounded-xl -right-3'
                : 'w-4 rounded-full right-0'
            }`}
          >
            {unreadNotificationCount > 99 ? '99+' : unreadNotificationCount}
          </div>
        ) : null}
      </div>

      {wallet ? (
        <div
          onClick={() => wallet?.disconnect()}
          className="cursor-pointer rounded-[30px] font-semibold text-sm connectBtn text-black p-4 px-5"
        >
          Disconnect Wallet
        </div>
      ) : (
        <SignInButton className="rounded-[30px] font-semibold text-sm connectBtn text-black p-4 px-5">
          Connect Wallet
        </SignInButton>
      )}

      {isNotifiModalOpen ? (
        <div className="absolute top-0 right-0">
          <NotifiCard onClose={handleBellIconClick} />
        </div>
      ) : null}
    </div>
  );
};
