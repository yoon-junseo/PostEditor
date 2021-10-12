import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import styles, { dropdownWrapper } from '@/containers/EditorPage/styles/editor.module.scss';
import {
  EditorDropdownType,
  DropdownElementsType,
  EditorToolbarButtonType,
  EditorDropdownStateType,
  CurrentType,
  EditorToolbarSelectType,
} from '@/components/JunzziEditor/EditorToolbar/types';

export const dropdownElements: DropdownElementsType = {
  제목: [
    <div data-index="0">제목 1</div>,
    <div data-index="1">소제목 1</div>,
    <div data-index="2">소제목 2</div>,
  ],
};

function Dropdown({ dropdown, setCurrent, setDropdown }: EditorDropdownType) {
  const onClickElementDropdown = (e: React.MouseEvent) => {
    const {
      dataset: { index },
    } = e.target as HTMLElement;

    setCurrent(prev => ({
      ...prev,
      [`${dropdown.key}`]: dropdown.key && dropdownElements[dropdown.key][index ? +index : 0],
    }));
    setDropdown(prev => ({ ...prev, show: false }));
  };
  return dropdown.show ? (
    <div
      className={styles.dropdownWrapper}
      style={{ top: `${dropdown.top}px`, left: `${dropdown.left}px` }}
      onClick={onClickElementDropdown}
    >
      {dropdown.key && dropdownElements[dropdown.key]}
    </div>
  ) : null;
}
/** select. 제목 - 본문 - 색상 - 정렬 */
function EditorToolbarSelect({ label, current, setDropdown }: EditorToolbarSelectType) {
  const ref = useRef<HTMLDivElement>(null);

  const onClickSelect = () => {
    const el = ref.current;
    const top = el ? el.offsetTop + el.clientHeight : 0;
    const left = el ? el.offsetLeft : 0;
    setDropdown(prev => ({
      ...prev,
      key: label,
      top,
      left,
      show: !prev.show,
    }));
  };
  return (
    <>
      <div className={styles.editorToolbarSelectWrapper} onClick={onClickSelect} ref={ref}>
        <div>
          {current}
          <Icon icon="Tri"></Icon>
        </div>
        <label>{label}</label>
      </div>
    </>
  );
}

/** button. 이미지 - 굵기 - 휘어쓰기 - 밑줄 - 메모지 - 구분선 - 링크 */
function EditorToolbarButton({ icon, label, color }: EditorToolbarButtonType) {
  return (
    <div className={styles.editorToolbarButtonWrapper}>
      <Icon icon={icon}></Icon>
      <label>{label}</label>
    </div>
  );
}

// function EditorToolbarSelect({ icon, text, color }) {}
function EditorToolbar() {
  const [dropdown, setDropdown] = useState<EditorDropdownStateType>({
    show: false,
    key: null,
    top: null,
    left: null,
  });
  // dropdown 이 변하면 -> css의 변수를 변경시키고, dropdown 클래스는 이 변수를 참조하게 하면 된다.
  // https://stackoverflow.com/questions/49402471/how-to-use-javascript-variables-in-css
  const [current, setCurrent] = useState<CurrentType>({ 제목: dropdownElements.제목[0] });

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.editorToolbarWrapper}>
        <EditorToolbarButton icon={'Image'} label="이미지"></EditorToolbarButton>
        <EditorToolbarSelect
          label="제목"
          current={current.제목}
          setDropdown={setDropdown}
        ></EditorToolbarSelect>

        <EditorToolbarButton icon={'Bold'} label="굵기"></EditorToolbarButton>
        <EditorToolbarButton icon={'Italic'} label="휘어쓰기"></EditorToolbarButton>
        <EditorToolbarButton icon={'Underline'} label="밑줄"></EditorToolbarButton>
        <EditorToolbarButton icon={'Memo'} label="메모지"></EditorToolbarButton>
        <EditorToolbarButton icon={'Seperator'} label="구분선"></EditorToolbarButton>
        <EditorToolbarButton icon={'Link'} label="링크"></EditorToolbarButton>
      </div>
      <Dropdown dropdown={dropdown} setCurrent={setCurrent} setDropdown={setDropdown}></Dropdown>
    </div>
  );
}

export default EditorToolbar;
