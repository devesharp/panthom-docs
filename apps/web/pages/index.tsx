import styled from 'styled-components';
import Menu from '../components/menu/menu';
import PageContent from '../components/page-content/page-content';

const StyledPage = styled.div`
  font-family: 'Inter', sans-serif;
  height: 100%;
  max-height: 100%;
  flex-direction: row;
  display: flex;
  font-size: 14px;
  color: #878f99;

  .menu-container-wrapper {
    overflow: auto;
  }
`;

export function Index(props: any) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="menu-container-wrapper">
        <Menu menu={props.content.menu} />
      </div>
      <div className="flex-fill">
        <PageContent api={props.content}></PageContent>
      </div>
    </StyledPage>
  );
}

export default Index;

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const res = await fetch('http://localhost:4200/api/swagger');
  const data = await res.json();

  return {
    // Passed to the page component as props
    props: { content: data },
  };
}
