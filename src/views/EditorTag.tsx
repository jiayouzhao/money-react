import useTags from "hook/useTags";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NoMatch from "views/NoMatch";
import Layout from "../components/Layout";
import Notes from "../components/money/Notes";

const EditorWrapper = styled.div`
    input{
        color:#000;
    }
`;

type Params = {
    id:string
}

function EditorTag() {
	const { id } = useParams<Params>();
	const { findTag } = useTags();
	let currentTag = findTag(id);
	if (!currentTag.length) {
		return <NoMatch></NoMatch>;
	} 
	return (
		<Layout>
			<EditorWrapper>
				<div className="top"></div>
				<Notes notes={currentTag[0].name}>标签名</Notes>
			</EditorWrapper>
		</Layout>
	);
}

export default EditorTag;