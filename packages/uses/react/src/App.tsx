import { MyComponent } from "@stencil-test/react";

function App() {
	return (
		<>
			<MyComponent
				onMyChange={() => {
					console.log("React Trigger");
				}}
			></MyComponent>
		</>
	);
}

export default App;
