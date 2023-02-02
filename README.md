# Block Odyssey Front-End Coding Test

## 목차

- [기술 스택](#기술-스택)
- [구현 사항](#구현-사항)
- [실행 방법](#실행-방법)
- [개선점](#개선점)

## 기술 스택

Front-End

- JavaScript ES6
- React
- Redux-toolkit

## 구현 사항

`List`

- [x] It should be a search result list.
- [ ] After page refresh, the search result should persist.
- [x] The column is in order of **[상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고]**.
- [x] Display the total amount of data at the top of the list.
- [x] The maximum length of **[상품내용]** is 40 characters. If it exceeds the maximum length, you should display the rest of the content using ellipsis `...`.

`Search`

- [x] Search conditions are the following : **[전체, 상품명, 브랜드, 상품내용].**
- [ ] Both **search condition and keyword** must be persisted after the refresh.

`Pagination`

- [x] Implement **rows per page** using a select box. The select box should display **[10, 20, 50]** options.
- [ ] Both **rows per page and page number** must be persisted after the refresh.

## 실행 방법

- Root 디렉토리에 `.env` 파일을 생성하고, 아래에 해당하는 환경변수를 입력합니다.

```jsx
REACT_APP_API_URL=
```

- 프로젝트 폴더 내에서 아래의 명령어를 실행합니다.

```jsx
$ npm install
$ npm start
```

## 개선점

### 새로고침 시 상태 유지

구현사항 중 새로고침 시에 현재 상태를 유지해야하는 조건이 있었으나 구현하지 못했습니다. 만약 시간이 더 주어진다면 해당 조건을 구현해보고 싶습니다. 구현 계획으로는 조건 중 Redux-Persist와 Local Storage를 사용하면 안된다는 조건이 있었기에, 두 가지 방법을 고민하였습니다.

1. Query를 이용해서 구현해보고 싶습니다. Query는 보통 서버 상태를 관리하기 위해 사용하지만, 클라이언트에 대해서도 간단한 상태라면 다른 상태 관리 라이브러리처럼 활용할 수 있다고 생각합니다. React-Query나 RTK-query를 사용하여 현재 상태를 캐싱하여 저장하고, 클라이언트에서 사용할 수 있도록 만든다면 Local Storage를 사용하지 않으면서 구현할 수 있다고 생각합니다.
2. Session Storage를 이용하면 구현할 수 있다고 생각합니다. Session Storage는 Local Storage와 같은 Web Storage로서, 데이터의 저장 기간의 차이만 있을 뿐 상태를 저장할 수 있다는 특징은 같기에 상태를 Session Storage에 저장한다면 현재 상태를 유지할 수 있습니다. 하지만 이 방법은 Local Storage와 유사한 방법이기 때문에, 1번과 같은 Query를 사용한 상태 관리를 하는 것이 현재 조건과 더 부합한다고 생각합니다.
