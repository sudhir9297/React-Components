import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BsPatchExclamation,
  BsTag,
  BsReceipt,
  BsShop,
  BsCalendarCheck,
  BsStickies,
  BsCheck2,
  BsCardList,
  BsChatSquareText,
} from 'react-icons/bs';
import { IoSettingsOutline, IoChevronBackOutline } from 'react-icons/io5';
import { CgInfinity } from 'react-icons/cg';

const IconContainer = ({ children, isActive }) => {
  return <IconWrap isActive={isActive}>{children}</IconWrap>;
};

const TextContainer = ({ children }) => {
  return <Text>{children}</Text>;
};

const NotificationContainer = ({ color, notifiNumber }) => {
  return <NotificationBox color={color}>{notifiNumber}</NotificationBox>;
};

const SingleTab = ({ item, isActive, isShrink, handleClick }) => {
  return (
    <TabWrapper isActive={isActive} onClick={handleClick}>
      <IconContainer isActive={isActive}>{item.icon()}</IconContainer>
      <TabTextWrapper isShrink={isShrink}>
        <TextContainer>{item.name}</TextContainer>
        {item.isNotifiTab && (
          <NotificationContainer
            notifiNumber={item.notifiNumber}
            color={item.notifiColor}
          />
        )}
      </TabTextWrapper>
    </TabWrapper>
  );
};

