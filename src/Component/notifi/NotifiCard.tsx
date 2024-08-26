import '@notifi-network/notifi-react/dist/index.css';
import { NotifiCardModal } from '@notifi-network/notifi-react';
import { copy } from './NotifiContextWrapper';
import './notifi.css'

export const NotifiCard = () => {
  return (
    <div className={'notifiCard'}>
      <NotifiCardModal darkMode={true} copy={copy} />
    </div>
  );
};