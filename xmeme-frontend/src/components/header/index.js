import React from 'react'
import { Wrapper, Logo } from './style'
import ToggleTheme from './ToggleTheme'

const Header = () => {
    return(
        <Wrapper>
            <Logo>
                <span className="large">X</span>
                <span className="small">meme</span>
            </Logo>
            <ToggleTheme />
        </Wrapper>
    )
}

export default Header;