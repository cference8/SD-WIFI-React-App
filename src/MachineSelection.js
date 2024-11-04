// src/MachineSelection.js

import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set } from 'firebase/database';
import './MachineSelection.css'; // We'll create a CSS file for styling

const MachineSelection = () => {
  // State to hold the machine states
  const [machineStates, setMachineStates] = useState({});

  // Total number of machines (1 to 11)
  const totalMachines = 11;

  // Load initial machine states from Firebase
  useEffect(() => {
    const machinesRef = ref(database, 'machine_states/');
    onValue(machinesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMachineStates(data);
      } else {
        // Initialize machine states if not present
        const initialStates = {};
        for (let i = 1; i <= totalMachines; i++) {
          initialStates[i] = 0;
        }
        setMachineStates(initialStates);
        set(ref(database, 'machine_states/'), initialStates);
      }
    });
  }, [totalMachines]);

  // Handle machine selection
  const handleMachineClick = (machineNum) => {
    const newState = machineStates[machineNum] === 1 ? 0 : 1;
    // Update Firebase
    set(ref(database, `machine_states/${machineNum}`), newState);
  };

  // Render the machine grid
  const renderMachines = () => {
    const machineElements = [];
    for (let i = 1; i <= totalMachines; i++) {
      const isSelected = machineStates[i] === 1;
      machineElements.push(
        <div key={i} className="machine-item">
          <img
            src={isSelected ? `/images/selected/image-m-${i}-selected.png` : `/images/unselected/image-m-${i}.png`}
            alt={`Machine ${i}`}
            onClick={() => handleMachineClick(i)}
            className="machine-image"
          />
          <label>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleMachineClick(i)}
            />
            Machine {i}
          </label>
        </div>
      );
    }
    return machineElements;
  };

  return (
    <div className="machine-selection-container">
      <h2>Select Machines to Stage</h2>
      <div className="machine-grid">
        {renderMachines()}
      </div>
    </div>
  );
};

export default MachineSelection;
