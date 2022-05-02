import { FunctionComponent } from "react";
import Train from "../../../theme/icons/Train";
import Bus from "../../../theme/icons/Bus";
import { InfoContainerWrapper, Name, ShowTable, TextWrapper } from "./style";
import Tram from "../../../theme/icons/Tram";

interface InfoContainerProps {
  icon: "train" | "bus" | "tram";
  name: string;
  onClick: (id: string) => void;
  id: string;
}

const IconMapper = {
  tram: Tram,
  train: Train,
  bus: Bus
}

const InfoContainer: FunctionComponent<InfoContainerProps> = ({ icon, name, id }) => {
  const Icon = IconMapper[icon];
  return (
    <>
      <Name data-test={`title:infoContainer:${name}`}>{name}</Name>
      <InfoContainerWrapper>
        {Icon && <Icon />}
        <TextWrapper>
          <ShowTable id={id} data-test={`cta:infoContainer:${name}`}>show Timetable</ShowTable>
        </TextWrapper>
      </InfoContainerWrapper>
    </>
  )
}

export default InfoContainer;