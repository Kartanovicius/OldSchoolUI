import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { theme } from '../../utils/theme';
import { fontSizes, spacing } from '../../utils/units';

export interface IButton {
  variant?: 'primary' | 'outline'
  color?: 'red' | 'blue' | 'green' | 'orange' | 'yellow'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const buttonSizeProps = {
  small: {
    fontSize: fontSizes['xsmall'],
    padding: `${spacing['xxsmall']} ${spacing['small']}`,
  },
  medium: {
    fontSize: fontSizes['small'],
    padding: `${spacing['xxsmall']} ${spacing['medium']}`,
  },
  large: {
    fontSize: fontSizes['medium'],
    padding: `${spacing['xsmall']} ${spacing['large']}`,
  },
};

const getPropsByVariant = ({ variant, color }: IButton): any => {
  const colorInPalette =  color && theme.palette[color]

  const defaultPrimaryVariantProps = {
    main: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    hover: {
      backgroundColor: theme.palette.primary.light,
    },
    focus: {
      backgroundColor: theme.palette.blue[700],
    },
    active: {
      backgroundColor: theme.palette.blue[700],
    }
  };

  const primaryVariantPropsByPalette = colorInPalette && {
    main: {
      backgroundColor: colorInPalette[600],
      color: theme.palette.primary.contrastText,
    },
    hover: {
      backgroundColor: colorInPalette[400],
    },
    focus: {
      backgroundColor: colorInPalette[700],
    },
    active: {
      backgroundColor: colorInPalette[700],
    }
  };

  const defaultOutlineVariantProps = {
    main: {
      backgroundColor: theme.palette.surface.light,
      color: theme.palette.surface.contrastText,
    },
    hover: {
      color: theme.palette.primary.light,
    },
    focus: {
      color: theme.palette.blue[700],
    },
    active: {
      color: theme.palette.blue[700],
    }
  };

  const outlineVariantPropsByPalette = colorInPalette && {
    main: {
      color: colorInPalette[600],
    },
    hover: {
      color: colorInPalette[400],
      backgroundColor: theme.palette.surface.hover,
    },
    focus: {
      color: colorInPalette[700],
    },
    active: {
      color: colorInPalette[700],
    }
  };

  const variants = {
    primary: colorInPalette ? primaryVariantPropsByPalette : defaultPrimaryVariantProps,
    outline: colorInPalette ? outlineVariantPropsByPalette : defaultOutlineVariantProps,
  };

  return variant ? variants[variant] : variants['primary']
};

const StyledButton = ({
  variant,
  color,
  size,
  disabled,
}: IButton) => {

  const propsByVariant = getPropsByVariant({ variant, color });
  const sizeByProps = size ? buttonSizeProps[size] : buttonSizeProps['medium']

  return {
    fontWeight: 400,
    cursor: 'pointer',
    opacity: disabled && 0.4,
    filter: disabled && 'grayscale(100%)',
    border: `1px inset ${theme.palette.surface.main}`,
      ...sizeByProps,
    ...(propsByVariant && propsByVariant.main),
    '&:hover': !disabled && {
      border: `1px outset ${theme.palette.surface.main}`,
      ...(propsByVariant && propsByVariant.hover),
    },
    '&:focus': !disabled && {
      ...(propsByVariant && propsByVariant.focus),
    },
    '&:active': !disabled && {
      border: `1px dashed ${theme.palette.surface.main}`,
      ...(propsByVariant && propsByVariant.active),
    }
  };
};

const IGNORED_PROPS = ['color'];

const buttonConfig = {
  shouldForwardProp: (prop: string) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop)
};

export const Button = styled('button', buttonConfig)(StyledButton);