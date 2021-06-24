import Layout from "components/Layout";
import InOut from "components/money/InOut";
import { recordList, Selected } from "hook/useRecord";
import { useState } from "react";
import styled from "styled-components";

type InoutType= "+"|"-";

const InOutWrapper = styled.div`
    >div{
        background:#fff;
    }
`;

const RecordsWrapper = styled.div`
`;

function Statistic() {
	const { recordsList } = recordList();
	const [ inout, setInout ] = useState<InoutType>("-");
	function toggleType(type:InoutType) {
		setInout(type);
	}
	const selectRecord = recordsList.filter((item:Selected) => {
		return item.inout === inout;
	});
	console.log(selectRecord);
	return (
		<Layout>
			<InOutWrapper>
				<InOut inout={inout} onChange={
					(type:InoutType) => toggleType(type)
				}></InOut>
			</InOutWrapper>
			<RecordsWrapper>
                
			</RecordsWrapper>
		</Layout>
	);
}

export default Statistic;