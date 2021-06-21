import Button from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
import useTags from "hook/useTags";
import styled from "styled-components";

const TagShow = styled.ul`
    padding:0px 16px;
    background:#fff;
    li{
        font-size:18px;
        padding:14px;
        border-bottom:1px solid #EFEFF0;
        display:flex;
        justify-content: space-between;
    }
`;

const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    margin:20px 0px;
    .tagNewButton{
        font-size:18px;
        background:#767676;
        color:#fff;
        padding:10px 20px;
        border-radius:6px;
    }
`;

function Tags() {

	const { tagsList, addTag } = useTags();

	return (
		<Layout>
            
			<TagShow>
				{tagsList.map(item => {
					return (
						<li key={item.id}>
							<span>{item.name}</span>
							<Icon name="right"></Icon>
						</li>
					);
				})}
			</TagShow>
			<ButtonWrapper>
				<Button classPre="tagNew" onchange={(name) => addTag(name)}>新建标签</Button>
			
			</ButtonWrapper>
			
		</Layout>
	);
}

export default Tags;