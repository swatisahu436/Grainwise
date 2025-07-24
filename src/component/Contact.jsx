import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-head">
                <h1>Let's Connect</h1>
                <p>Ready to elevate your offerings with GrainWise tortillas? Fill out the form below, and our team will be in touch.</p>
            </div>
            <div>
                <ul className="con-list">
                <li>
                    <FaEnvelope /> info@grainwise.com
                </li>
                <li>
                    <FaPhone /> 07776665412
                </li>
                <li>
                    <FaMapMarkerAlt /> 84 Courtenay Road, Maidstone ME15 6UN, Kent,
                    United Kingdom
                </li>
            </ul></div>
        </div>
    );
};
export default Contact;