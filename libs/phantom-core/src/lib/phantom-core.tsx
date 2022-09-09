import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PhantomCoreProps {}

const StyledPhantomCore = styled.div`
  color: pink;
`;

export function PhantomCore(props: PhantomCoreProps) {
  return (
    <StyledPhantomCore>
      <h1>Welcome to PhantomCore!</h1>
    </StyledPhantomCore>
  );
}

export default PhantomCore;
