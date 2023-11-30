import GoogleDocumentViewer from "./GoogleDocumentViewer";
import './HomePageContent.css';
import micePicture from "./images/mice-picture.png";

const HomePageContent = () =>{
    return(
        <div>
            <hr background-color="gray" height="1px"/>
            <section className="mice-picture">
                <img className="center" src={micePicture} alt="mice and quote" width="870px" height="220px"/>
            </section>
            <section className="divider">
                <hr className="divider-line"/>
            </section>
            <section className="google-slides-display">
                <div className="side-links">
                    <a href="https://phenome.jax.org/about/search_help">
                        <button className="important-link">1. Find & Select Data</button>
                    </a>
                    <a href="https://phenome.jax.org/mympd/collection">
                        <button className="important-link">2. Go to MyMPD</button>
                    </a>
                    <a href="https://phenome.jax.org/tools/phenomenu?demo=1">
                        <button className="important-link">3. Analyze</button>
                    </a>
                </div>
                <div className="embedded-google-slide">
                    <GoogleDocumentViewer/>
                </div>
            </section>
        </div>
    )
}

export default HomePageContent;
