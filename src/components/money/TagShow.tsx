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

type Props={
    selectedTags:string[],
    onChange:(val:string[])=>void
}

function TagShow(props:Props) {
	const { tagsList, addTag } = useTags();
	let selectedTags = props.selectedTags;
	function getClass(tagName:string) {
		if (selectedTags.indexOf(tagName) >= 0) {
			return "selected";
		} else {
			return "";
		}
	}
	function toggleClass(tagName:string) {
		if (selectedTags.indexOf(tagName) >= 0) {
			
			props.onChange(selectedTags.filter(tag => {
				return tag !== tagName;
			}));
			
		} else {
			
			props.onChange([ ...selectedTags, tagName ]);
		}
	}

	return (
		<TagDiv>
			
			<ul>
				{tagsList.map(tag => {
					return (
						<li key={tag.id} className={getClass(tag.name)}
							onClick={() => toggleClass(tag.name)}
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