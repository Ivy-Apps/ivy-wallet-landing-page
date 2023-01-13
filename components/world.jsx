import { useState, useEffect, useRef } from "react";
import { MeshLambertMaterial, DoubleSide } from "three";
import { feature } from "topojson-client";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const polygonsMaterial = new MeshLambertMaterial({
  color: "#63e0c2",
  side: DoubleSide,
});

export default function World() {
  const globeEl = useRef();
  const [landPolygons, setLandPolygons] = useState([]);

  const _handleResize = () => {
    if (globeEl.current) {
      globeEl.current.camera().aspect = window.innerWidth / window.innerHeight;
      globeEl.current.camera().updateProjectionMatrix();
      globeEl.current.renderer().setSize(window.innerWidth, window.innerHeight);
    }
  };

  useEffect(() => {
    fetch("https://unpkg.com/world-atlas/land-110m.json")
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(feature(landTopo, landTopo.objects.land).features);
      });

    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.1;
      globeEl.current.pointOfView({ altitude: 1.6 }, 3500);
    }
    window.addEventListener("resize", _handleResize, false);

    return () => {
      window.removeEventListener("resize", _handleResize, false);
    };
  }, []);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={true}
      showAtmosphere={true}
      atmosphereColor="rgba(170, 66, 255, 1)"
      polygonsData={landPolygons}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => "rgba(0, 0, 0, 0)"}
    />
  );
}
