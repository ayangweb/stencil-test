import { MyComponent } from "@stencil-test/solid";

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
			></MyComponent>
		</>
	);
}

export default App;
