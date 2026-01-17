import React, { useEffect, useState } from 'react';
import { useMode } from '../context/ModeContext';

const Hero = () => {
    const { mode } = useMode();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            setOffset({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="command-center" className="command-center">
            <div
                className="parallax-bg"
                id="parallaxBg"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
                <div className="grid-overlay"></div>
                <div className="quote-container">
                    <h1 className="main-quote glitch-text" data-text="Turning a big dream into a big reality">
                        Turning a big dream into a big reality
                    </h1>
                </div>
            </div>

            <div className="center-content">
                <div className="identity-card">
                    <div className="card-header">
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            <span className="status-text">ACTIVE</span>
                        </div>
                        <div className="operator-id">OP-2026</div>
                    </div>

                    <div className="profile-photo-container">
                        <img src="\img\about-img1.png" alt="Moataz Zaky Profile Photo" className="profile-photo" />
                    </div>

                    <h2 className="operator-name">MOATAZ ZAKY</h2>
                    <p className="operator-title">Senior Operations @ INSTANT SOFTWARE SOLUTIONS</p>

                    <div className="role-display" id="roleDisplay">
                        <span
                            className={`role-text business-mode ${mode === 'tech' ? 'hidden' : ''}`}
                            style={{ display: mode === 'tech' ? 'none' : 'block' }}
                        >
                            New Business Development | Account Management
                        </span>
                        <span
                            className={`role-text tech-mode ${mode === 'business' ? 'hidden' : ''}`}
                            style={{ display: mode === 'business' ? 'none' : 'block' }}
                        >
                            Cybersecurity Student | CCNA
                        </span>
                    </div>

                    <div className="quick-stats">
                        <div className="stat-item">
                            <i className="fas fa-briefcase"></i>
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Years Exp</span>
                        </div>
                        <div className="stat-item">
                            <i className="fas fa-certificate"></i>
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-item">
                            <i className="fas fa-code"></i>
                            <span className="stat-value">10+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>

                    <div className="social-matrix">
                        <SocialLink
                            href="https://www.linkedin.com/in/moatazaky/"
                            icon="fab fa-linkedin"
                            tooltip="LinkedIn"
                            visible={mode === 'business' || mode === 'both'}
                        />
                        <SocialLink
                            href="https://github.com/eli0zak"
                            icon="fab fa-github"
                            tooltip="GitHub"
                            visible={mode === 'tech'}
                        />
                        <SocialLink
                            href="https://www.instagram.com/mo3tazaky/"
                            icon="fab fa-instagram"
                            tooltip="Instagram"
                            visible={mode === 'business'}
                        />
                        <SocialLink
                            href="https://twitter.com/mo3tazaky"
                            icon="fab fa-x-twitter"
                            tooltip="X (Twitter)"
                            visible={true} // 'both'
                        />
                        <SocialLink
                            href="https://tryhackme.com/p/mo3tazaky"
                            icon="fas fa-flag"
                            tooltip="TryHackMe"
                            visible={mode === 'tech'}
                        />
                    </div>

                    <button className="cta-button" onClick={scrollToContact}>
                        <span>INITIATE CONTACT</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>SCROLL TO EXPLORE</span>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, tooltip, visible }) => {
    const [opacity, setOpacity] = useState(visible ? 1 : 0);
    const [display, setDisplay] = useState(visible ? 'flex' : 'none');

    useEffect(() => {
        if (visible) {
            setDisplay('flex');
            // Small delay to allow display to apply before opacity transition
            setTimeout(() => setOpacity(1), 50);
        } else {
            setOpacity(0);
            setTimeout(() => setDisplay('none'), 300);
        }
    }, [visible]);

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            data-tooltip={tooltip}
            style={{ display, opacity, transition: 'opacity 0.3s ease' }}
        >
            <i className={icon}></i>
        </a>
    );
};

export default Hero;

