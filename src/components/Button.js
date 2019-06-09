import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { misc } from '../assets/styles/utility';
import { StylesIconVariables } from './Icon';
import Loader from './Loader';

const StylesButtonVariables = () => ({
  borderWidth: 2,
});

export const StylesButtonBase = (theme, props = {}) => [
  {
    // 1. Correct inability to style clickable `input` types in iOS.
    // 2. Remove margins in Chrome, Safari and Opera.
    // 3. Normalizes styles for `button`.
    // 4. Address `overflow` set to `hidden` in IE 8/9/10/11.
    // 5. Correct `font` properties and `color` not being inherited for `button`.
    // 6. Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE
    // 7. Style
    // 8. `line-height` is used to create a height
    // 9. `min-height` is necessary for `input` elements in Firefox and Opera because `line-height` is not working.
    // 10. Reset button group whitespace hack
    // 11. Required for `a`.
    // 12. Do not wrap buttons
    // 13. Disable `user-select`
    // 14. Removes inner padding and border in Firefox 4+.

    // 1
    appearance: 'none',
    // 2
    margin: '0',
    // 3
    border: `${StylesButtonVariables().borderWidth}px solid transparent`,
    // 4
    overflow: 'visible',
    // 5
    font: 'inherit',
    fontWeight: theme.fontWeight.bold,
    fontFamily: theme.fontFamily.heading,
    color: theme.fontColor.base,
    // 6
    textTransform: 'uppercase',
    // 7
    display: 'inline-block',
    padding: `0 ${theme.space.medium}px`,
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: theme.height.base / 2,
    transition: `all ${theme.timing.base} ${theme.transition.base}`,
    backgroundSize: '100% 100%',
    position: 'relative',
    letterSpacing: theme.letterSpacing.medium,
    // 8
    lineHeight: `${theme.height.base
      - StylesButtonVariables().borderWidth * 2}px`,
    // 9
    height: theme.height.base,
    // 10
    fontSize: theme.fontSize.small,
    // 11
    textDecoration: 'none',
    textAlign: 'center',
    // 12
    whiteSpace: 'nowrap',
    // 13
    userSelect: 'none',

    '&:hover, &:focus, &:active': {
      color: theme.fontColor.base,
    },

    // 14
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0,
    },

    '&[disabled]': {
      opacity: theme.opacity.base,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },

  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      color: theme.contrast.base,

      '&:hover, &:focus, &:active': {
        color: theme.contrast.base,
      },
    },
  },
];

export const StylesButtonSmall = theme => ({
  padding: `0 ${theme.space.base}px`,
  height: theme.height.small,
  lineHeight: `${theme.height.small
    - StylesButtonVariables().borderWidth * 2}px`,
});

export const StylesButtonXsmall = theme => ({
  padding: `0 ${theme.space.base}px`,
  fontSize: theme.fontSize.xsmall,
  height: theme.height.xsmall,
  lineHeight: `${theme.height.xsmall
    - StylesButtonVariables().borderWidth * 2}px`,
});

export const StylesButtonDefault = (theme, props = {}) => [
  {
    background: theme.color.light.base,
    borderColor: theme.fontColor.base,
    color: theme.fontColor.base,

    '&:hover, &:focus, &:active': {
      color: theme.fontColor.base,
    },
  },

  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      background: 'transparent',
      color: theme.contrast.base,
      borderColor: theme.contrast.base,

      '&:hover, &:focus, &:active': {
        color: theme.contrast.base,
      },
    },
  },
];

export const StylesButtonOutlinePrimary = (theme, props = {}) => [
  {
    background: theme.color.light.base,
    borderColor: theme.color.primary.base,
    color: theme.fontColor.base,

    '&:hover, &:focus, &:active': {
      color: theme.fontColor.base,
    },
  },
  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      color: theme.fontColor.base,

      '&:hover, &:focus, &:active': {
        color: theme.fontColor.base,
      },
    },
  },
];

export const StylesButtonPrimary = (theme, props = {}) => [
  {
    background: theme.color.primary.base,
    borderColor: theme.color.primary.base,
    color: theme.contrast.base,

    '&:hover, &:focus, &:active': {
      color: theme.contrast.base,
    },
  },
  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      background: theme.contrast.base,
      borderColor: theme.contrast.base,
      color: theme.color.primary.base,

      '&:hover, &:focus, &:active': {
        color: theme.color.primary.base,
      },
    },
  },
];

export const StylesButtonSecondary = (theme, props = {}) => [
  {
    background: theme.fontColor.base,
    borderColor: theme.fontColor.base,
    color: theme.contrast.base,

    '&:hover, &:focus, &:active': {
      color: theme.contrast.base,
    },
  },
  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      background: theme.contrast.base,
      borderColor: theme.contrast.base,
      color: theme.fontColor.base,

      '&:hover, &:focus, &:active': {
        color: theme.fontColor.base,
      },
    },
  },
];

