import { MyComponent, MyTest } from "@stencil-test/solid";
import { createSignal } from "solid-js";

function App() {
	const [count, setCount] = createSignal(1);

	const changeCount = () => {
		setCount(count() + 1);
	};

	return (
		<>
			<MyComponent
				first={String(count())}
				onMyChange={changeCount}
				style={{
					color: "red",
				}}
			>
				count {count()}
			</MyComponent>

			<MyTest slot="test">
				<p>123</p>
			</MyTest>

			<button onClick={changeCount}>count {count()}</button>
		</>
	);
}

export default App;
