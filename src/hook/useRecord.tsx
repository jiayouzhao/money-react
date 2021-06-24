type SelectedTag = {
    id:number;name:string
}

export type Selected={
    selectedTags:SelectedTag[];
    notes:string;
    inout:"+"|"-";
    amount:string;
    createAt:string;
}

export function recordList() {
	const recordsList = JSON.parse(window.localStorage.getItem("recordsList") || `[]`);
	
	function saveRecord(list:Selected) {
		
		recordsList.push(list);
		window.localStorage.setItem("recordsList", JSON.stringify(recordsList));
	}

	return { recordsList, saveRecord };
}
