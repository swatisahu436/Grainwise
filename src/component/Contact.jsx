import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-head">
                <h1>Let's Connect</h1>
                <p>Ready to elevate your offerings with GrainWise tortillas?</p>
            </div>
            <div>
                <ul className="con-list">
                    <li>
                        <FaEnvelope />
                        <a style={{color:"#264187",textDecoration:"none"}}
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@grainwise.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            info@grainwise.com
                        </a>
                    </li>
                    <li>
                        <FaPhone />
                        07776665412
                    </li>
                    <li>
                        <FaMapMarkerAlt /> 84 Courtenay Road, Maidstone ME15 6UN, Kent,
                        United Kingdom
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Contact;