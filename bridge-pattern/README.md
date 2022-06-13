# Bridge Pattern

### 장점
1. 하나의 거대한 class가 아닌 여러개의 class로 쪼개서 관리할 수 있다. 쪼개진 각각의 class는 독립적이기 때문에 나중에 분석 및 고도화를 진행할 때 시간을 덜 잡아먹는다.
2. 클라이언트의 코드는 디테일하게 들어가지 않고, 추상 단계로만 코드를 구현할 수 있다.
3. 런타임 도중에도 class를 변경할 수 있다.

### 단점
1. 응집력있는 class로 만들 수는 없다. 단점인가?

#### GUI 부분에 대해서 조금 더 이해해본다면?
1. GUI가 Abstraction이고, OS API가 implementation이다?
2. 이걸로 이해해서 코드를 짜면 좋을거 같아.

- Abstraction: GUI layer of the app
- Implementation: the operating systems' APIs

