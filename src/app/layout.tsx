import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EthosWalletProvider } from '@/Context/EthosWalletProvider';
import { Header } from '@/Component/Header';
import { NotifiContextWrapper } from '@/Component/notifi/NotifiContextWrapper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sui NS',
  description: 'Sui NS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[2400px]`}>
        <EthosWalletProvider>
          <NotifiContextWrapper>
            <Header />
          </NotifiContextWrapper>
          {children}
        </EthosWalletProvider>
      </body>
    </html>
  );
}
