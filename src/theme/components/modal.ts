import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialog: {
      borderRadius: '14px',
      background: 'white',
    },
    header: {
      textAlign: 'center',
      boxShadow: '800',
    },
    body: {
      padding: '30px',
      maxHeight: '500px',
      overflowX: 'auto',
    },
    overlay: {
      backdropFilter: 'blur(10px)',
      background: 'rgba(17, 24, 39, 0.4)',
    },
  },
};

export default Modal;
