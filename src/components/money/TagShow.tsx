import Button from "components/Button";
import useTags from "hook/useTags";
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
            color:#4C4C4C;
            padding:6px 20px;
            border-radius:15px;
            margin-bottom:10px;
            &.selected{
                background:#b3adad;
            }
        }
    }
`;

type SelectedTag = {
    id:number;name:string
}

type Props={
    selectedTags:SelectedTag[],
    onChange:(val:SelectedTag[])=>void
}

function TagShow(props:Props) {

	const { tagsList, addTag } = useTags();

	let selectedTags = props.selectedTags;
	function getClass(tag:SelectedTag) {
		
		if (selectedTags.indexOf(tag) >= 0) {
			return "selected";
		} else {
			return "";
		}
	}
	function toggleClass(tag:SelectedTag) {
	
		if (selectedTags.indexOf(tag) >= 0) {
			
			props.onChange(selectedTags.filter(item => {
				return item.id !== tag.id;
			}));
			
		} else {
			
			props.onChange([ ...selectedTags, tag ]);
		}
	}

	return (
		<TagDiv>
			
			<ul>
				{tagsList.map(tag => {
					return (
						<li key={tag.id} className={getClass(tag)}
							onClick={() => toggleClass(tag)}
						>{tag.name}</li>
					);
				})}
			</ul>
			<Button classPre="money"
				onchange={(name:string) => addTag(name)}>新增标签</Button>
		</TagDiv>
	);
}

export default TagShow;