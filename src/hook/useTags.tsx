import createId from "lib/createId";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export type LocalTag = {
    id:number;
    name:string;
}
const initTags = JSON.parse(window.localStorage.getItem("tagsList") || JSON.stringify([ { id:createId(), name:"衣" }, { id:createId(), name:"食" }, { id:createId(), name:"住" }, { id:createId(), name:"行" } ]));

function useTags() {
	let history = useHistory();
	
	const [ tagsList, setTagsList ] = useState<LocalTag[]>(initTags); 
	
	const count = useRef(0);
	useEffect(() => {
		console.log("执行");
		const localTags = window.localStorage.getItem("tagsList");
		
		if (!localTags) {
			setTagsList(initTags);
			localStorage.setItem("tagsList", JSON.stringify(initTags));
			
		} else {
			setTagsList(JSON.parse(localTags));
		}
        
	}, []);
	
	useEffect(() => {
		count.current++;
		if (count.current > 2) {
			localStorage.setItem("tagsList", JSON.stringify(tagsList));
		}
	}, [ tagsList ]);

	function deleteTag(tag:LocalTag) {
		let cloneTagsList = cloneTag(tagsList);
		let deleteTags = cloneTagsList.filter((item:LocalTag) => {
			return item.id !== tag.id;
		});
        
		setTagsList((pre) => {
			setTimeout(() => {
				history.replace("/tags");
			}, 0);
		
			return deleteTags;
		});
		
	}

	function cloneTag(cloneObj:LocalTag[]) {
		return JSON.parse(JSON.stringify(cloneObj));
	}

	function updateTag(currentTag:LocalTag, notes:string) {
		let cloneTagsList = cloneTag(tagsList);
		cloneTagsList.forEach((item:LocalTag) => {
			if (item.id === currentTag.id) {
				item.name = notes;
			}
		});
		setTagsList(cloneTagsList);
	}

	function addTag(name:string) {
		
		setTagsList([ ...tagsList, { id:createId(), name } ]);
	}

	function findTag(id:string) {
		//console.log(tagsList);
		return tagsList.filter(item => {
			
			return item.id === parseFloat(id);
		}); 
	}

	return { tagsList, addTag, findTag, updateTag, deleteTag };
}

export default useTags;