import Layout from "components/Layout";
import InOut from "components/money/InOut";
import Notes from "components/money/Notes";
import NumberPad from "components/money/NumberPad";
import TagShow from "components/money/TagShow";

function Money() {
	return (
		<Layout>
			<TagShow></TagShow>
			<Notes tip="在这里添加备注">备注</Notes>
			<InOut></InOut>
			<NumberPad></NumberPad>
		</Layout>
	);

}

export default Money;