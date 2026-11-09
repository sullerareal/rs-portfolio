import { useState } from "react";
import Layout from "../Components/Layout";
import "../Assets/Css/SideQuest.css";

import hiking1 from "../Assets/Images/rs.png";
import hiking2 from "../Assets/Images/rs1.png";
import hiking3 from "../Assets/Images/rspicture.jpg";
import hiking4 from "../Assets/Images/rs.png";
import hiking5 from "../Assets/Images/rs.png";

import shoes1 from "../Assets/Images/rs.png";
import shoes2 from "../Assets/Images/rs.png";

function SideQuest() {

    const hikingImages = [
        hiking1,
        hiking2,
        hiking3,
        hiking4,
        hiking5
    ];

    const shoesImages = [
        shoes1,
        shoes2
    ];

    const [showModal, setShowModal] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (images, index) => {
        setCurrentImages(images);
        setCurrentIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
        );
    };

    return (
        <Layout title="Side Quest">
            <div className="line"></div>

            <div className="sideQuestCard">

                <div className="sideQuestSection">
                    <h2>HIKING</h2>

                    <div className="sideQuestGrid">
                        {hikingImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="sideQuestImage"
                                onClick={() => openModal(hikingImages, index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="sideQuestSection">
                    <h2>Customize Shoes</h2>

                    <div className="sideQuestGrid">
                        {shoesImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="sideQuestImage"
                                onClick={() => openModal(shoesImages, index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="sideQuestSection">
                    <h2>Running</h2>
                </div>

            </div>

            {showModal && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="closeBtn" onClick={closeModal}>
                            ✕
                        </button>

                        {/* Previous Image */}
                        <img
                            src={
                                currentImages[
                                currentIndex === 0
                                    ? currentImages.length - 1
                                    : currentIndex - 1
                                ]
                            }
                            alt=""
                            className="sideImage leftImage"
                            onClick={prevImage}
                        />

                        {/* Previous Button */}
                        <button className="navBtn left" onClick={prevImage}>
                            &#10094;
                        </button>

                        {/* Current Image */}
                        <img
                            src={currentImages[currentIndex]}
                            alt=""
                            className="centerImage"
                        />

                        {/* Next Button */}
                        <button className="navBtn right" onClick={nextImage}>
                            &#10095;
                        </button>

                        {/* Next Image */}
                        <img
                            src={
                                currentImages[
                                (currentIndex + 1) % currentImages.length
                                ]
                            }
                            alt=""
                            className="sideImage rightImage"
                            onClick={nextImage}
                        />
                    </div>
                </div>
            )}

        </Layout>
    );
}

export default SideQuest;