import styled from "styled-components";

type Props = {
    children:string,
    tip:string
}

const NotesDiv = styled.div`
    padding:0px 16px;
    label{
        display:flex;
        width:100%;
        align-items:center;
        input{
            font-size:16px;
            line-height:60px;
            margin-left:12px;
            flex-grow:1;
            border:none;
            background:transparent;
            outline:none;
            color:#B8B8B8;
        }
    }
`;

function Notes(props:Props) {
	return (
		<NotesDiv>
			<label>
				<span>{props.children}</span>
				<input type="text" placeholder={props.tip}/>
			</label>
		</NotesDiv>
	);
}

export default Notes;

