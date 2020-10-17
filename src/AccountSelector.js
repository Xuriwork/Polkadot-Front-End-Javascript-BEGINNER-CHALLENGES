import React from 'react'
import { Menu, Container, Image, Label } from 'semantic-ui-react'

const Main = () => {
  return (
    <Menu
      attached='top'
      tabular
      style={{
        backgroundColor: '#fff',
        borderColor: '#fff',
        paddingTop: '1em',
        paddingBottom: '1em'
      }}
    >
      <Container>
        <Menu.Menu>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/substrate-logo.png`}
            size='mini'
          />
        </Menu.Menu>
        <Menu.Menu position='right' style={{ alignItems: 'center' }}>
          <Label
            as='a'
            href='https://github.com/CaiYiLiang/Polkablocks-FE-Hackathon'
            color='pink'
            target='_blank'
          > PolkaBlocks - Hello World Hackathon
            <Label.Detail>By Cherry</Label.Detail>
          </Label>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Main
