import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavStyle = styled.nav`
    ul{
        display:flex;
        background:#fff;
        li{
            width:33%;
            text-align:center;
            color:#928181;
            a{
                padding:3px 0px;
                display:flex;
                flex-direction: column;
                align-items:center;
                .icon{
                    margin-bottom:5px;
                    width:40px;
                    height:32px;
                    fill:#928181;
                    &.moneyIcon{
                        margin-left:-6px;
                    }
                }
                &.selected{
                    color:black;
                    .icon{
                        fill:black;
                    }
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
					
					<NavLink to="/tags" activeClassName="selected">
						<Icon name="tag"/>标签
					</NavLink> 
				</li>
				<li>
					
					<NavLink to="/money" activeClassName="selected">
						<Icon classPre="money" name="money"></Icon>
                        记一笔
					</NavLink>
				</li>
				<li>
					
					<NavLink to="/statistics" activeClassName="selected">
						<Icon name="static"></Icon>
                        统计
					</NavLink>
				</li>
			</ul>
		</NavStyle>
	);
}

export default Nav;