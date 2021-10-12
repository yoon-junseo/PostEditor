import React from 'react';

import * as icons from '@/components/Icon/icons';
import styles from './icon.module.scss';

type IconOption = keyof typeof icons;
interface IIconProps {
  icon: IconOption;
  color?: string;
  size?: number;
  rotate?: number;
}

const Icon: React.FC<IIconProps> = ({ size, icon, rotate = 0, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        width: `${size || 24}px`,
        height: `${size || 24}px`,
      }}
      color={props.color}
      className={styles.styledIconWrapper}
    >
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: 'currentColor',
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Icon;
