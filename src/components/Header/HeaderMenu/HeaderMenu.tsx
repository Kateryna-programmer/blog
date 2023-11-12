import { useEffect, useState } from 'react';
import {
  Tabs,
  Tab,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import { initSlider } from 'js/main';
import { useNavigate } from 'react-router-dom';
import classes from './HeaderMenu.module.scss';

type Props = {
  hasLikedArticles: boolean;
  likedCount: number;
};

const HeaderMenu = ({ hasLikedArticles, likedCount }: Props) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      initSlider();
    }
  }, [location.pathname]);

  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Tabs>
        <Tab
          sx={{
            display: { xs: 'block', lg: 'none' },
            padding: '0px 15px',
          }}
          icon={<MenuIcon />}
          onClick={toggleDrawer(true)}
        />

        <Tab
          sx={{
            padding: '0px 15px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Home"
          component={NavLink}
          to="/"
          className={`${classes.menuItem} ${
            location.pathname === '/' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/')}
        />
        <Tab
          sx={{
            padding: '0px 15px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Fashion"
          component={NavLink}
          to="/fashion"
          className={`${classes.menuItem} ${
            location.pathname === '/fashion' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/fashion')}
        />
        <Tab
          sx={{
            padding: '0px 15px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Health"
          component={NavLink}
          to="/health"
          className={`${classes.menuItem} ${
            location.pathname === '/health' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/health')}
        />
        <Tab
          sx={{
            padding: '0px 15px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Astrology"
          component={NavLink}
          to="/astrology"
          className={`${classes.menuItem} ${
            location.pathname === '/astrology' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/astrology')}
        />
        <Tab
          sx={{
            padding: '0px 15px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Psychology"
          component={NavLink}
          to="/psychology"
          className={`${classes.menuItem} ${
            location.pathname === '/psychology' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/psychology')}
        />
        <Tab
          sx={{
            padding: '0px 15px 5px 35px',
            display: { xs: 'none', lg: 'flex' },
          }}
          label="Favorites"
          icon={
            hasLikedArticles ? (
              <>
                <FavoriteIcon sx={{ color: 'red', marginLeft: '10px' }} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: '18px', color: '#1976d2' }}
                >
                  {' '}
                  {likedCount}
                </Typography>
              </>
            ) : (
              <FavoriteBorderIcon />
            )
          }
          iconPosition="end"
          component={NavLink}
          to="/favorites"
          className={`${classes.menuItem} ${
            location.pathname === '/favorites' ? classes.activeLink : ''
          }`}
          onClick={() => handleTabClick('/favorites')}
        />
      </Tabs>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem
            component={NavLink}
            to="/"
            onClick={toggleDrawer(false)}
            className={location.pathname === '/' ? classes.activeLink : ''}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            component={NavLink}
            to="/fashion"
            onClick={toggleDrawer(false)}
            className={
              location.pathname === '/fashion' ? classes.activeLink : ''
            }
          >
            <ListItemText primary="Fashion" />
          </ListItem>
          <ListItem
            component={NavLink}
            to="/health"
            onClick={toggleDrawer(false)}
            className={
              location.pathname === '/health' ? classes.activeLink : ''
            }
          >
            <ListItemText primary="Health" />
          </ListItem>
          <ListItem
            component={NavLink}
            to="/astrology"
            onClick={toggleDrawer(false)}
            className={
              location.pathname === '/astrology' ? classes.activeLink : ''
            }
          >
            <ListItemText primary="Astrology" />
          </ListItem>
          <ListItem
            component={NavLink}
            to="/psychology"
            onClick={toggleDrawer(false)}
            className={
              location.pathname === '/psychology' ? classes.activeLink : ''
            }
          >
            <ListItemText primary="Psychology" />
          </ListItem>
          <ListItem
            component={NavLink}
            to="/favorites"
            onClick={toggleDrawer(false)}
            className={
              location.pathname === '/favorites' ? classes.activeLink : ''
            }
          >
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
