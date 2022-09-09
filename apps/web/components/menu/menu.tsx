import styled from 'styled-components';
import { API } from '../../interfaces/API';

/* eslint-disable-next-line */
export interface MenuProps {
  menu: API['menu'];
}

const StyledMenu = styled.div`
  background: #f4f6fa;
  width: 316px;
  padding: 26px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  .logo {
    padding-bottom: 24px;
  }

  .menu-section {
    padding-bottom: 20px;

    .menu-title {
      color: #7e8895;
      font-weight: 600;
      padding: 8px 0px;
    }

    .menu-item {
      color: #2a2f36;
      padding: 8px 0px;
      font-weight: 500;
    }

    .menu-sub-item {
      color: #878e99;
      padding: 8px 0px;
      padding-left: 20px;
      border-left: 3px solid #eaebef;
    }

    .sub-menu-container {
      //max-height: 1000px;
      //overflow: hidden;
      //max-height: 0px;
    }
  }
`;

export function Menu(props: MenuProps) {
  return (
    <StyledMenu>
      <div className="logo">
        <img
          src="https://cozy-assets.quintoandar.com.br/cozy-static/v2/latest/default/cobranded-logo/default/complete.pt-BR.svg"
          alt=""
        />
      </div>

      <div className="menu-container">
        <div className={'menu-section'}>
          <div className="menu-title">Bem vindo</div>
          <div className="menu-item">
            <a href="">Introdução</a>
          </div>
          <div className="menu-item">
            <a href="">Notas de atualização</a>
          </div>
        </div>

        <div className={'menu-section'}>
          <div className="menu-title">Rotas</div>
          {props.menu.map((menu) => (
            <div>
              <div className="menu-item">{menu.group}</div>
              <div className="sub-menu-container">
                {menu.items.map((item) => (
                  <div className="menu-sub-item">
                    <a href="">{item.name}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledMenu>
  );
}

export default Menu;
