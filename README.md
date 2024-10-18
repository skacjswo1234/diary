# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. react

 npx 실행을 위해서는 node.js 설치 필수입니다.
 
 서버실행 : npm start
 
 서비스 배포 소스 코드 : npx serve -s build
 
 props 을 받아서 동적인 반복 컴포넌트를 만들때 태그안에다가 컴포넌트에 대한 고유키값을 필수로 넣어줘야 리액트가 추적이 가능하다.
 
 prop : 컴포넌트를 만드는 외부자를 위한 데이터
 state : 컴포넌트를 만드는 내부자를 위한 데이터

페이지라우터 패키지 설치 코드
react-router
npm i react-router-dom

ESLint 쓸데없는 경고 지우기
"no-unused-vars": "off",
"react/prop-types": "off",

폰트는 public 폴더에 이미지는 assets폴더에 넣기