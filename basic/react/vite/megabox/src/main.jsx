// ReactDOM이 실제 HTML의 <div id="root"></div> 에 React 앱을 넣는 과정은 프로젝트 전체에서 딱 한 번만 필요합니다.
// 이게 React 앱의 "시동" 같은 과정이기 때문입니다.
// 컴포넌트는 단순히 렌더 트리 안에서 움직일 뿐, DOM에 직접 붙지 않습니다.
// 그래서 컴포넌트 내부에서는 createRoot를 쓰지 않습니다.
// import { createRoot } from 'react-dom/client'->애플리케이션의 엔트리 파일(주로 main.jsx 또는 index.jsx) 에서만 사용
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)