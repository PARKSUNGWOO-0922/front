// data.js의 영화 박스오피스 데이터 목록을 가져와서,
// 각 항목을 BoxOfficeCard 컴포넌트로 화면에 여러 개 뿌려주는 App 컴포넌트
// 즉,App.jsx는 이 데이터 배열을 이용해서
// 영화 카드를 여러 개 만들어 화면에 보여주는 역할을 합니다

// datas.map() → 리스트 렌더링
// datas 배열의 요소 개수만큼 반복 실행됩니다.
// 반복할 때마다 ele 안에 영화 하나가 들어갑니다

//<BoxOfficeCard /> 컴포넌트를 반복 생성
// datas.map() → 리스트 렌더링

// datas.map((ele) => ...)


// datas 배열의 요소 개수만큼 반복 실행됩니다.
// 반복할 때마다 ele 안에 영화 하나가 들어갑니다.
// <BoxOfficeCard /> 컴포넌트를 반복 생성
// <BoxOfficeCard key={ele.rank} data={ele} />
// BoxOfficeCard를 4개 생성
// data라는 이름으로 ele를 넘겨줌 → props.data로 사용 가능
// key={ele.rank} → React에게 각 카드가 무엇인지 구별시켜줌

import BoxOfficeCard from './BoxOfficeCard.jsx';
import {datas} from './data.js';

function App() {
    // Each child in a list should have a unique "key" prop
    return (
        <div className="box_office">
            {datas.map((ele)=>{return <BoxOfficeCard key={ele.rank} data={ele} />})}
        </div>
    );
}

export default App;