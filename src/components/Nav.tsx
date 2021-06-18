import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavStyle = styled.nav`
    ul{
        display:flex;
        border:1px solid red;
        li{
            width:33%;
            text-align:center;
            padding:3px 0px;
            display:flex;
            flex-direction: column;
            align-items:center;
            .icon{
                margin-bottom:5px;
                width:40px;
                height:32px;
                &.moneyIcon{
                    margin-left:-6px;
                }
            }
        }
    }
`;

function Nav() {
	return (
		<NavStyle>
        
			<ul>
				<li>
					<Icon name="tag"/>
					<Link to="/tags">标签</Link> 
				</li>
				<li>
					<Icon classPre="money" name="money"></Icon>
					<Link to="/money">记一笔</Link>
				</li>
				<li>
					<Icon name="static"></Icon>
					<Link to="/statistics">统计</Link>
				</li>
			</ul>
		</NavStyle>
	);
}

export default Nav;