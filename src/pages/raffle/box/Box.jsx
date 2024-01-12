import React, { useState } from 'react';
import * as S from './style';

function Box() {
  const [activeButton, setActiveButton] = useState('팔로잉');

  const handleButtonClick = (buttonType) => {
    console.log('Button clicked:', buttonType);
    setActiveButton(buttonType);
  };

  return (
    <S.BoxWrapper>
      <S.RaffleTitle>래플 목록</S.RaffleTitle>
      <S.RaffleMenu>
      <SubTitle1 onClick={() => handleSubTitleClick('팔로잉')}>팔로잉</SubTitle1>
        <SubTitle2 onClick={() => handleSubTitleClick('전체')}>전체</SubTitle2>
      </S.RaffleMenu>
      <S.RaffleView>
        <S.RaffleViewTitle>
          {activeButton === '팔로잉'
            ? '회원님의 팔로잉 래플 목록'
            : '회원님의 전체 래플 목록'}
        </S.RaffleViewTitle>
      </S.RaffleView>
    </S.BoxWrapper>
  );
}

export default Box;
