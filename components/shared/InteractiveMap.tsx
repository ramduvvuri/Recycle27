"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Navigation, 
  Search, 
  Compass, 
  Bus, 
  Car,
  Map as MapIcon,
  Plus, 
  Minus, 
  X, 
  Layers, 
  ExternalLink,
  Building,
  BookOpen,
  Home
} from "lucide-react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

interface CampusPoint {
  id: string;
  name: string;
  type: "venue" | "library" | "guesthouse" | "academic" | "gate" | "hostel" | "sac";
  lat: number;
  lng: number;
  xPercent: number; // For fallback map overlay
  yPercent: number;
}

const IITG_COORDS = { lat: 26.1878, lng: 91.6916 };

const CAMPUS_POINTS: CampusPoint[] = [
  { id: "venue", name: "Conference Venue", type: "venue", lat: 26.1878, lng: 91.6916, xPercent: 68, yPercent: 38 },
  { id: "library", name: "Central Library", type: "library", lat: 26.1895, lng: 91.6925, xPercent: 57, yPercent: 41 },
  { id: "academic", name: "Academic Complex", type: "academic", lat: 26.1865, lng: 91.6945, xPercent: 72, yPercent: 43 },
  { id: "guesthouse", name: "Guest House", type: "guesthouse", lat: 26.1845, lng: 91.6890, xPercent: 49, yPercent: 43 },
  { id: "sac", name: "Student Activity Centre", type: "sac", lat: 26.1915, lng: 91.6910, xPercent: 55, yPercent: 37 },
  { id: "maingate", name: "Main Gate", type: "gate", lat: 26.1820, lng: 91.6920, xPercent: 57, yPercent: 49 },
  { id: "northgate", name: "North Gate", type: "gate", lat: 26.1940, lng: 91.6910, xPercent: 55, yPercent: 28 },
  { id: "hostels", name: "Hostels Area", type: "hostel", lat: 26.1930, lng: 91.6880, xPercent: 58, yPercent: 32 },
];

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");
  const [showVenueCard, setShowVenueCard] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(15);
  const [searchQuery, setSearchQuery] = useState("IIT Guwahati");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Initialize Real Google Maps API if key is present
  useEffect(() => {
    if (!apiKey) {
      setLoadError(true);
      return;
    }

    setOptions({ key: apiKey });

    importLibrary("maps")
      .then(() => {
        if (!mapRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const g = (window as any).google;
        if (!g) return;

        const map = new g.maps.Map(mapRef.current, {
          center: IITG_COORDS,
          zoom: 15,
          mapTypeId: mapType,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi.school",
              elementType: "geometry",
              stylers: [{ color: "#d9e8e0" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#b9d6e8" }],
            },
          ],
        });

        // Add Conference Venue custom marker
        const marker = new g.maps.Marker({
          position: IITG_COORDS,
          map,
          title: "Conference Venue — IIT Guwahati",
          icon: {
            path: g.maps.SymbolPath.CIRCLE,
            scale: 9,
            fillColor: "#7e2a2a",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });

        marker.addListener("click", () => {
          setShowVenueCard(true);
          map.panTo(IITG_COORDS);
        });

        // Add additional campus markers
        CAMPUS_POINTS.slice(1).forEach((pt) => {
          new g.maps.Marker({
            position: { lat: pt.lat, lng: pt.lng },
            map,
            title: pt.name,
            icon: {
              path: g.maps.SymbolPath.CIRCLE,
              scale: 5,
              fillColor: "#333333",
              fillOpacity: 0.85,
              strokeColor: "#ffffff",
              strokeWeight: 1.5,
            },
          });
        });

        setMapInstance(map);
        setIsLoaded(true);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        console.warn("Google Maps JS API load failed, using interactive fallback:", err);
        setLoadError(true);
      });
  }, [apiKey]);

  // Handle map type toggle
  const toggleMapType = () => {
    const nextType = mapType === "roadmap" ? "satellite" : "roadmap";
    setMapType(nextType);
    if (mapInstance) {
      mapInstance.setMapTypeId(nextType);
    }
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 1, 19));
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() ?? 15) + 1);
    }
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 1, 12));
    if (mapInstance) {
      mapInstance.setZoom((mapInstance.getZoom() ?? 15) - 1);
    }
  };

  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Indian+Institute+of+Technology+Guwahati",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNearby = () => {
    setActiveFilter(activeFilter === "nearby" ? null : "nearby");
    if (mapInstance) {
      mapInstance.panTo(IITG_COORDS);
      mapInstance.setZoom(15);
    }
  };

  const handleTransit = () => {
    setActiveFilter(activeFilter === "transit" ? null : "transit");
    window.open(
      "https://maps.google.com/?q=Transit+near+IIT+Guwahati",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleParking = () => {
    setActiveFilter(activeFilter === "parking" ? null : "parking");
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-light-border bg-[#eef3f1] shadow-sm select-none">
      {/* ========================================================
          TOP SEARCH & CONTROLS BAR (Matches Screenshot Exactly)
      ======================================================== */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center gap-2 pointer-events-auto">
        {/* Search Input Box */}
        <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md border border-black/10 min-w-[200px] sm:min-w-[240px]">
          <Search size={15} className="text-dark-text/60 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs font-medium text-dark-text outline-none placeholder:text-secondary-text/60"
            placeholder="Search IIT Guwahati"
          />
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={handleDirections}
            className="flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-[11px] font-medium text-dark-text shadow-md border border-black/10 transition-colors hover:bg-soft-bg"
          >
            <Navigation size={13} className="text-primary-emerald" />
            <span>Directions</span>
          </button>

          <button
            onClick={handleNearby}
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[11px] font-medium shadow-md border border-black/10 transition-colors ${
              activeFilter === "nearby"
                ? "bg-primary-dark text-light-text"
                : "bg-white text-dark-text hover:bg-soft-bg"
            }`}
          >
            <Compass size={13} className={activeFilter === "nearby" ? "text-light-text" : "text-primary-emerald"} />
            <span>Nearby</span>
          </button>

          <button
            onClick={handleTransit}
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[11px] font-medium shadow-md border border-black/10 transition-colors ${
              activeFilter === "transit"
                ? "bg-primary-dark text-light-text"
                : "bg-white text-dark-text hover:bg-soft-bg"
            }`}
          >
            <Bus size={13} className={activeFilter === "transit" ? "text-light-text" : "text-primary-emerald"} />
            <span>Transit</span>
          </button>

          <button
            onClick={handleParking}
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[11px] font-medium shadow-md border border-black/10 transition-colors ${
              activeFilter === "parking"
                ? "bg-primary-dark text-light-text"
                : "bg-white text-dark-text hover:bg-soft-bg"
            }`}
          >
            <Car size={13} className={activeFilter === "parking" ? "text-light-text" : "text-primary-emerald"} />
            <span>Parking</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          MAP CANVAS (Google Maps Platform or Full Interactive Fallback)
      ======================================================== */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full">
        {/* Real Google Maps DIV */}
        {apiKey && !loadError && (
          <div ref={mapRef} className="h-full w-full" />
        )}

        {/* High-Fidelity Interactive Map Fallback (replicates the custom Google Map view in target screenshot) */}
        {(!apiKey || loadError) && (
          <div className="relative h-full w-full overflow-hidden bg-[#e5ece8]">
            {/* Real Interactive Google Maps iframe embed underneath for full drag & zoom capabilities */}
            <iframe
              title="IIT Guwahati Campus Map"
              src={
                mapType === "satellite"
                  ? "https://maps.google.com/maps?q=26.1878,91.6916&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                  : "https://maps.google.com/maps?q=26.1878,91.6916&t=m&z=15&ie=UTF8&iwloc=&output=embed"
              }
              className="absolute inset-0 h-full w-full border-0 opacity-80 transition-opacity"
              loading="lazy"
            />

            {/* Custom Styled Campus Marker Layer */}
            <div className="pointer-events-none absolute inset-0 z-10">
              {/* Brahmaputra River Label */}
              <div className="absolute right-12 top-16 -rotate-6 font-display text-[12px] italic text-[#4a728a]/80">
                Brahmaputra River
              </div>

              {/* Hostels Area */}
              <div className="absolute left-[56%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-dark-text/80 shadow-sm border border-black/5">
                  Hostels Area
                </span>
              </div>

              {/* North Gate */}
              <div className="absolute left-[54%] top-[24%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-700 ring-2 ring-white" />
                <span className="text-[10px] font-semibold text-dark-text/80 drop-shadow-sm">North Gate</span>
              </div>

              {/* Student Activity Centre */}
              <div className="absolute left-[52%] top-[37%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-700 ring-2 ring-white" />
                <span className="text-[10px] font-medium text-dark-text/80 drop-shadow-sm">Student Activity Centre</span>
              </div>

              {/* Central Library */}
              <div className="absolute left-[56%] top-[42%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-700 ring-2 ring-white" />
                <span className="text-[10px] font-medium text-dark-text/80 drop-shadow-sm">Central Library</span>
              </div>

              {/* Guest House */}
              <div className="absolute left-[48%] top-[44%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-700 ring-2 ring-white" />
                <span className="text-[10px] font-medium text-dark-text/80 drop-shadow-sm">Guest House</span>
              </div>

              {/* Academic Complex */}
              <div className="absolute left-[70%] top-[44%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-700 ring-2 ring-white" />
                <span className="text-[10px] font-medium text-dark-text/80 drop-shadow-sm">Academic Complex</span>
              </div>

              {/* Main Gate */}
              <div className="absolute left-[56%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-stone-700 ring-2 ring-white" />
                <span className="text-[10px] font-semibold text-dark-text/80 drop-shadow-sm">Main Gate</span>
              </div>

              {/* IIT Guwahati center watermark */}
              <div className="absolute left-[60%] top-[46%] -translate-x-1/2 -translate-y-1/2 font-display text-[15px] font-semibold text-dark-text/40 tracking-wider">
                IIT Guwahati
              </div>

              {/* Conference Venue Primary Marker (Matches Target Screenshot Exactly) */}
              <div
                onClick={() => setShowVenueCard(true)}
                className="pointer-events-auto absolute left-[66%] top-[39%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 cursor-pointer group transition-transform hover:scale-105"
              >
                <div className="relative">
                  <div className="h-7 w-7 rounded-full bg-[#7e2a2a] ring-4 ring-white shadow-lg flex items-center justify-center">
                    <MapPin size={16} className="text-white fill-white" />
                  </div>
                  <span className="absolute -inset-1 rounded-full bg-[#7e2a2a]/25 animate-ping -z-10" />
                </div>
                <div className="rounded-md bg-white/95 px-2 py-1 shadow-md border border-black/10 backdrop-blur-sm">
                  <strong className="block text-[11px] font-semibold text-dark-text leading-tight">Conference Venue</strong>
                  <span className="text-[9px] text-secondary-text block">IIT Guwahati</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            FLOATING VENUE INFORMATION CARD (Matches Screenshot)
        ======================================================== */}
        {showVenueCard && (
          <div className="absolute top-20 right-4 sm:right-6 z-20 w-[280px] sm:w-[310px] rounded-xl bg-white p-3 shadow-2xl border border-black/10 transition-all duration-300 pointer-events-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowVenueCard(false)}
              className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Close venue card"
            >
              <X size={13} />
            </button>

            {/* Thumbnail Image */}
            <div className="relative h-32 w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                alt="IIT Guwahati Academic Complex"
                fill
                sizes="310px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="mt-3 px-1">
              <h4 className="font-display text-base font-semibold text-dark-text leading-snug">
                Conference Venue
              </h4>
              <p className="text-[11px] text-secondary-text mt-0.5">
                Indian Institute of Technology Guwahati
              </p>

              <div className="mt-2.5 flex items-start gap-1.5 text-[11px] text-secondary-text">
                <MapPin size={13} className="text-primary-emerald mt-0.5 shrink-0" />
                <span>IIT Guwahati, Assam 781039, India</span>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={handleDirections}
                className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-[#173d31] py-2 text-xs font-medium text-white transition-all hover:bg-primary-emerald shadow-sm"
              >
                <span>Get Directions</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            MAP & SATELLITE CONTROLS (Top Right)
        ======================================================== */}
        <div className="absolute top-4 right-4 sm:right-12 z-20 flex overflow-hidden rounded-md bg-white shadow-md border border-black/10 pointer-events-auto">
          <button
            onClick={() => {
              setMapType("roadmap");
              if (mapInstance) mapInstance.setMapTypeId("roadmap");
            }}
            className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-medium transition-colors ${
              mapType === "roadmap" ? "bg-[#173d31] text-white" : "text-dark-text hover:bg-soft-bg"
            }`}
          >
            <MapIcon size={13} />
            <span>Map</span>
          </button>
          <button
            onClick={() => {
              setMapType("satellite");
              if (mapInstance) mapInstance.setMapTypeId("satellite");
            }}
            className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-medium transition-colors ${
              mapType === "satellite" ? "bg-[#173d31] text-white" : "text-dark-text hover:bg-soft-bg"
            }`}
          >
            <Layers size={13} />
            <span>Satellite</span>
          </button>
        </div>

        {/* ========================================================
            ZOOM CONTROLS (Bottom Right)
        ======================================================== */}
        <div className="absolute bottom-6 right-4 z-20 flex flex-col overflow-hidden rounded-md bg-white shadow-md border border-black/10 pointer-events-auto">
          <button
            onClick={handleZoomIn}
            className="flex h-7 w-7 items-center justify-center border-b border-light-border text-dark-text transition-colors hover:bg-soft-bg"
            aria-label="Zoom in"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-7 w-7 items-center justify-center text-dark-text transition-colors hover:bg-soft-bg"
            aria-label="Zoom out"
          >
            <Minus size={14} />
          </button>
        </div>

        {/* Legal Footer Note */}
        <div className="absolute bottom-1 right-14 z-10 text-[9px] text-dark-text/50 hidden sm:block">
          Map data ©2027 · Terms · Report a map error
        </div>
      </div>
    </div>
  );
}