export const StylesButtonDanger = (theme, props = {}) => [
  {
    background: theme.color.danger.base,
    borderColor: theme.color.danger.base,
    color: theme.contrast.base,

    '&:hover, &:focus, &:active': {
      color: theme.contrast.base,
    },
  },
  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      background: theme.contrast.base,
      borderColor: theme.contrast.base,
      color: theme.color.danger.base,

      '&:hover, &:focus, &:active': {
        color: theme.color.danger.base,
      },
    },
  },
];

export const StylesButtonTeal = (theme, props = {}) => [
  {
    background: theme.brand.teal,
    borderColor: theme.brand.teal,
    color: theme.contrast.base,

    '&:hover, &:focus, &:active': {
      color: theme.contrast.base,
    },
  },
  theme.settings.contrast
    && theme.settings.buttonContrast
    && !props.noContrast && {
    '.u-contrast &': {
      background: theme.contrast.base,
      borderColor: theme.contrast.base,
      color: theme.brand.teal,

      '&:hover, &:focus, &:active': {
        color: theme.brand.teal,
      },
    },
  },
];

export const StylesButtonIconOnly = (theme, props = {}) => [
  {
    padding: 0,
    width: theme.height.base,

    svg: {
      width: StylesIconVariables.large,
      height: StylesIconVariables.large,
    },
  },
  props.size === 'small' && {
    width: theme.height.small,
  },
  props.size === 'xsmall' && {
    width: theme.height.xsmall,

    svg: {
      width: StylesIconVariables.base,
      height: StylesIconVariables.base,
    },
  },
];

//
// <button> reset
//
export const StylesButtonReset = {
  // 1. Remove default browser appearance for buttons.
  // 2. Remove margins.
  // 3. Remove borders for IE.
  // 4. Normalize font and color  not inherited by `button`.
  // 5. Address `overflow` in IE
  // 6. Normalize cursor style
  // 7. Normalize line-height
  // 8. Normalize text-align
  // 9. Remove inner padding and border in Firefox 4+.

  // 1
  appearance: 'none',
  background: 'none',
  // 2
  padding: '0',
  margin: '0',
  // 3
  borderWidth: '0',
  // 4
  font: 'inherit',
  textDecoration: 'none',
  color: 'inherit',
  // 5
  overflow: 'visible',
  // 6
  cursor: 'pointer',
  // 7
  lineHeight: 'normal',
  // 8
  textAlign: 'inherit',

  // 9
  '&::-moz-focus-inner': {
    border: 0,
    padding: 0,
  },
};

const Button = forwardRef(
  (
    {
      active,
      actionType,
      as,
      children,
      disabled,
      fullWidth,
      iconOnly,
      loading,
      noContrast,
      noRadius,
      size,
      type,
      url,
      ...opts
    },
    ref,
  ) => {
    let Component = as;

    const buttonProps = {
      disabled: disabled || loading,
      ref,
      ...opts,
    };

    if (url) {
      buttonProps.href = url;
      Component = 'a';
    }

    if (Component !== 'a') {
      buttonProps.type = actionType;
    }

    return (
      <Component
        css={theme => [
          type !== 'reset' && StylesButtonBase(theme, { noContrast }),
          type === 'reset' && StylesButtonReset,
          size === 'small' && StylesButtonSmall(theme),
          size === 'xsmall' && StylesButtonXsmall(theme),
          type === 'default' && StylesButtonDefault(theme, { noContrast }),
          type === 'outlinePrimary'
            && StylesButtonOutlinePrimary(theme, { noContrast }),
          type === 'primary' && StylesButtonPrimary(theme, { noContrast }),
          type === 'secondary' && StylesButtonSecondary(theme, { noContrast }),
          type === 'danger' && StylesButtonDanger(theme, { noContrast }),
          type === 'teal' && StylesButtonTeal(theme, { noContrast }),
          iconOnly && StylesButtonIconOnly(theme, { size }),
          fullWidth && {
            width: '100%',
          },
          noRadius && {
            borderRadius: 0,
          },
        ]}
        {...buttonProps}
      >
        {type === 'reset' ? (
          children
        ) : (
          <span css={{ color: loading && 'transparent' }}>{children}</span>
        )}
        {loading && type !== 'reset' && (
          <Loader
            css={[
              misc.absoluteCenter,
              {
                width: StylesIconVariables.large,
                height: StylesIconVariables.large,
              },
            ]}
          />
        )}
      </Component>
    );
  },
);

Button.propTypes = {
  active: PropTypes.bool,
  actionType: PropTypes.oneOf(['button', 'submit', 'reset']),
  /* Useful for frameworks like NextJs */
  as: PropTypes.oneOf(['button', 'a']),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconOnly: PropTypes.bool,
  /** Re-uses the Loader component */
  loading: PropTypes.bool,
  noContrast: PropTypes.bool,
  noRadius: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'xsmall', 'small']),
  /** reset is used for elements that have no direct path attached to them; to ensure we keep our markup semantic and accessible. */
  type: PropTypes.oneOf([
    'reset',
    'default',
    'primary',
    'secondary',
    'teal',
    'danger',
    'outlinePrimary',
  ]),
  url: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  actionType: 'button',
};

export default Button;
