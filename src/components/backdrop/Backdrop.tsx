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
    <BackdropWrapper shouldShow={ shouldShow }>
      <CloseIconWrapper>
        <Close onClick={ handleBackdropClose } />
      </CloseIconWrapper>
      <Title>
        { title }
      </Title>
      <Subtitle1>
        { subtitle1 }
      </Subtitle1>
      <Subtitle2>
        { subtitle2 }
      </Subtitle2>
      { children }
    </BackdropWrapper>
    )
}

export default Backdrop