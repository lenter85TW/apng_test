es6 문법을 테스트 해야 할 최소 환경설정

es6문법 (class, import 등)과 node.js 문법 (require같은것 들을), JSX문법 등을 사용하기 위해선 babel 모듈을 이용해야 한다.
babel이 해당 문법을 es5로 transfile 해준다.

또한 브라우저 환경에서 모듈을 이용하는 환경을 제공하고(CommonJS 환경), 의존성에 걸려있는 JavaScript파일들을 다 하나로 엮어서
빌드 해주는건 browserify의 역할이다.

시작하세요 리액트 프로그래밍 교재 120~122p를 참조해봐라.


- 기본 모듈 설치
$ npm install —global browserify
$ broserify —version

$ npm install —global babel-cli
$ babel —version

$ npm install —save-dev babel-preset-react (리액트 사용시)
$ npm install —save-dev babel-preset-es2015



- 빌드 시작

$ babel —presets react,es2015 js/source -d js/build

트랜스파일 되어야 할 파일들이 있는 폴더 지정(js/source)  결과 폴더지정(js/build)

$ browserify js/build/app.js -o bundle.js

빌드 되어야 할 파일 (app.js) -> 결과 파일 (bundle.js)

