import { useState } from 'react'
import './App.css'
import { useReducer, useRef } from 'react'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import { Route,Routes,Link, useNavigate} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'

import { getEmotionImage } from './util/get-emotion-image'

const mockData = [
  {
    id : 1,
    createDate : new Date().getTime(),
    emotionId : 1,
    content : "1번일기내용"
  },
  {
    id : 2,
    createDate : new Date().getTime(),
    emotionId : 2,
    content : "2번일기내용"
  }
]

function reducer (state, action) {
  switch(action.type) {
    case 'CREATE': return [action.data,...state];
  }
}

function App() {

  const [data, dispatch] = useReducer(reducer,[mockData]);
  const idRef = useRef(3);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data : {
        id : idRef.current++,
        createDate,
        emotionId,
        content,
      }
    });
  }

  return (

    <>
      <button onClick={()=>{
        
      }}>일기장 추가 테스트</button>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </>

    
  )
}

export default App
