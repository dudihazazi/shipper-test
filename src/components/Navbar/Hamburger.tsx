import { BtnHamburger } from "./styles";

interface IHamburger {
  isOpen: boolean;
  handleOpen: () => void;
}

export default function Hamburger(props: IHamburger) {
  const { isOpen, handleOpen } = props;

  return (
    <BtnHamburger isOpen={isOpen} onClick={handleOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </BtnHamburger>
  );
}
