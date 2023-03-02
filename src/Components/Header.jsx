import React, { useState } from 'react';
import { Burger, Drawer, Image, Group, Header, NavLink, Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


export default function HeaderComponent() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const title = opened ? 'Close navigation' : 'Open navigation';

  const handleNavClick = (value) => {
    setActive(value);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(value === 'home') {
      value = '';
    }
    navigate('/' + value);
  }

  return (
    <Header height={75} fixed={false} className="header">
      <Group position="center" className="header__group">

        <Image
        src="https://res.cloudinary.com/dyatwpbwb/image/upload/v1677707487/assets/Logo_with_Tree_Background_Bigger_gsh5oy.png"
        height={40}
        width={40}
        />
        <h1 className="header__group__title">Duff Art & Design</h1>
        <Group position="right" className="header__group__nav">
          <Tabs className="header__group__nav__segment" variant="pills" defaultValue="home" radius="xs">
            <Tabs.List>
              <Tabs.Tab
                color="dark"
                value="home"
                icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                  <path d="M10 12h4v4h-4z"></path>
                </svg>}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                  setActive('home');
                }}
              >
                Home
              </Tabs.Tab>
              <Tabs.Tab
                color="dark"
                value="digital"
                icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                  <path d="M7 20l10 0"></path>
                  <path d="M9 16l0 4"></path>
                  <path d="M15 16l0 4"></path>
                </svg>}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/digital');
                  setActive('digital');
                }}
              >
                Digital Art
              </Tabs.Tab>
              <Tabs.Tab
                color="dark"
                value="pen_ink"
                icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                  <path d="M13.5 6.5l4 4"></path>
                </svg>}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/pen_ink');
                  setActive('pen_ink');
                }}
              >
                Pen & Ink
              </Tabs.Tab>
              <Tabs.Tab
                color="dark"
                value="photos"
                icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                  <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/photos');
                  setActive('photos');
                }}
              >
                Photos
              </Tabs.Tab>
              <Tabs.Tab
                color="dark"
                value="about"
                icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                </svg>}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/about');
                  setActive('about');
                }}
              >
                About
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            color="#FFFFFF"
            size="md"
            className="header__group__nav__burger"
          />
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Duff Art & Design"
            padding="xl"
            size="sm"
            position="right"
            overlayOpacity={0.55}
            overlayBlur={3}
          >
            <NavLink
              variant="filled"
              color="dark"
              label='Home'
              active={'home' === active}
              icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M10 12h4v4h-4z"></path>
              </svg>}
              onClick={() => {
                handleNavClick('home')
              }}
            />
            <NavLink
              variant="filled"
                color="dark"
              label="Digital Art"
              active={'digital' === active}
              icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                <path d="M7 20l10 0"></path>
                <path d="M9 16l0 4"></path>
                <path d="M15 16l0 4"></path>
              </svg>}
              onClick={() => {
                handleNavClick('digital')
              }}
            />
            <NavLink
              variant="filled"
                color="dark"
              label="Pen & Ink"
              active={'pen_ink' === active}
              icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </svg>}
              onClick={() => {
                handleNavClick('pen_ink')
              }}
            />
            <NavLink
              variant="filled"
                color="dark"
              label="Photos"
              active={'photos' === active}
              icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              </svg>}
              onClick={() => {
                handleNavClick('photos')
              }}
            />
            <NavLink
              variant="filled"
                color="dark"
              label="About"
              active={'about' === active}
              icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
              </svg>}
              onClick={() => {
                handleNavClick('about')
              }}
            />
          </Drawer>

        </Group>
      </Group>
    </Header>
  );
}
