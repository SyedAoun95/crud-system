"use client";

import React, { useEffect, useState } from "react";
import { initDB } from "../services/db";

export default function PersonsPage() {
  const [db, setDb] = useState<any>(null);
  const [areas, setAreas] = useState<any[]>([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [persons, setPersons] = useState<any[]>([]);
  const [personName, setPersonName] = useState("");
  const [personNumber, setPersonNumber] = useState<number>(0);
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

  const loadPersons = async (areaId: string) => {
    if (!db) return;
    setSelectedArea(areaId);
    const allPersons = await db.getPersonsByArea(areaId);
    setPersons(allPersons);
  };

  const addPerson = async () => {
    if (!db || !personName.trim() || !personNumber || !selectedArea) return;
    await db.createPerson(personName, personNumber, selectedArea);
    const allPersons = await db.getPersonsByArea(selectedArea);
    setPersons(allPersons);
    setPersonName("");
    setPersonNumber(0);
  };

  const deletePerson = async (person: any) => {
    if (!db) return;
    await db.deletePerson(person);
    const allPersons = await db.getPersonsByArea(selectedArea);
    setPersons(allPersons);
  };

  if (loading) return <div>Loading DB...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Persons</h1>

      <label>Select Area: </label>
      <select
        value={selectedArea}
        onChange={(e) => loadPersons(e.target.value)}
      >
        <option value="">--Select Area--</option>
        {areas.map((area) => (
          <option key={area._id} value={area._id}>
            {area.name}
          </option>
        ))}
      </select>

      {selectedArea && (
        <>
          <div style={{ marginTop: "1rem" }}>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Person Name"
            />
            <input
              type="number"
              value={personNumber}
              onChange={(e) => setPersonNumber(Number(e.target.value))}
              placeholder="Number"
            />
            <button onClick={addPerson}>Add Person</button>
          </div>

          <ul style={{ marginTop: "1rem" }}>
            {persons.map((p) => (
              <li key={p._id}>
                {p.name} - {p.number}{" "}
                <button onClick={() => deletePerson(p)} style={{ marginLeft: "1rem" }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
