# Decorator Pattern

## 특징
1. origin object가 있으면, 해당 object를 변형하지 않고, 첨가 혹은 덧대는 작업만을 한다.
2. 기능을 optional하게 더한다는 점에서 builder와 조금 비슷하다고도 생각했다.
3. 하지만 두 패턴의 가장 주요한 차이는, builder 패턴은 origin object가 완성되기 전에 하나하나 구성을 만들어가면서 최종 결과물을 만들어는 creational pattern이고, decorator는 이미 만들어진 origin object에 덧붙이는 방식이다. 따라서 decorator pattern은 runtime 도중에도 유연하게 더할 수 있다.
