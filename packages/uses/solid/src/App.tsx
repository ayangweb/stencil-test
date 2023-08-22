import { MyComponent, MyTest } from "@stencil-test/solid";
import { createSignal } from 'solid-js'

function App() {
	const [text, setText] = createSignal('test')

	return (
		<>
			<MyComponent
				first="Solid"
				onMyChange={() => {
					console.log("Solid Trigger");
				}}
				style={{
					color: "red",
				}}
			>
			</MyComponent>

			<MyTest slot="test">
				{text()}

				<input value={text()} onInput={ev => setText(ev.target.value)} />
			</MyTest>
		</>
	);
}

export default App;
