import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Textarea: ComponentStyleConfig = {
  baseStyle: {
    field: {
      h: '50px',
      height: '50px',
      borderRadius: '10px',
    },
  },

  variants: {
    primary: {
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'coolGray.200',
      borderRadius: '10px',

      '::placeholder': {
        color: 'coolGray.300',
      },

      _focus: {
        boxShadow: '0 0 0 1px #3182ce',
      },
    },

    'in-valid': {
      backgroundColor: 'error.50',
      border: '1px solid',
      borderColor: 'error.500',
      borderRadius: '10px',
    },
  },

  defaultProps: {
    variant: 'primary',
  },
};

export default Textarea;
