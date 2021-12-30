import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Team } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne}  />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Team />
      
    </>
  );
}

export default Home;
