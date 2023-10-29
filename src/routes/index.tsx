import {Routes, Route, Navigate} from 'react-router-dom';

 
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/dashboard" element={<p>Página inicial</p>} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    )
}