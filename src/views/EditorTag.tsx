import Button from "components/Button";
import Icon from "components/Icon";
import useTags from "hook/useTags";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NoMatch from "views/NoMatch";
import Layout from "../components/Layout";
import Notes from "../components/money/Notes";
const { Link } = require("react-router-dom");

const EditorWrapper = styled.div`
    display:flex;
    flex-direction:column;
    .deleteButton{
        font-size:18px;
        background:#767676;
        color:#fff;
        padding:10px 20px;
        border-radius:6px;
        margin:20px auto;
    }
`;

const TopWrapper = styled.div`
    display:flex;
    justify-content: center;
    position:relative;
    background:#fff;
    font-size:18px;
    padding:16px;
    svg{
        position:absolute;
        left:16px;
        top:50%;
        transform:translateY(-50%);
        width:30px;
        height:30px;
    }
    h3{
        line-height:20px;
    }
`;

const NotesWrapper = styled.div`
    background:#fff;
    margin-top:15px;
    label{
        input{
            color:#000;
        }
    }
`;

type Params = {
    id:string
}

function EditorTag() {
	const { id } = useParams<Params>();
	const { findTag, updateTag, deleteTag } = useTags();
	
	let currentTag = findTag(id);
	if (!currentTag.length) {
		return <NoMatch></NoMatch>;
	} 
	
	return (
        
		<Layout>
			<EditorWrapper>
				<TopWrapper className="top">
					<Link to="/tags">
						<Icon name="left"></Icon> 
					</Link>
					
					<h3>编辑标签</h3>
				</TopWrapper>
				<NotesWrapper>
					<Notes notes={currentTag[0].name}
						onChange={(notes:string) => updateTag(currentTag[0], notes)}
					>标签名</Notes>
				</NotesWrapper>
				<Button classPre="delete" onchange={(name:string) => {
					deleteTag(currentTag[0]);
				}}>删除标签</Button>
			</EditorWrapper>
		</Layout>
        
	);
	
}

export default EditorTag;