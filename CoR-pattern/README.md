# Chain of Responsibility Pattern

1. 처리 객체를 여러개로 나누어 책임을 분산하는 패턴
2. 객체간의 결합을 느슨하게 만드는데 좋다.
3. 대표적으로 try catch문을 예로 들 수 있다.
```
try {
    ...     
} catch (IllegalArgumentException e) {
    someCode();
} catch (SecurityException e) {
    someCode();
} catch (IllegalAccessException e) {
    someCode();
} catch (NoSuchFieldException e) {
    someCode();
} finally {
    ...
}
```
4. 여기에서는 request -> response의 process를 예로 들었네
   1. Request 요청
   2. Authentication Class - 누구인지를 검증하는 과정
   3. Parameter Validate Class
   4. Authorization Class - 권한이 있는지를 검증하는 과정
   5. Execute Action
   6. Response


### 잘 이해가 안되는 부분
1. Chain of Responsibility is often used in conjunction with Composite. In this case, when a leaf component gets a request, it may pass it through the chain of all of the parent components down to the root of the object tree.
2. Handlers in Chain of Responsibility can be implemented as Commands. In this case, you can execute a lot of different operations over the same context object, represented by a request. However, there’s another approach, where the request itself is a Command object. In this case, you can execute the same operation in a series of different contexts linked into a chain.
