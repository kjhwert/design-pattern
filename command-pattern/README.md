# Command Pattern

### 이해
1. The Command pattern can turn a specific method call into a stand-alone object. 
2. 그 메소드 내부에는 네가 원하는 모든지 구현할 수 있다.
```
const App = () => {
    const onButtonClick = () => {
        // do whatever you want
    }

    return (
        <button onClick={onButtonClick}>Button</button>
    )
}
```
3. 예제에서는 클래스를 이용해서 장황하게 풀어냈지만, Command Pattern이 적용되어 있는 예제는 JS의 HTML event에서 쉽게 찾아볼 수 있다. 


### 잘 이해가 안되는 부분
1. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own. - 미리 데이터를 구성하거나 자체적으로 가지고 있으면 된다는거 같은데.. 그게 어떻게 가능하지? 상태를 별도로 관리해서 그걸 execute action에 넘겨주는건가?
2. undo/redo, 지연실행 등은 구현하기 나름 아닌가..? 이게 왜 Command 패턴의 장점이라고 얘기될 수 있는거지?
3. Command는 그냥 execute하는 껍데기인데...? 그걸 실제 수행하는건 Business Logic 이잖아. 여기서도 예시 든 것처럼 Business Logic은 Memento가 수행한다고 얘기하고
