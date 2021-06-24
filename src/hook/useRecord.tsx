type SelectedTag = {
    id:number;name:string
}

type Selected={
    selectedTags:SelectedTag[];
    notes:string;
    inout:"+"|"-";
    amount:string;
    createAt:string;
}

function recordList() {
	const recordsList = JSON.parse(window.localStorage.getItem("recordsList") || `[]`);
	
	function saveRecord(list:Selected) {
		
		recordsList.push(list);
		window.localStorage.setItem("recordsList", JSON.stringify(recordsList));
	}

	return { recordsList, saveRecord };
}

export default recordList;