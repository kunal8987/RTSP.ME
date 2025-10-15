import React, { useState } from 'react';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #4f8cff 0%, #6ee7b7 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
            }}
        >
            <h1
                style={{
                    color: '#fff',
                    fontSize: '2.5rem',
                    marginBottom: '24px',
                    textShadow: '1px 2px 8px rgba(0,0,0,0.2)',
                }}
            >
                Welcome to the Livestream App
            </h1>
            {!isVisible && (
                <button
                    onClick={() => setIsVisible(true)}
                    style={{
                        padding: '14px 36px',
                        fontSize: '1.2rem',
                        background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                        cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                >
                    ▶ Play Livestream
                </button>
            )}
            {isVisible && (
                <div
                    style={{
                        marginTop: '24px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: '#fff',
                    }}
                >
                    <iframe
                        width="640"
                        height="480"
                        src="https://rtsp.me/embed/f6BdeBit/"
                        frameBorder="0"
                        allowFullScreen
                        style={{ border: 'none', display: 'block' }}
                        title="Livestream"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default LandingPage;