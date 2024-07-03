// map.jsx

import React, { useEffect, useRef } from 'react';

const Map = ({ locations }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the map
        if (locations.length > 0 && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: locations[0].latitude, lng: locations[0].longitude },
                zoom: 10, // Adjust the zoom level as needed
            });

            // Add markers for each location
            locations.forEach(location => {
                new window.google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map,
                    title: location.name,
                });
            });
        }
    }, [locations]);

    return (
        <div className="map-container">
            <div ref={mapRef} className="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
    );
};

export default Map;
