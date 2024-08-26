import '@notifi-network/notifi-react/dist/index.css';
import { NotifiCardModal } from '@notifi-network/notifi-react';
import { copy } from './NotifiContextWrapper';
import './notifi.css';

type NotifiCardProps = {
  onClose: () => void;
};

export const NotifiCard = ({ onClose }: NotifiCardProps) => {
  return (
    <div className={'notifiCard'}>
      <NotifiCardModal darkMode={true} copy={copy} onClose={onClose} />
    </div>
  );
};
