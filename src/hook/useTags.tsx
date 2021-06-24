import createId from "lib/createId";
import { useEffect, useRef, useState } from "react";

export type LocalTag = {
    id:number;
    name:string;
}

const initTags = () => JSON.parse(window.localStorage.getItem("tagsList") || JSON.stringify([ { id:createId(), name:"衣" }, { id:createId(), name:"食" }, { id:createId(), name:"住" }, { id:createId(), name:"行" } ]));

function useTags() {
	
	const [ tagsList, setTagsList ] = useState<LocalTag[]>(initTags()); 
	const count = useRef(0);
	useEffect(() => {
		console.log("执行");
		const localTags = window.localStorage.getItem("tagsList");
		
		if (!localTags) {
			localStorage.setItem("tagsList", JSON.stringify(tagsList));	
		}
	}, []);
	
	useEffect(() => {
		
		count.current++;
		
		if (count.current > 1) {
			localStorage.setItem("tagsList", JSON.stringify(tagsList));
		}
	}, [ tagsList ]);

	function deleteTag(tag:LocalTag) {
		let cloneTagsList = cloneTag(tagsList);
		let deleteTags = cloneTagsList.filter((item:LocalTag) => {
			return item.id !== tag.id;
		});
		
		setTagsList((pre) => {
		
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
		if (tagsList.find(item => {
			return item.name === name;
		})) {
			return alert("标签名不能重复哦！");
		}
        
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