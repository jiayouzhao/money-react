import styled from "styled-components";

type Props={
    children:String,
    classPre:string
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
	return (
		<ButtonWrapper className={props.classPre ? `${props.classPre}Button` : ""}>
			{props.children}
		</ButtonWrapper>
	);
}

export default Button;