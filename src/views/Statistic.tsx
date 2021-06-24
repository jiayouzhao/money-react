import Layout from "components/Layout";
import InOut from "components/money/InOut";
import { recordList, Selected } from "hook/useRecord";
import { useState } from "react";
import styled from "styled-components";
import day from "dayjs";

type InoutType= "+"|"-";

type ShowRecords= {
    [key:string]:Selected[];
}

const InOutWrapper = styled.div`
    >div{
        background:#fff;
    }
`;

const RecordsWrapper = styled.div`
`;

const ContentWrapper = styled.div`
    
    .title{
        display:flex;
        justify-content: space-between;
        font-size:18px;
        line-height:20px;
        padding:10px 16px;
    }
    .moneyList{
        background:#fff;
        li{
            padding:10px 16px;
            font-size:16px;
            line-height:18px;
            display: flex;
            justify-content: space-between;
            .tagName{
                margin-right:10px;
                white-space: nowrap;
            }
            .notes{
                color:#BEBEBE;
                margin-right:auto;
                flex-shrink:2;
            }
            .money{
                flex-shrink:1;
            }
        }
    }
`;

function Statistic() {
	const showRecords:ShowRecords[] = [];
	const { recordsList } = recordList();
	const [ inout, setInout ] = useState<InoutType>("-");
	function toggleType(type:InoutType) {
		setInout(type);
	}

	function dayFormat(date:string) {
		return day.unix(parseFloat(date)).format("YYYY-MM-DD");
	}

	function selectRecord() {
        
		let records = recordsList.filter((item:Selected) => {
			return item.inout === inout;
		});
		if (records.length === 0) {
			return [];
		}
		let newRecords:Selected[] = records.map((item:Selected) => {
			return { ...item, createAt :day(item.createAt).unix().toString() };
		}).sort((a:Selected, b:Selected) => {
			return parseFloat(b.createAt) - parseFloat(a.createAt);
		});
		
		showRecords[0] = {
			[dayFormat(newRecords[0].createAt)]:[ newRecords[0] ]
		};
		let j = 0;
		for (let i = 1; i < newRecords.length; i++) {
			
			if (!showRecords[j][dayFormat(newRecords[i].createAt)]) {
				j++;
				let obj:ShowRecords = {
					[dayFormat(newRecords[i].createAt)]:[]
				};
				obj[dayFormat(newRecords[i].createAt)].push(newRecords[i]);
				showRecords.push(obj);
			} else {
				showRecords[j][dayFormat(newRecords[i].createAt)].push(newRecords[i]);
			}
		}
		
		//console.log(showRecords);
		return showRecords;
	}
	
	let showList = selectRecord();
	//console.log(showList);

	function setDate(date:string) {
		let nowDate = new Date();
		if (day(date).isSame(day(nowDate), "year")) {
			if (day(date).isSame(day(nowDate), "day")) {
				return "今天";
			} else if (day(date).isSame(day(nowDate).subtract(1, "day"), "day")) {
				return "昨天";
			}
			return day(date).format("M月DD日");
		} else {
			return date;
		}
		
	}

	function amountSum(list:Selected[]) {
		let result = list.reduce((pre, item) => {
			return (pre * 10000 + parseFloat(item.amount) * 10000) / 10000;
		}, 0);
		return `￥${result}`;
	}
	function itemRender(item:ShowRecords) {
		for (let key in item) {
			return (
				<ContentWrapper key={key}>
					<div className="title">
						<h3>{setDate(key)}</h3>
						<span>{amountSum(item[key])}</span>
					</div>
					<ul className="moneyList">
						{item[key].map((list, index) => {
							return (
								<li key={index}>
									<span className="tagName">
										{list.selectedTags.map((tag, index) => {
											return index === list.selectedTags.length - 1 ? `${tag.name}` : `${tag.name}，`;
										})}
									</span>
									<span className="notes">
										{list.notes ? list.notes : ""}
									</span>
									<span className="money">
										{`￥${list.amount}`}
									</span>
								</li>
							);
						})}
					</ul>
					
				</ContentWrapper>
			);
		}
	}

	function toggleRender() {
		if (showList.length) {
			return showList.map(item => {
				return itemRender(item);
			});
		} else {
			return (
				<div>当前无数据</div>
			);
		}
	}

	return (
		<Layout>
			<InOutWrapper>
				<InOut inout={inout} onChange={
					(type:InoutType) => toggleType(type)
				}></InOut>
			</InOutWrapper>
			<RecordsWrapper>
           
				{toggleRender()}
                
			</RecordsWrapper>
		</Layout>
	);
}

export default Statistic;