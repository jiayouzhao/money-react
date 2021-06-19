import Button from "components/Button";
import styled from "styled-components";

const TagDiv = styled.div`
    width:100%;
    padding:16px;
    background:#fff;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    flex-grow:1;
    justify-content: flex-end;
    >ul{
        display:flex;
        flex-wrap: wrap;
        li{
            font-size:16px;
            background:#D9D9D9;
            margin-right:10px;
            color:#878787;
            padding:6px 20px;
            border-radius:15px;
            margin-bottom:10px;
        }
    }
`;

function TagShow() {
	return (
		<TagDiv>
			<ul>
				<li>衣</li>
				<li>食</li>
				<li>住</li>
				<li>行</li>
			</ul>
			<Button classPre="money">新增标签</Button>
		</TagDiv>
	);
}

export default TagShow;