import React from 'react';
import styled from 'styled-components';

import * as icons from '@/components/Icon/icons';

type IconOption = keyof typeof icons;
interface IIconProps {
  icon: IconOption;
  color?: string;
  size?: number;
  rotate?: number;
}

const StyledIconWrapper = styled.div<{ width: number; height: number; rotate: number }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  ${props =>
    props.rotate && {
      transform: `rotate(${props.rotate}deg)`,
    }}
`;

const Icon: React.FC<IIconProps> = ({ size, icon, rotate = 0, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <StyledIconWrapper
      {...props}
      rotate={rotate}
      width={size || 24}
      height={size || 24}
      color={props.color}
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
    </StyledIconWrapper>
  );
};

export default Icon;
