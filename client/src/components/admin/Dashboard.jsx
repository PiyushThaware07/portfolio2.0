import React, { useState } from 'react';
// & Components ====================================
import NavigationDashboard from './NavigationDashboard';
import MainDashboard from './MainDashboard';


export default function Dashboard() {
    const [template, setTemplate] = useState('Experience');
    return (
        <>
            <div className="min-h-screen min-w-screen ">
                <div className="flex flex-nowrap">
                    <NavigationDashboard setTemplate={setTemplate} template={template} />
                    <MainDashboard template={template} />
                </div>
            </div>
        </>
    )
}
