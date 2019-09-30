import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import cx from 'classnames';

const DropdownHeader = ({ children, className, ...opts }) => {
  const theme = useTheme();

  return (
    <h5
      css={{
        color: `${theme.fontColor.muted} !important`,
        fontSize: theme.fontSize.xsmall,

        '&:not(:first-of-type)': {
          marginTop: 0,
        },
      }}
      className={cx('CK__DropdownHeader', className)}
      {...opts}
    >
      {children}
    </h5>
  );
};

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default DropdownHeader;
