import styled from "styled-components";

const InOutWrapper = styled.div`
    display:flex;
    background:#C4C4C4;
    span{
        width:50%;
        text-align:center;
        font-size:22px;
        padding:18px 0px;
        font-weight:bold;
        position:relative;
        &.selected{
            &:after{
                content:'';
                display:inline-block;
                width:100%;
                border-bottom:4px solid #3B3B3B;
                position:absolute;
                left:0px;
                bottom:0px;
            }
        }
    }
`;

type Props={
    inout:"+"|"-";
    onChange:(inout:"-"|"+")=>void
}

function InOut(props:Props) {

	function getClass(toggle:"+"|"-") {
		if (props.inout === toggle) {
			return "selected";
		}
	}

	function toggleClass(toggle:"+"|"-") {
		props.onChange(toggle);
	}

	return (
		<InOutWrapper>
			<span className={getClass("-")} onClick={() => toggleClass("-")}>支出</span>
			<span className={getClass("+")} onClick={() => toggleClass("+")}>收入</span>
		</InOutWrapper>
	);
}

export default InOut;