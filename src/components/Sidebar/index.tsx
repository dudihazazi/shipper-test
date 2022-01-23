import { useEffect } from "react";
import { useRouter } from "next/router";

import List from "./List";
import { SIDEBAR_MENU } from "./constants";
import { Aside, Menu } from "./styles";

interface ISidebar {
  isOpen: boolean;
  handleClose: () => void;
}

export default function Sidebar(props: ISidebar) {
  const { isOpen, handleClose } = props;
  const { pathname } = useRouter();

  useEffect(() => {
    handleClose();
  }, [handleClose, pathname]);

  return (
    <Aside isOpen={isOpen}>
      <Menu>
        {SIDEBAR_MENU.map((menu, idx) => {
          const { title, icon, link } = menu;

          return (
            <List
              key={idx}
              icon={icon}
              link={link}
              title={title}
              isActive={pathname === link}
            />
          );
        })}
      </Menu>
    </Aside>
  );
}
