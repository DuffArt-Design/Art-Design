import React from 'react';
import { Group, Header, Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const navigate = useNavigate();
  
  return (
    <Header height={75} fixed={false} className="header">
      <Group position="apart" className="header__group">
        <h1 className="header__group__title">Duff Art & Design</h1>
        <Group position="right" className="header__group__nav">
          <Tabs className="header__group__nav__segment">
            <Tabs.List>
              <Tabs.Tab
                color="indigo"
                value="home"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                }}
              >
                Home
              </Tabs.Tab>
              <Tabs.Tab
                color="teal"
                value="digital"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/digital');
                }}
              >
                Digital Art
              </Tabs.Tab>
              <Tabs.Tab
                color="lime"
                value="pen_ink"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/pen_ink');
                }}
              >
                Pen & Ink
              </Tabs.Tab>
              <Tabs.Tab
                color="orange"
                value="photos"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/photos');
                }}
              >
                Photos
              </Tabs.Tab>
              <Tabs.Tab
                color="pink"
                value="about"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/about');
                }}
              >
                About
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Group>
      </Group>
    </Header>
  );
}
