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
            &:nth-child(12){
                line-height:148px;
                float:right;
            }
            &:nth-child(13){
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

type Props={
    amount:string;
    onChange:(amount:string)=>void;
    onOK:()=>void;
}

function NumberPad(props:Props) {
	const numberList = [ "1", "2", "3", "删除", "4", "5", "6", "清空", "7", "8", "9", "OK", "0", "." ];

	function updateAmount(num:string) {
		let result = "";
		
		if (num === "删除") {
			if (props.amount === "0") {
				return; 
			}
			if (props.amount.length === 1) {
				props.onChange("0");
			} else {
				props.onChange(props.amount.slice(0, -1));

			}
		
			return; 
		}
		if (num === "清空") {
			if (props.amount === "0") {
				return; 
			}
			props.onChange("0");
			return;
		}
		if (num === "OK") {
			
			if (props.amount[props.amount.length - 1] === ".") {
				result = props.amount;
				result = result.slice(0, -1);
				//console.log(result);
				props.onChange(result);
				
			}
			props.onOK();
			return; 
		}
		
		if (props.amount === "0") {
			if (num === ".") {
				result = props.amount + num;
			} else {
				result = num;
			}
			
		} else if (num === "." && props.amount.indexOf(".") >= 0) {
			result = props.amount;
		} else if (props.amount.length > 15) {
			result = props.amount;
		} else {
			result = props.amount + num;
		}
		props.onChange(result);
		
	}

	return (
		<PadDiv>
			<div className="showNumber">{props.amount}</div>
			<ul className="numberPad clearfix">
				{numberList.map(item => {
					return (
						<li key={item}
							onClick={() => updateAmount(item)}
						>{item}</li>
					); 
				})}
			</ul>
		</PadDiv>
	);
}

export default NumberPad;