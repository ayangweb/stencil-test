import { MyComponent, MyTest } from "@stencil-test/solid";

function App() {
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
				<input />
			</MyTest>
		</>
	);
}

export default App;
