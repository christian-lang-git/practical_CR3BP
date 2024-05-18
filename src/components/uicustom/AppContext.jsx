import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [uiState, setUiState] = useState({
        UI_STATE_DATA_PHYSICS_MU: "0.1",
        UI_STATE_DATA_INTEGRATION_STEP_SIZE: "0.001",
        UI_STATE_CAMERA_CONTROLS_ROTATESPEED: "1.0",
        UI_STATE_CAMERA_CONTROLS_PANSPEED: "1.0",
        UI_STATE_CAMERA_CONTROLS_ZOOMSPEED: "1.0",
        UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES: "0.05",
        UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS: "0.01",
        UI_STATE_RENDERING_CLICKED_POSITION_RADIUS: "0.02"
    });

    const value = {
        uiState,
        setUiState: (newState) => setUiState({ ...uiState, ...newState })
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};