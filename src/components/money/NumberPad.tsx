import styled from "styled-components";

const PadDiv = styled.div`
    .showNumber{
        background:#fff;
        line-height:60px;
        font-size:30px;
        text-align:right;
        padding:0 16px;
        font-family:Consolas,monospace;
    }
    .numberPad{
        li{
            float:left;
            font-size:20px;
            width:25%;
            line-height:74px;
            text-align:center;
            &.okBtn{
                line-height:148px;
                float:right;
            }
            &.zero{
                width:50%;
            }
            &:nth-child(1){
                background:#F2F2F2;
            }
            &:nth-child(2),
            &:nth-child(5){
                background:#E0E0E0;
            }
            &:nth-child(3),
            &:nth-child(6),
            &:nth-child(9){
                background:#D3D3D3;
            }
            &:nth-child(4),
            &:nth-child(7),
            &:nth-child(10){
                background:#C1C1C1;
            }
            &:nth-child(8),
            &:nth-child(11),
            &:nth-child(13){
                background:#A9A9A9;
            }
            &:nth-child(12){
                background: #8B8B8B;
            }
            &:nth-child(14){
                background: #9A9A9A;
            }
        }
    }
`;

function NumberPad() {
	return (
		<PadDiv>
			<div className="showNumber">100</div>
			<ul className="numberPad">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>删除</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>清空</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li className="okBtn">OK</li>
				<li className="zero">0</li>
				<li>.</li> 
			</ul>
		</PadDiv>
	);
}

export default NumberPad;