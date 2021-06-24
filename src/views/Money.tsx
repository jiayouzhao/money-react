import Layout from "components/Layout";
import InOut from "components/money/InOut";
import Notes from "components/money/Notes";
import NumberPad from "components/money/NumberPad";
import TagShow from "components/money/TagShow";
import recordList from "hook/useRecord";
import { useState } from "react";

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

let { saveRecord } = recordList();

function Money() {

	const [ selected, setSelected ] = useState<Selected>({
		selectedTags:[], 
		notes:"", 
		inout:"-", 
		amount:"0",
		createAt:""
	});

	function onchange(obj:Partial<Selected>) {
		
		setSelected({
			...selected,
			...obj
		});
	}

	function submitData() {
        
		console.log(selected);
		
		setSelected((pre) => {
			
			pre.createAt = new Date().toISOString();
			
			saveRecord(pre);
			return {
				selectedTags:[],
				notes:"",
				inout:"-",
				amount:"0",
				createAt:""
			};
		});
	}

	return (
		<Layout>
			
			<TagShow selectedTags={selected.selectedTags} onChange={(selectedTags:SelectedTag[]) => onchange({ selectedTags })}></TagShow>
			<Notes tip="在这里添加备注"
				notes={selected.notes}
				onChange={(notes:string) => onchange({ notes })}
			>备注</Notes>
			<InOut inout={selected.inout}
				onChange={(inout:"-"|"+") => onchange({ inout })}
			></InOut>
			<NumberPad
				amount={selected.amount}
				onChange={(amount:string) => onchange({ amount })}
				onOK={submitData}
			></NumberPad>
		</Layout>
	);

}

export default Money;