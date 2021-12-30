import React from "react";

import { IconContext } from "react-icons/lib";
import { Img } from "../InfoSection/InfoSection.elements";
import {
  TeamSection,
  TeamWrapper,
  TeamHeading,
  TeamContainer,
  TeamCard,
  TeamCardInfo,
  TeamCardIcon,
  TeamCardName,
  TeamCardDescription,
} from "./Team.elements";

function Team() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1" }}>
      <TeamSection>
        <TeamWrapper>
          <TeamHeading>OUR TEAM</TeamHeading>
          <TeamContainer>
            <TeamCard to=''>
              <TeamCardInfo>
                <TeamCardIcon>
                  <Img
                    src='https://www.degenape.academy/static/media/Monoliff.c1875efb.png'
                    alt=''
                  />
                </TeamCardIcon>

                <TeamCardName>@MONOLIFF</TeamCardName>
                <TeamCardDescription>Art & Design</TeamCardDescription>
              </TeamCardInfo>
            </TeamCard>
            <TeamCard to=''>
              <TeamCardInfo>
                <TeamCardIcon>
                  <Img
                    src='https://www.degenape.academy/static/media/Obo.ca07b9cd.png'
                    alt=''
                  />
                </TeamCardIcon>

                <TeamCardName>@OBOTTIS1</TeamCardName>
                <TeamCardDescription>Project Management</TeamCardDescription>
              </TeamCardInfo>
            </TeamCard>
            <TeamCard to=''>
              <TeamCardInfo>
                <TeamCardIcon>
                  <Img
                    src='https://www.degenape.academy/static/media/Conor.02c32c39.png'
                    alt=''
                  />
                </TeamCardIcon>

                <TeamCardName>@ANGUS</TeamCardName>
                <TeamCardDescription>Development</TeamCardDescription>
              </TeamCardInfo>
            </TeamCard>
          </TeamContainer>
        </TeamWrapper>
      </TeamSection>
    </IconContext.Provider>
  );
}
export default Team;
