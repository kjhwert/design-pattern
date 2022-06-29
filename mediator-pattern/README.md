# Mediator pattern

1. 수도코드만 봐도 notify 메소드에 벌써 과부하가 오는 느낌인데?
2. Use the pattern when you can’t reuse a component in a different program. 이미 너무 dependency가 강해서 건들기 어려운 class의 경우 메소드 하나를 추가해서 mediator에 일임할 수 있으니까, 어쩌면 이런 패턴으로 class 사용을 우회하는 것도 좋은거 같아.
3. it’s easy to define entirely new ways for these components to collaborate by introducing new mediator classes, without having to change the components themselves. 이것도 내내 똑같은 소리긴 해

react에서 mediator 방식으로 input change를 관리하는 방법도 있지
```
const app = () => {
    const [state, setState] = useState({
        email: '',
        name: ''
    });
    
    const onInputChange = (e) => {
        // 하지만 이런식으로 사용하면, 불필요하게 re-render가 되기 때문에 권장하지는 않음
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <input name='email' onChange={onInputChange} />
            <input name='name' onChange={onInputChange} />
        </div>
    )
}
```
