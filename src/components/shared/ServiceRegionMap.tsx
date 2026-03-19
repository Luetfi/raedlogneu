'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { SERVICE_REGION_DETAILS } from '@/lib/constants'

// Custom marker icon using primary brand color
const defaultIcon = L.divIcon({
  className: '',
  html: `<svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 26 16 26s16-14 16-26C32 7.16 24.84 0 16 0z" fill="#0568b1"/>
    <circle cx="16" cy="16" r="7" fill="white"/>
  </svg>`,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -42],
})

const hqIcon = L.divIcon({
  className: '',
  html: `<svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0C8.51 0 0 8.51 0 19c0 14.25 19 31 19 31s19-16.75 19-31C38 8.51 29.49 0 19 0z" fill="#0568b1"/>
    <circle cx="19" cy="19" r="8.5" fill="white"/>
    <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#0568b1">H</text>
  </svg>`,
  iconSize: [38, 50],
  iconAnchor: [19, 50],
  popupAnchor: [0, -50],
})

// Center of the Stuttgart metro area
const CENTER: [number, number] = [48.78, 9.1]
const ZOOM = 11

export default function ServiceRegionMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <MapContainer
        center={CENTER}
        zoom={ZOOM}
        scrollWheelZoom={false}
        className="h-[420px] w-full sm:h-[500px]"
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {SERVICE_REGION_DETAILS.map((region) => (
          <Marker
            key={region.name}
            position={[region.lat, region.lng]}
            icon={region.isHQ ? hqIcon : defaultIcon}
          >
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: '14px', color: '#111' }}>
                  {region.name}
                  {region.isHQ && (
                    <span style={{ marginLeft: '6px', display: 'inline-block', borderRadius: '9999px', backgroundColor: '#dbeafe', padding: '2px 6px', fontSize: '10px', fontWeight: 700, color: '#1d4ed8' }}>
                      HQ
                    </span>
                  )}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(region.name + ', Baden-Württemberg, Deutschland')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', borderRadius: '6px', backgroundColor: '#0568b1', padding: '6px 12px', fontSize: '12px', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}
                >
                  Route planen &rarr;
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
