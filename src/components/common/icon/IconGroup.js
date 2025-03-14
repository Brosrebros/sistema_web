import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconItem from './IconItem';

const IconGroup = ({ icons, className, ...rest }) => (
  <div className={classNames('icon-group', className)} {...rest}>
    {icons.map((icon, index) => (
      <IconItem {...icon} key={index} />
    ))}
  </div>
);

IconGroup.propTypes = {
  icons: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default IconGroup;
