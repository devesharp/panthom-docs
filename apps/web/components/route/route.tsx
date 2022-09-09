import styled from 'styled-components';
import {API} from "../../interfaces/API";
import BodyViewer from "../body-viewer/body-viewer";

/* eslint-disable-next-line */
export interface RouteProps {
  route: API['sections'][0]['routes'][0];
}

const StyledRoute = styled.div`

`;

export function Route(props: RouteProps) {
  return (
    <StyledRoute>
      <h3>{props.route.method} {props.route.path}</h3>
      {!!props.route.requestBody && <BodyViewer body={props.route.requestBody} />}
    </StyledRoute>
  );
}

export default Route;
