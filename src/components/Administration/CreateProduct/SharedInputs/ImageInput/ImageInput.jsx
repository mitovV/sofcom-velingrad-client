import { Form } from "react-bootstrap"
import { useState } from "react"

import './ImageInput.css'

export default function ImageInput({ imageId }) {
    const [hover, setHover] = useState(false)
    const [image, setImage] = useState({})
    const [imagePreview, setImagePreview] = useState(null)

    const uploadImageHandler = () => {
        document.getElementById(imageId)
            .click()
    }

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage({id: imageId, selectedFile});
        setImagePreview(URL.createObjectURL(selectedFile));
    }

    const handleRemove = () => {
        setImage(null);
        setImagePreview(null);
    }

    return (
        <div className="image-upload-container">
            <Form.Control
                type="file"
                accept="image/*"
                id={imageId}
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
            {imagePreview ? (
                <div
                    className="image-preview-container"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src={imagePreview} alt="preview" className="image-preview" />
                    {hover && (
                        <div className="image-hover-overlay">
                            <button type="button" className="overlay-button" onClick={uploadImageHandler}>
                                Качи друга снимка
                            </button>
                            <button type="button" className="overlay-button" onClick={handleRemove}>
                                Премахни
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className='custom-file-upload' onClick={uploadImageHandler}>
                    <p>Качи снимка</p>
                </div>
            )}
        </div>
    )
}
