
"use client";

import React, { useEffect, useState } from "react";
import { initDB } from "../services/db";


export default function AreasPage() {
  const [db, setDb] = useState<any>(null);
  const [areas, setAreas] = useState<any[]>([]);
  const [areaName, setAreaName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupDB = async () => {
      const pouch = await initDB();
      if (pouch) {
        pouch.syncDB();
        setDb(pouch);
        const allAreas = await pouch.getAreas();
        setAreas(allAreas);
        setLoading(false);
      }
    };
    setupDB();
  }, []);

  const addArea = async () => {
    if (!db || !areaName.trim()) return;
    await db.createArea(areaName);
    const allAreas = await db.getAreas();
    setAreas(allAreas);
    setAreaName("");
  };

  const deleteArea = async (area: any) => {
    if (!db) return;
    await db.deleteArea(area);
    const allAreas = await db.getAreas();
    setAreas(allAreas);
  };

  if (loading) return <div>Loading DB...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Areas</h1>

      <input
        type="text"
        value={areaName}
        onChange={(e) => setAreaName(e.target.value)}
        placeholder="New Area Name"
      />
      <button onClick={addArea}>Add Area</button>

      <ul style={{ marginTop: "1rem" , color: "black"}}>
        {areas.map((area) => (
          <li key={area._id}>
            {area.name}{" "}
            <button onClick={() => deleteArea(area)} style={{ marginLeft: "1rem" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
