import { MyComponent, MyTest } from "@stencil-test/react";

function App() {
	return (
		<>
			<MyComponent
				first="React"
				onMyChange={() => {
					console.log("React Trigger");
				}}
				style={{
					color: "red",
				}}
			></MyComponent>

			<MyTest>
				<p>123</p>
			</MyTest>
		</>
	);
}

export default App;
