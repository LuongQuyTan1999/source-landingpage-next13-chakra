import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Radio: ComponentStyleConfig = {
  baseStyle: {
    control: {
      // width: '20px',
      // height: '20px',
      // w: '20px',
      // h: '20px',

      _checked: {
        bg: 'white.300',
        borderColor: 'primary.500',

        _before: {
          content: `""`,
          display: 'inline-block',
          pos: 'relative',
          w: '8px',
          h: '8px',
          borderRadius: '50%',
          bg: 'primary.500',
        },
      },
    },
  },
};

export default Radio;
