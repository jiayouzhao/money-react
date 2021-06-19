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

function InOut() {
	return (
		<InOutWrapper>
			<span className="selected">支出</span>
			<span>收入</span>
		</InOutWrapper>
	);
}

export default InOut;