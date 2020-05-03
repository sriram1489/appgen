import React from "react";
import { createDevTools } from "redux-devtools";
import DockMonitor from "redux-devtools-dock-monitor";
import LogMonitor from "redux-devtools-log-monitor";

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-m" changePositionKey="ctrl-l" defaultIsVisible={false}>
        <LogMonitor />
    </DockMonitor>

)