import { MyComponent } from "@stencil-test/react";

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
				slot="123213"
			></MyComponent>
			<div></div>
		</>
	);
}

export default App;
