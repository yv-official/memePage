import { setRef } from '@material-ui/core'
import { useState, useEffect } from 'react'
import CreateMeme from './CreateMeme'
import RenderMeme from './RenderMeme'
import { Wrapper } from './style'

const HomePage = () => {
    const [ refresh, setRefresh ] = useState(false)

    return(
        <Wrapper>
            <CreateMeme refresh={refresh} setRefresh={setRefresh} />
            <RenderMeme refresh={refresh} setRefresh={setRefresh} />
        </Wrapper>
    )
}

export default HomePage