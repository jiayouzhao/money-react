import styled from "styled-components";

const Nomatch = styled.a`
    color:red;
    text-decoration:underline;
`;

function NoMatch() {
	return (
		<div>
            页面地址不存在 <Nomatch href="/">返回首页</Nomatch>
		</div>
	);
}

export default NoMatch;