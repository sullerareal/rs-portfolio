import Layout from "../Components/Layout";
import "../Assets/Css/Certificate.css";

import java from "../Assets/Images/java.jpg";

function Certificates() {
    return (
        <Layout title="Certificates">
            <div className="line"></div>

            {/* <div className="aboutCard certificateIntro">
                <div className="certificateIcon">🏅</div>

                <p>
                    Here are some of the certificates I've earned throughout my learning journey.
                </p>
            </div> */}

            <div className="certificateGrid">

                <a
                    className="certificateCard"
                    href={java}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={java}
                        alt="Java Certificate"
                        className="certificateImage"
                    />
                </a>

                <a
                    className="certificateCard"
                    href={java}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={java}
                        alt="Java Certificate"
                        className="certificateImage"
                    />
                </a>

                <a
                    className="certificateCard"
                    href={java}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={java}
                        alt="Java Certificate"
                        className="certificateImage"
                    />
                </a>

                <a
                    className="certificateCard"
                    href={java}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={java}
                        alt="Java Certificate"
                        className="certificateImage"
                    />
                </a>
                <a
                    className="certificateCard"
                    href={java}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={java}
                        alt="Java Certificate"
                        className="certificateImage"
                    />
                </a>

            </div>
        </Layout>
    );
}

export default Certificates;