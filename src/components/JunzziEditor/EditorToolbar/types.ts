import * as icons from '@/components/Icon/icons';
import React from 'react';
import { dropdownElements } from './index';
export type DropdownElementsKeyType = keyof typeof dropdownElements;

export type DropdownElementsType = {
  제목: React.ReactNodeArray;
};

export type CurrentType = {
  제목: React.ReactNode;
};
export type EditorDropdownStateType = {
  show: boolean;
  key: DropdownElementsKeyType | null;
  top: number | null;
  left: number | null;
};
export type EditorDropdownType = {
  dropdown: EditorDropdownStateType;
  setCurrent: React.Dispatch<React.SetStateAction<CurrentType>>;
  setDropdown: React.Dispatch<React.SetStateAction<EditorDropdownStateType>>;
};
export type EditorToolbarButtonType = {
  icon: keyof typeof icons;
  label: string;
  color?: string;
};

export type EditorToolbarSelectType = {
  label: DropdownElementsKeyType;
  setDropdown: React.Dispatch<React.SetStateAction<EditorDropdownStateType>>;
  current: React.ReactNode;
};
