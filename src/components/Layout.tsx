import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
    border:1px solid red;
    height:100vh;
    display:flex;
    flex-direction: column;
`;

const Main = styled.div`
    flex-grow: 1;
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