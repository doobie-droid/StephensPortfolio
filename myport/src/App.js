import { Fragment } from "react";
import "./App.scss";
import About from "./components/About/About";
import Feauture from "./components/Features/Feature";
import Header from "./components/Header";
import Experience from "./components/Education/Experience";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Fragment>
			<Header />

			<About />
			<Experience />
			<Feauture />
			<WorkExperience />
			<Form />
			<Footer />
		</Fragment>
	);
}

export default App;