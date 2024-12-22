import React from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import SubtleBadge from 'components/common/SubtleBadge';
import Icon from 'components/common/icon/Icon';

const NavbarVerticalMenuItem = ({ route }) => {
  return (
    <Flex alignItems="center">
      {route.icon && (
        <span className="nav-link-icon ms-0" style={{ paddingLeft: '8px' }}>
          <Icon src={route.icon} width="20px" />
        </span>
      )}
      <span className="nav-link-text ps-1">{route.name}</span>
      {route.badge && (
        <SubtleBadge pill bg={route.badge.type} className="ms-2">
          {route.badge.text}
        </SubtleBadge>
      )}
    </Flex>
  );
};

// prop-types
const routeShape = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
routeShape.children = PropTypes.arrayOf(PropTypes.shape(routeShape));
NavbarVerticalMenuItem.propTypes = {
  route: PropTypes.shape(routeShape).isRequired,
};

export default React.memo(NavbarVerticalMenuItem);
