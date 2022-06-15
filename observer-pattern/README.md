# Design Pattern

- addEventListener가 대표적인 예라고 할 수 있지 않을까?

### 단점
1. Subscribers are notified in random order - 이거는 개선할 수 있지 않나? 들어온 순서대로 list를 쌓아놓고, 그 순서에 맞게 notification을 보내주면 되는거 아닌가?

### Mediator And Observer
- goal of Mediator mutual dependencies among a set of system components
- goal of Observer is to establish dynamic one-way connections between objects, where some objects act as subordinates of others