const SingleCollapsable = ({ item, isActive, isShrink, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickFunction = () => {
    setIsOpen(!isOpen);
    handleClick();
  };

  return (
    <SingleCollapsableWrapper>
      <TabWrapper isActive={isActive} onClick={handleClickFunction}>
        <IconContainer isActive={isActive}>{item.icon()}</IconContainer>
        <TabTextWrapper isShrink={isShrink}>
          <TextContainer>{item.name}</TextContainer>
          <RoundIconWrapper isOpen={isOpen}>
            <IoChevronBackOutline />
          </RoundIconWrapper>
        </TabTextWrapper>
      </TabWrapper>
      <SubContentWrapper isOpen={isOpen}>
        {item.subItems.map((o, idx) => (
          <SubWrapper>
            <DotWrapper isLast={idx === item.subItems.length - 1}>
              <DotIcon />
            </DotWrapper>
            <SubTextWrapper isShrink={isShrink}>
              <TextContainer>{o.subName}</TextContainer>
              {o.notifiNumber === 0 ? (
                <BsCheck2 color={'#6EE1A1'} />
              ) : (
                <span>{o.notifiNumber}</span>
              )}
            </SubTextWrapper>
          </SubWrapper>
        ))}
      </SubContentWrapper>
    </SingleCollapsableWrapper>
  );
};

function App() {
  const [isShrinkView, setIsShrinkView] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const TabList1 = [
    {
      id: 1,
      name: 'Dashboard',
      isNotifiTab: false,
      icon: BsShop,
    },
    {
      id: 2,
      name: 'Project Task',
      isNotifiTab: false,
      icon: BsCalendarCheck,
    },
    {
      id: 3,
      name: 'Schedule',
      isNotifiTab: false,
      icon: BsReceipt,
    },
    {
      id: 4,
      name: 'Document',
      isNotifiTab: true,
      icon: BsStickies,
      notifiNumber: 6,
      notifiColor: '#A2B9EF',
    },
    {
      id: 5,
      name: 'Mention',
      isNotifiTab: true,
      icon: BsTag,
      notifiNumber: 2,
      notifiColor: '#EFD0A2',
    },
    {
      id: 6,
      name: 'Files',
      isNotifiTab: true,
      icon: BsCardList,
      subItems: [
        {
          id: 11,
          subName: 'Recent',
          notifiNumber: 8,
        },
        {
          id: 22,
          subName: 'Sent',
          notifiNumber: 2,
        },
        {
          id: 33,
          subName: 'Uploaded',
          notifiNumber: 0,
        },
        {
          id: 44,
          subName: 'Draft',
          notifiNumber: 4,
        },
        {
          id: 55,
          subName: 'Deleted',
          notifiNumber: 8,
          Icon: CgInfinity,
        },
      ],
    },
    {
      id: 7,
      name: 'Teams',
      isNotifiTab: false,
      icon: BsChatSquareText,
    },
  ];

  const TabList2 = [
    {
      id: 8,
      name: 'Help',
      isNotifiTab: false,
      icon: BsPatchExclamation,
    },
    {
      id: 9,
      name: 'Setting',
      isNotifiTab: false,
      icon: IoSettingsOutline,
    },
  ];

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  const handleActive = (id) => {
    setActiveTab(id);
  };

  return (
    <AppContainer>
      <SideBarContainer isShrink={isShrinkView}>
        <SideBarButton onClick={handleSidebarView} isShrink={isShrinkView}>
          <IoChevronBackOutline />
        </SideBarButton>
        <LogoWrapper>
          <Logo>
            <CgInfinity />
          </Logo>
          <LogoText isShrink={isShrinkView}>
            <span>Infinity</span>Space
          </LogoText>
        </LogoWrapper>
        <SideTabWrapper>
          <TopWrapper>
            {TabList1.map((o) =>
              o.subItems ? (
                <SingleCollapsable
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              ) : (
                <SingleTab
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              )
            )}
          </TopWrapper>
          <BottomWrapper>
            {TabList2.map((o) =>
              o.subItems ? (
                <SingleCollapsable
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              ) : (
                <SingleTab
                  item={o}
                  isShrink={isShrinkView}
                  isActive={activeTab === o.id}
                  handleClick={() => handleActive(o.id)}
                />
              )
            )}
          </BottomWrapper>
        </SideTabWrapper>
      </SideBarContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #c2cecb;
`;

const SideBarContainer = styled.div`
  position: relative;

  height: 80vh;
  border-right: 1px solid #e6e6e6;
  background-color: #fdfdfd;

  box-sizing: border-box;
  padding: 15px;
  font-family: 'DM Sans', sans-serif;

  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;

  width: ${({ isShrink }) => (isShrink ? '75px' : '240px')};
  border-radius: ${({ isShrink }) => (isShrink ? '4px' : '8px')};
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 30px;
  column-gap: 0.75rem;
  overflow: hidden;
  padding: 0 2px;
`;
const Logo = styled.div`
  background-color: #2c2e32;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  padding: 5px;
  box-sizing: border-box;

  svg {
    width: 100%;
    height: 100%;
    color: #fff;
  }
`;
const LogoText = styled.div`
  font-size: 20px;
  opacity: ${({ isShrink }) => (isShrink ? '0' : '1')};

  transition: all 0.4s ease;
  span {
    font-weight: 600;
  }
`;

const SideBarButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  width: 20px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  top: 4vh;
  right: -10px;
  transition: all 0.4s ease;

  transform: ${({ isShrink }) =>
    isShrink ? 'rotate(180deg)' : 'rotate(0deg)'};

  :hover {
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    transition: all 0.4s ease;
  }
`;

const RoundIconWrapper = styled.button`
  cursor: pointer;
  background-color: #f1f1f1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  border: none;
  transition: all 0.4s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
  box-shadow: rgba(255, 255, 255, 0.5) 0px 2px 8px 0px;
`;

const SideTabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TopWrapper = styled.div`
  flex: 1 1 auto;
`;

const BottomWrapper = styled.div`
  flex: 0 1 auto;
`;
const TabWrapper = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content auto;

  column-gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
  margin: 5px 0;

  background-color: ${({ isActive }) => (isActive ? '#EFEFEF' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#2c2e32' : '#8b8d91')};
  transition: all 0.4s ease;

  :hover {
    transition: all 0.4s ease;
    background-color: #efefef;
  }
`;
const IconWrap = styled.div`
  font-size: 1.25rem;
  aspect-ratio: 1;
  padding: 0;

  svg {
    transition: all 0.4s ease;
    color: ${({ isActive }) => (isActive ? '#2c2e32' : '#8b8d91')};
  }
`;

const TabTextWrapper = styled.div`
  width: 100%;
  display: flex;
  opacity: ${({ isShrink }) => (isShrink ? '0' : '1')};
  justify-content: space-between;
  transition: all 0.4s ease;
  white-space: nowrap;
`;
const Text = styled.div`
  font-size: 14px;
`;
const NotificationBox = styled.div`
  width: 20px;
  height: 20px;
  aspect-ratio: 1;
  font-size: 12px;
  border-radius: 3px;
  display: grid;
  place-items: center;
  font-weight: 600;
  background-color: ${({ color }) => color};
  color: #2c2e32;
`;

const SingleCollapsableWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const SubContentWrapper = styled.div`
  height: auto;
  max-height: ${({ isOpen }) => (isOpen ? '120px' : '0px')};
  transition: all 0.4s ease;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: thin;
  scrollbar-color: #000;

  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`;
const SubWrapper = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;

  column-gap: 0.75rem;
  padding: 0 0.85rem;
  height: 30px;
`;
const DotWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;

  :after {
    content: '';
    height: 100%;
    background-color: #e7e7ea;
    width: 2px;

    position: absolute;
    top: 50%;
    left: 2px;
    display: ${({ isLast }) => (isLast ? 'none' : 'block')};
  }
`;

const DotIcon = styled.span`
  width: 6px;
  height: 6px;
  background-color: #e7e7ea;
  border-radius: 50%;
  position: relative;
`;
const SubTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #8b8d91;
  font-weight: 500;
  opacity: ${({ isShrink }) => (isShrink ? '0' : '1')};
  transition: all 0.4s ease;
  white-space: nowrap;

  span {
    font-size: 14px;
    width: 15px;
  }
`;
