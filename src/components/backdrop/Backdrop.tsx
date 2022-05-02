import { FunctionComponent } from "react"
import Close from "../../theme/icons/Close"
import { BackdropWrapper, CloseIconWrapper, Title, Subtitle1, Subtitle2 } from "./style"

export interface BackdropProps {
  shouldShow: boolean;
  handleBackdropClose: () => void;
  children?: any
  title: string | undefined;
  subtitle1: string | number;
  subtitle2: string | number;
}

const Backdrop: FunctionComponent<BackdropProps> = ({
  shouldShow,
  handleBackdropClose,
  children,
  title,
  subtitle1,
  subtitle2
}) => {

  return (
    <BackdropWrapper shouldShow={ shouldShow } data-test="container:backdrop">
      <CloseIconWrapper data-test="icon:backdrop:close">
        <Close onClick={ handleBackdropClose } />
      </CloseIconWrapper>
      <Title data-test={`title:backdrop`}>
        { title }
      </Title>
      <Subtitle1 data-test={`subtitle1:backdrop`}>
        { subtitle1 }
      </Subtitle1>
      <Subtitle2 data-test={`subtitle2:backdrop`}>
        { subtitle2 }
      </Subtitle2>
      { children }
    </BackdropWrapper>
    )
}

export default Backdrop