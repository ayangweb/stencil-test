import { MyComponent } from "@stencil-test/solid";

function App() {
	return (
		<>
			<MyComponent
				onMyChange={() => {
					console.log("Solid Trigger");
				}}
			></MyComponent>
		</>
	);
}

export default App;
