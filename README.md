# YoutubeMockup_team5
## 협업 규칙
- main 브랜치는 보호되어 있으며, 모든 변경은 feature 브랜치 → PR → 승인 후 merge
- main merge는 레포 담당자만 수행

## 구현 화면 (Preview)

- YouTube 메인 홈 다크 모드
- 영상 카드(Grid) 레이아웃
- Shorts 섹션 UI
- 사이드바 네비게이션
- 상단 Header(Search Bar, Icon 영역)

<img width="2837" height="1422" alt="스크린샷 2026-02-02 213402" src="https://github.com/user-attachments/assets/8f30b23a-234f-47ed-9c7a-8679af360d95" />

<img width="2839" height="1445" alt="스크린샷 2026-02-02 213421" src="https://github.com/user-attachments/assets/1c4134ea-d275-4239-a079-641ea3c5da26" />
  
## 하위 태스크 
### 1. 유튜브 UI 구조 분석 및 화면 구성 요소 분해
#### UI Reference 
실제 YouTube 메인 홈 화면을 기준으로 UI 구조를 분석했다.

<img width="2048" height="1005" alt="image" src="https://github.com/user-attachments/assets/1b1417b3-f769-4cbd-b807-d93a0db335a6" />

프로젝트 시작 단계에서 YouTube 메인 화면을 분석하여 전체 UI를 다음과 같은 영역으로 분해했다.

  - Header (상단 네비게이션)
  - Filter Chips (카테고리 탭)
  - Sidebar (좌측 메뉴)
  - Video Grid (일반 영상 목록)
  - Shorts Section (쇼츠 영상 영역)

각 영역의 역할을 기준으로 HTML 구조와 CSS 분리 방향을 결정한다.

### 2. HTML을 사용한 기본 구조 작성
```
  - <header> : 로고, 검색창, 아이콘 영역을 포함한 상단 헤더
  - <nav class="sidebar"> : 사이드바 메뉴 영역
  - <main> : Filter Chips, Video Grid, Shorts 콘텐츠 영역
```
  
기본적인 HTML 구조는 위와 같이 UI 영역을 명확히 구분해서, 시맨틱 태그를 활용해 레이아웃 구조가 한눈에 보이도록 구성했다.
  
### 3. DOM 트리 정리 및 시맨틱 구조 개선
설계한 HTML 구조를 기반으로 DOM 트리를 정리하고,
CSS 및 JavaScript에서 효율적으로 제어할 수 있도록
각 UI 영역을 클래스 단위로 분리했다.

  - .header
  - .sidebar
  - .tabs
  - .video-grid
  - .shorts-container

### 4. CSS를 활용한 기본 스타일링 적용
  
  CSS는 역할 단위로 파일을 분리하여 관리한다. UI 영역별 스타일을 개별 CSS 파일로 나눠서 적용한다.
  
  ```
  styles/
  ㅣ-- general.css   // 공통 스타일
  ㅣ-- header.css    // Header 영역
  ㅣ-- sidebar.css   // Sidebar 영역
  ㅣ-- tabs.css      // Filter Chips
  ㅣ-- video.css     // Video Grid 및 Shorts
  ```
  
### 5. 헤더/썸네일 등 핵심 UI 요소 구현
  
  실제 YouTube UI를 참고하여 시각적 유사성을 높이도록 구현한다.
  
  - Header : 로고, 검색창, 아이콘 영역 구현
  - Filter Chips : 가로 스크롤 탭 UI 구현
  - Video Grid : 영상 썸네일 비율 유지. 영상 길이 표시.
  - Shorts Section : 세로 카드 형태의 쇼츠 UI 구성
  
### 6. 화면설계서 및 결과 문서 작성
  
  프로젝트 진행 과정과 결과를 README로 정리했다. 하위 태스크 수행 흐름과 역할 분담이 문서에 드러나도록 작성했다.
  
## 역할 분담
- 김다은 : Header + Filter Chips(tabs) UI 구현
- 조아영 : Sidebar + General CSS + Shorts 영역
- 최희원 : 전체 코드 통합, 레이아웃 보완 및 UI 디테일 수정

