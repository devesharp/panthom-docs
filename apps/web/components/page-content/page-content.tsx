import styled from 'styled-components';
import { API } from '../../interfaces/API';
import Route from "../route/route";

/* eslint-disable-next-line */
export interface PageContentProps {
  api: API;
}

const StyledPageContent = styled.div`
  max-width: 940px;
  background: white;
  padding: 40px;

  .title-group {
    padding-bottom: 10px;
    color: #7e8895;
    font-weight: 600;
  }

  h2 {
    color: #2a2f36;
    padding-bottom: 24px;
  }

  .page-section {
    padding-bottom: 50px;
  }
`;

export function PageContent(props: PageContentProps) {
  return (
    <StyledPageContent>
      <div className="page-section">
        <div className="title-group">Bem vindo</div>

        <h2>Introdução</h2>

        <p className="description">
          The 1inch API v4, Pathfinder, is a cutting-edge discovery and routing
          algorithm, which offers asset exchanges at the best rates on the
          market. Pathfinder finds the most efficient paths for a token swap,
          able to split between different protocols and even different market
          depths in within one protocol in the shortest possible time.
          <br />
          <br />
          This API documentation is intended for public use. If you are an
          enterprise with significant trading volumes please fill in the form so
          we can assign you a custom API endpoint. The enterprise endpoint will
          offer significantly better performance across market rates and
          response times.
        </p>
      </div>

      <div className="page-section">
        <div className="title-group">Rotas</div>

        {props.api.sections.map((value) => (
          <div>
            <h2>{value.group}</h2>

            {!!value.description && (
              <p className="description">{value.description}</p>
            )}

            {value.routes.map((route) => <Route route={route} />)}
          </div>
        ))}
      </div>
    </StyledPageContent>
  );
}

export default PageContent;
