import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Four Cape Peninsula courses with real coordinates.
// Numbered I–IV in the order they are played during the Coastal Classic week.
const COURSES = [
  {
    roman: 'I',
    name: 'King David Mowbray Golf Club',
    tagline: 'Parkland excellence in the heart of the city.',
    lat: -33.9428,
    lng: 18.5008,
  },
  {
    roman: 'II',
    name: 'Clovelly Country Club',
    tagline: 'Coastal and rolling in the Silvermine Valley.',
    lat: -34.1039,
    lng: 18.4478,
  },
  {
    roman: 'III',
    name: 'De Zalze Golf Club',
    tagline: 'A championship test among the Stellenbosch vineyards.',
    lat: -33.9697,
    lng: 18.8739,
  },
  {
    roman: 'IV',
    name: 'Rondebosch Golf Club',
    tagline: 'Classic Cape views and a scenic, challenging layout.',
    lat: -33.9769,
    lng: 18.4936,
  },
];

// Branded gold pin (DivIcon). Anchors at the bottom tip of the pin.
function goldPin(roman) {
  const html = `
    <div style="
      position: relative;
      width: 34px; height: 46px;
      filter: drop-shadow(0 3px 4px rgba(15,20,32,0.35));
    ">
      <svg viewBox="0 0 34 46" width="34" height="46" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.5
                 C25.56 1.5 32.5 8.44 32.5 17
                 C32.5 27.5 17 44.5 17 44.5
                 C17 44.5 1.5 27.5 1.5 17
                 C1.5 8.44 8.44 1.5 17 1.5 Z"
              fill="#C7A352"
              stroke="#FBF8F1"
              stroke-width="1.5"/>
        <circle cx="17" cy="17" r="8" fill="#0F1A2B"/>
        <text x="17" y="20.5"
              text-anchor="middle"
              font-family="'Playfair Display', 'Cormorant Garamond', serif"
              font-size="10"
              font-weight="700"
              fill="#C7A352"
              letter-spacing="0.02em">${roman}</text>
      </svg>
    </div>
  `;
  return L.divIcon({
    html,
    className: 'bsg-gold-pin', // prevents default leaflet-div-icon bg/border
    iconSize: [34, 46],
    iconAnchor: [17, 44],
    popupAnchor: [0, -40],
  });
}

export default function CapeCourseMap({ className = '' }) {
  // Cape Peninsula centroid — roughly between the 4 courses, biased west to
  // keep the coastline visible on the left edge of the frame.
  const center = [-34.02, 18.55];
  const zoom = 10;

  return (
    <div className={className}>
      {/* Gold double-line frame wrapper — matches site's .gold-frame utility. */}
      <div className="gold-frame bg-navy-900">
        <div
          className="relative overflow-hidden h-[400px] md:h-[420px] rounded-md"
          style={{
            // Subtle palette harmonization — warm the tiles toward the
            // cream/gold/navy brand. Kept light so the map still reads as real.
            filter: 'sepia(0.15) saturate(0.95) brightness(0.98)',
          }}
        >
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            attributionControl={true}
          >
            {/* CartoDB Voyager — warm parchment tones, no API key required.
                Complements the navy + gold editorial palette. */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
              subdomains={['a', 'b', 'c', 'd']}
              maxZoom={19}
            />

            {COURSES.map((c) => (
              <Marker
                key={c.name}
                position={[c.lat, c.lng]}
                icon={goldPin(c.roman)}
              >
                <Popup>
                  <div style={{ minWidth: 180 }}>
                    <div
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', 'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A6D2D',
                        marginBottom: 4,
                      }}
                    >
                      Round {c.roman}
                    </div>
                    <div
                      style={{
                        fontFamily:
                          "'Playfair Display', 'Cormorant Garamond', serif",
                        fontSize: 15,
                        lineHeight: 1.25,
                        color: '#0F1A2B',
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', 'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontSize: 13,
                        color: '#3E4A5F',
                        lineHeight: 1.4,
                      }}
                    >
                      {c.tagline}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Legend — editorial typography, numbered rounds */}
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px] leading-tight">
        {COURSES.map((c) => (
          <li key={c.name} className="flex items-baseline gap-2">
            <span className="font-display text-gold-400 text-[13px] tracking-wider shrink-0 w-5">
              {c.roman}
            </span>
            <span className="font-serif italic text-cream-100/85">
              {c.name.replace(' Golf Club', '').replace(' Country Club', '')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
