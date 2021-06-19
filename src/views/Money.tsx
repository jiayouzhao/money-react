import Layout from "components/Layout";
import InOut from "components/money/InOut";
import Notes from "components/money/Notes";
import NumberPad from "components/money/NumberPad";
import TagShow from "components/money/TagShow";
import { useState } from "react";

type Selected={
    selectedTags:string[];
    notes:string;
    inout:"+"|"-";
    amount:string;
}

function Money() {

	const [ selected, setSelected ] = useState<Selected>({
		selectedTags:[], 
		notes:"", 
		inout:"-", 
		amount:"0"
	});

	function onchange(obj:Partial<Selected>) {

		setSelected({
			...selected,
			...obj
		});
	}

	function submitData() {
		
		setSelected((pre) => {
			console.log(pre);
			return {
				selectedTags:[],
				notes:"",
				inout:"-",
				amount:"0"
			};
		});
	}

	return (
		<Layout>
			<TagShow selectedTags={selected.selectedTags} onChange={(selectedTags:string[]) => onchange({ selectedTags })}></TagShow>
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