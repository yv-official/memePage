import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { WbSunny, Brightness2Outlined } from '@material-ui/icons'
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme} title={theme==='light'? 'Dark Mode' : 'Light Mode'} theme={theme}>
      {theme === 'light' ? <Brightness2Outlined  /> : <WbSunny style={{ color: 'white'}} title='Light Mode' />}
    </Wrapper>
  );
};

export default ToggleTheme;
