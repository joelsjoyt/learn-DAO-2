import React from 'react'
import Banner from '../components/Banner'
import CreateProposal  from '../components/CreateProposal'
import Proposals from '../components/Proposal.sjsx'

const Home = () => {
  return (
    <main>
      <Banner/>
      <Proposals/>
      <CreateProposal/>
    </main>
  )
}

export default Home