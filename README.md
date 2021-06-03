# feapp-weather 17조

각자 진행하고 싶은 정도도 다르고 직접 여러부분들을 해보는 것이 중요하다고 생각해서 개개인으로 구현한 후 중간에 막히는 부분은 단톡방에서 논의하는 방향으로 진행하였습니다.

팀장인 제 저장소의 README에 다른 팀원들이 실습한 각각의 레포주소를 첨부합니다. 진행과정에서 겪었던 몇가지 문제를 아래에 기술하였습니다.

|박은식|권우철|박병준|연제령|
|-|-|-|-|
|[저장소](https://github.com/qkrdmstlr3/feapp-weather-RN)|[저장소](https://github.com/2ternal/RC_weather-app_fix)|[저장소](https://github.com/bardisue/navite-React)|[저장소](https://github.com/YJR999/yjr999/tree/main/RN2)|

### 겪은 문제

1. 도시 url fetch error

제공해주신 도시 url로 fetch요청을 보내니 받은 값이 undefined로 나오는 문제 발생 > React시간에 가르쳐주신 도시 url을 사용하니 이후 날씨와 연계해서도 잘 동작

2. private key

날씨 정보를 가져오기 위해서는 개인적으로 가진 key값을 넣어주어야 함 > [여기](https://api.openweathermap.org)에서 key값을 발급받아 사용

3. 렌더링 잘 안되는 문제

수정 이후 hot-reload가 잘 안되는 문제 > 껐다 키거나 기다리니 해결됨

### 결과화면

![feapp](https://user-images.githubusercontent.com/26402298/120097388-23ba3780-c16b-11eb-8e43-0ed3188f1d10.gif)
