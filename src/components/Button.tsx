import styled from "styled-components";

type Props={
    children:String;
    classPre:string;
    onchange:(name:string)=>void;
}

const ButtonWrapper = styled.button`
    border:none;
    color:#BEBEBE;
    background:transparent;
    &.moneyButton{
        border-bottom:1px solid #D8D8D8;
        padding:4px 10px;
        margin-top:10px;
    }
    
`;

function Button (props:Props) {

	function addTags() {
		let name = window.prompt("输入标签名称");
		if (name === null) {
			return; 
		}
		if (name.length === 0) {return alert("标签名不能为空");}
		props.onchange(name);
	}

	return (
		<ButtonWrapper className={props.classPre ? `${props.classPre}Button` : ""} onClick={addTags}>
			{props.children}
		</ButtonWrapper>
	);
}

export default Button;