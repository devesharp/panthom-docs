import styled from 'styled-components';
import classNames from "classnames";

/* eslint-disable-next-line */
export interface BodyViewerProps {
  body: any;
}

const StyledBodyViewer = styled.div`
  color: #7E8895;
  word-break: break-all;

  .header-body {
    color: #7E8895;
    display: flex;
    border-bottom: 1px solid #EAEBEF;
    padding: 10px 0px;
    font-weight: 600;

    .header-atribute {
      flex: 3;
    }

    .header-description {
      flex: 4;
    }
  }

  .item-container {
    position: relative;

    .item-body {
      display: flex;
      width: 100%;
      padding: 8px 0px;

      .item-type {
        background: #7CC9A3;
        color: white;
        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;
        display: inline-block;
        padding: 2px 5px;
      }

      &:before {
        content: '';
        height: 100%;
        width: 1px;
        background: rgb(164 164 198);
        left: 0px;
        top: 20px;
        z-index: 1;
        position: absolute;
      }

      &:after {
        content: '';
        height: 20px;
        width: 1px;
        background: rgb(164 164 198);
        left: 0px;
        top: 0px;
        z-index: 1;
        position: absolute;
      }

      .item-key {
        flex: 3;

        .item-text {
          position: relative;
          padding-left: 14px;

          &:before {
            content: '';
            height: 1px;
            width: 10px;
            background: rgb(164 164 198);
            left: 0px;
            top: 50%;
            z-index: 1;
            position: absolute;
          }
        }
      }

      &.first {
        &:after {
          content: none;
        }
      }

      &.last {
        &:before {
          content: none;
        }
      }

      .item-value {
        flex: 4;
        padding-bottom: 8px;
        border-bottom: 1px solid #EAEBEF;
      }
    }

    .children {
      margin: 10px 0px;
      padding: 10px 15px;
      margin-left: 15px;
      background: rgb(250, 250, 250);

      &.alternative {
        background: white;
      }
    }
  }
`;

export function BodyViewer(props: BodyViewerProps) {
  return (
    <StyledBodyViewer>
      <div className="header-body">
        <div className="header-atribute">
          Atributo
        </div>
        <div className="header-description">
          Descrição
        </div>
      </div>

      <ViewObject content={props.body.content["application/json"].schema.properties} />

    </StyledBodyViewer>
  );
}

function ViewObject({content, alternative}: any): any {
  return Object.entries(content).map(([key, value]: any, index) => {
    const first = index === 0;
    const last = index === Object.entries(content).length - 1;

    if (value.type === 'object') {
      return (
        <div className={classNames('item-container')}>
          <ItemKey name={key} value={value} first={first} last={last} />
          <div className={classNames('children', alternative && 'alternative')}>
            <ViewObject content={value.properties} alternative={!alternative} />
          </div>
        </div>
      );
    }else {
      return (
        <div className={'item-container'}>
          <ItemKey name={key} value={value} first={first} last={last} />
        </div>
      );
    }
  });
}

function ItemKey({name, value, first, last}: any): any {
  return <div className={classNames('item-body', first && 'first', last && 'last')}>
    <div className={'item-key'}>
      <div className="item-text">{name}</div>
    </div>
    <div className={'item-value'}>
      <div className="item-type">
        {value.type}
      </div>
      <div className="item-description">
        <div>{value.description ?? ''}</div>
        Exemplo: {value.example ?? ''}
      </div>
    </div>
  </div>
}

export default BodyViewer;
