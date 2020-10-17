import React, { createRef } from 'react'
import {
  Container,
  Dimmer,
  Loader,
  Grid,
  Sticky,
  Message
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { SubstrateContextProvider, useSubstrate } from './substrate-lib'
import { DeveloperConsole } from './substrate-lib/components'

import AccountSelector from './AccountSelector'
import BlockNumber from './BlockNumber'
import BlockInfo from './BlockInfo'
import BlockInfoBySeach from './BlockInfoBySeach'
import Metadata from './Metadata'
import NodeInfo from './NodeInfo'

export const Main = () => {
  const { apiState, keyringState, apiError } = useSubstrate()

  const loader = (text) => (
    <Dimmer active>
      <Loader size='small'>{text}</Loader>
    </Dimmer>
  )

  const message = (err) => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header='Error Connecting to Substrate'
          content={`${err}`}
        />
      </Grid.Column>
    </Grid>
  )

  if (apiState === 'ERROR') return message(apiError)
  else if (apiState !== 'READY') return loader('Connecting to Substrate')

  if (keyringState !== 'READY') {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    )
  }

  const contextRef = createRef()

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <AccountSelector />
      </Sticky>
      <Container>
        <Grid stackable columns='equal'>
          <Grid.Row stretched>
            <NodeInfo />
            <Metadata />
            <BlockNumber />
            <BlockNumber finalized />
          </Grid.Row>
          <Grid.Row stretched>
            <BlockInfo />
          </Grid.Row>
          <Grid.Row stretched>
            <BlockInfoBySeach />
          </Grid.Row>
        </Grid>
      </Container>
      <DeveloperConsole />
    </div>
  )
}

export const App = () => {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  )
}

export default App
