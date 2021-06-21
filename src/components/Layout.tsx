import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`

    height:100vh;
    display:flex;
    flex-direction: column;
`;

const Main = styled.div`
    display:flex;
    flex-direction: column;
    height:calc(100%-61px);
    overflow:auto;
`;

function Layout (props:any) {
	return (
		<Wrapper>
			<Main>
				{props.children}
			</Main>
            
			<Nav></Nav>
		</Wrapper>
	);
}

export default Layout;