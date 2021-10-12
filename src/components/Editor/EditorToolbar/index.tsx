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
} from '@/components/Editor/EditorToolbar/types';

/**이 객체는 각 Select Key별로 요소들을 저장해두는 객체이다. dropdown이 보여질때 안에 들어있는 요소들. */
export const dropdownElements: DropdownElementsType = {
  제목: [
    <div data-index="0">제목 1</div>,
    <div data-index="1">소제목 1</div>,
    <div data-index="2">소제목 2</div>,
  ],
};

/* Select를 클릭하면 dropdown 상태에 값이 채워지고 DropDown 컴포넌트가 클릭된 Select 아래에 positioning */
function Dropdown({ dropdown, setCurrent, setDropdown }: EditorDropdownType) {
  /** DropDown 안에 요소가 클릭되면 트리거된다. */
  const onClickElementDropdown = (e: React.MouseEvent) => {
    /** dataset에서 정보를 가져와 */
    const {
      dataset: { index },
    } = e.target as HTMLElement;

    /** 현재 드랍다운 키의 current를 현재 클릭한 DropDown 요소로 변경한다.*/
    setCurrent(prev => ({
      ...prev,
      [`${dropdown.key}`]: dropdown.key && dropdownElements[dropdown.key][index ? +index : 0],
    }));
    /** 요소를 클릭하면 드랍다운은 꺼지게 된다. 처음 상태로 초기화해준다. */
    setDropdown(prev => ({ ...prev, show: false, top: null, left: null, key: null }));
  };
  return (
    <div
      className={styles.dropdownWrapper}
      style={{ top: `${dropdown.top}px`, left: `${dropdown.left}px` }}
      onClick={onClickElementDropdown}
    >
      {dropdown.key && dropdownElements[dropdown.key]}
    </div>
  );
}
/** select. 제목 - 본문 - 색상 - 정렬 */
function EditorToolbarSelect({ label, current, setDropdown }: EditorToolbarSelectType) {
  const ref = useRef<HTMLDivElement>(null);

  /** Select를 클릭하면 DropDown을 열어야 하므로 dropdown의 상태를 변경한다. */
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
  /**dropdown -> 드랍다운 컴포넌트가 가져야할 상태
   * key : 어떤 Select인지
   * top,left : 드랍다운이 띄워질 위치
   * show : 드랍다운이 보여야하는지
   */

  const [dropdown, setDropdown] = useState<EditorDropdownStateType>({
    show: false,
    key: null,
    top: null,
    left: null,
  });
  /**
   * 여러개의 Select가 존재한다.
   * 제목 Select의 경우 현재 요소가 무엇인지
   * 본문 Select의 경우 현재 요소가 무엇인지 ...
   * 를 객체 자료구조의 상태로 관리하게 된다.
   */
  const [current, setCurrent] = useState<CurrentType>({ 제목: dropdownElements.제목[0] });

  return (
    <div className={styles.editorToolbarWrapper}>
      <div className={styles.editorToolbarForm}>
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
      {/* DropDown이 Select 별로 존재하지 않는다. 에디터툴바과 1:1 대응 */}
      {/* Select를 클릭하면 dropdown 상태에 값이 채워지고 DropDown 컴포넌트가 클릭된 Select 아래에 positioning */}
      {dropdown.show && (
        <Dropdown dropdown={dropdown} setCurrent={setCurrent} setDropdown={setDropdown}></Dropdown>
      )}
    </div>
  );
}

export default EditorToolbar;
