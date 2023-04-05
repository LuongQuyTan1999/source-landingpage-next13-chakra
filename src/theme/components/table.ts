import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Table: ComponentStyleConfig = {
  baseStyle: {
    td: {
      maxW: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  sizes: {
    xs: {
      table: {
        tr: {
          h: '50px',
        },
        th: {
          whiteSpace: 'normal',
          maxW: '150px',
          p: '5px 0px',
          _first: {
            borderRadius: '10px 0px 0px 10px',
            paddingLeft: '20px',
          },
          _last: {
            borderRadius: '0px 10px 10px 0px',
            paddingRight: '20px',
          },
        },
      },

      tbody: {
        tr: {
          td: {
            _first: {
              borderRadius: '10px 0px 0px 10px',
              paddingLeft: '20px',
            },
            _last: {
              borderRadius: '0px 10px 10px 0px',
              paddingRight: '20px',
            },
          },

          '&:nth-of-type(even)': {
            td: {
              bg: 'coolGray.50',
            },
          },
        },
      },

      th: {
        bg: 'primary.50',
        fontWeight: 'bold',
        color: 'coolGray.500',
        textTransform: 'inherit',
      },

      td: {
        fontSize: 'md',
        color: 'coolGray.900',
      },
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'unstyled',
  },
};

export default Table;
