import createHomePage from "./home";
import createnavBar from "./navbar";

function pageLoader () {
    createnavBar();
    createHomePage();
}

export default pageLoader;