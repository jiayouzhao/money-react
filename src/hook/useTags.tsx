import { useEffect, useRef, useState } from "react";

type LocalTag = {
    id:number;
    name:string;
}

function useTags() {
	
	const [ tagsList, setTagsList ] = useState<LocalTag[]>([]); 
	const count = useRef(0);
	useEffect(() => {
		const localTags = window.localStorage.getItem("tagsList");
		const initTags = [
			{ id:1, name:"衣" },
			{ id:2, name:"食" },
			{ id:3, name:"住" },
			{ id:4, name:"行" }
		];
		
		if (localTags) {
			setTagsList(JSON.parse(localTags));
		} else {
			localStorage.setItem("tagsList", JSON.stringify(initTags));
			setTagsList(initTags);
		}
         
	}, [ ]);
	
	useEffect(() => {
		count.current++;
		if (count.current > 2) {
			localStorage.setItem("tagsList", JSON.stringify(tagsList));
		}
	}, [ tagsList ]);

	function addTag(name:string) {
		
		setTagsList([ ...tagsList, { id:tagsList.length + 1, name } ]);
	}

	function findTag(id:string) {
		//console.log(tagsList);
		return tagsList.filter(item => {
			
			return item.id === parseFloat(id);
		}); 
	}

	return { tagsList, addTag, findTag };
}

export default useTags;