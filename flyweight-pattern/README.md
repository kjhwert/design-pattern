# Flyweight Pattern

- This constant data of an object is usually called the intrinsic state. It lives within the object; other objects can only read it, not change it. The rest of the object’s state, often altered “from the outside” by other objects, is called the extrinsic state.

### 장점
1. 메모리를 절약할 수 있다.

### 단점
1. RAM 대신 CPU 사용량이 늘어날 수 있다. 메모리에 가지고 있는 객체를 꺼내올 때 값을 재계산해야 하므로

### 주의할 점
1. 동일 객체를 다른 곳에서도 사용할 수 있기 때문에 수정되지 않도록 주의해야 한다.
2. 따라서 setter나 public fields가 노출되어서는 안된다.

#### 구현
1. TreeType - name, color, texture, draw 메소드
2. *TreeFactory - collection of tree type. 왜 tree type을 저장하고 있을까?
3. Tree - 객체. 나무의 위치 값과 treeType을 가진다.
4. Forest (client) - 나무를 생성하고, 캔버스에 그리는 역할.

#### 궁금한 점
Q. TreeFactory는 tree type을 저장하고 있음. Tree는 어디에 저장해?
A. Tree는 Forest(client)에서 관리하고 있음.
