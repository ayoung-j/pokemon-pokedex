# 포켓몬 도감 만들기 
[🔗 포켓몬 도감](https://pokemon-pokedex-silk.vercel.app/)<br/>
포켓몬 리스트를 보여주고 추가, 삭제, 상세 정보를 확인할 수 있습니다.
<br/><br/>

## 프로젝트 구조
📦pokemon-pokedex<br/>
 ┣ 📂public<br/>
 ┃ ┗ 📂images<br/>
 ┃ ┃ ┗ 📂favicon<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┣ 📂fonts<br/>
 ┃ ┃ ┗ 📂images<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┣ 📂constants<br/>
 ┃ ┣ 📂context<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┣ 📂shared<br/>
 ┃ ┣ 📂styles<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┗ 📜main.jsx<br/>
 ┣ 📜index.html<br/>
 ┗ 📜README.md
<br/><br/>

## 실행 방법
```
git clone https://github.com/ayoung-j/pokemon-pokedex.git

yarn dev
```
<br/>

## 주요 기능
- **랜딩 페이지** : "포켓몬 도감 시작하기" 버튼을 클릭하면 도감 페이지로 이동합니다.
- **도감 페이지**
    - 대시보드 : 선택한 6개의 포켓몬을 표시하고, 포켓몬을 선택 해제할 수 있습니다.
    - 포켓몬 리스트 : 포켓몬 리스트를 보여주고, 각 포켓몬 카드를 클릭하면 대시보드에 추가할 수 있습니다.
    - 포켓몬 카드 : 각 포켓몬의 이미지, 이름, 타입을 표시하고 '추가' 또는 '삭제' 버튼을 제공합니다.
- **상세 페이지** : 개별 포켓몬 카드를 클릭하면 포켓몬의 상세 정보를 보여줍니다.
