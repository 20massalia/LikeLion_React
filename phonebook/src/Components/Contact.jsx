import React, { Component } from 'react';
 
import ContactInfo from './ContactInfo';
 
class Contact extends Component {
  state = {
    keyword : '', // state의 keyword는 입력된 검색어를 의미하는 state
    contactData : [{ // 연락처 목록
      name : '짱구',
      phone : '010-1234-5678'
    }, {
      name : '철수',
      phone : '010-1234-1234'
    }, {
      name : '훈이',
      phone : '010-5678-5678'
    }, {
      name : '맹구',
      phone : '010-4312-5678'
    }, {
      name : '유리',
      phone : '010-4192-0987'
    },]
  }

  _searchContact = (e) => { // input 태그의 값이 변경 될 때마다 this.state.keyword 값이 변경
    this.setState({
      keyword : e.target.value
    });
  }

  render() {
    // mapToComponents 함수는 검색어가 입력될 때, 이름과 전화번호를 모두 기준으로 하여 필터링
    const mapToComponents = (data) => {
      // data 배열을 this.state.keyword를 기준으로 필터링하여 새로운 배열 filteredData를 생성
      const filteredData = data.filter((contact) => {
        // 검색어를 소문자로 변환하여 키워드를 대소문자 구분 없이 검색할 수 있도록 함
        const keyword = this.state.keyword.toLowerCase();
        // contact.name을 소문자로 변환하여 검색어가 이름에 포함되어 있는지 확인
        const nameMatch = contact.name.toLowerCase().indexOf(keyword) > -1;
        // contact.phone에서 검색어가 포함되어 있는지 확인
        const phoneMatch = contact.phone.indexOf(keyword) > -1;
        // 이름 또는 전화번호 중 하나라도 검색어를 포함하고 있는 경우 true 반환
        return nameMatch || phoneMatch;
      });
  
      // filteredData 배열을 map 메서드를 사용하여 각각의 contact 객체를 ContactInfo 컴포넌트로 매핑
      // map 메서드는 배열의 각 원소에 대해 주어진 콜백 함수를 실행하고, 그 결과로 새로운 배열을 반환
      // 이때, 배열의 각 원소에는 ContactInfo 컴포넌트가 포함되어 있으며, key 속성으로 index 값을 사용
      return filteredData.map((contact, i) => (
        <p key={i}>
          <ContactInfo contact={contact} />
        </p>
      ));
    }
    
/* ~~자바스크립트의 map 메소드에 대하여~~
map메서드의 첫 번째 인자로는 콜백함수가 옵니다.
콜백함수의 첫 번째 인자는 배열의 각 원소(item)가, 
생략이 가능한 두, 세 번째 인자는 해당 원소의 index값과 전체 배열이 들어옵니다.

map메서드의 두 번째 인자는 callback함수를 실행할 때 this로 들어오는 값을 지정하는 것입니다. 
생략 가능하며, 기본 값은 Window객체 입니다.

map메서드를 이용하면 기존의 배열과 같은 길이의 배열을 리턴합니다.
각각의 원소는 map메서드의 콜백함수의 리턴값과 같습니다. */

    return(
      <div>
        <header>전화번호부</header>
        <input
          autocomplete='off'
          name="keyword"
          placeholder="Search"
          value={this.state.keyword} 
          onChange={this._searchContact}
        />
        <div>{mapToComponents(this.state.contactData)}</div> {/*목록으로 표시*/}
      </div> 
    )
  }
}
 
export default Contact;