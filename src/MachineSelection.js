import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, onValue, set } from 'firebase/database';
import './MachineSelection.css';

const MachineSelection = () => {
  const [machineStates, setMachineStates] = useState({});
  const totalMachines = 30;

  useEffect(() => {
    const machinesRef = ref(database, 'machine_states/');
    onValue(machinesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMachineStates(data);
      } else {
        const initialStates = {};
        for (let i = 1; i <= totalMachines; i++) {
          initialStates[i] = 0;
        }
        setMachineStates(initialStates);
        set(ref(database, 'machine_states/'), initialStates);
      }
    });
  }, [totalMachines]);

  const handleMachineClick = (machineNum) => {
    const newState = machineStates[machineNum] === 1 ? 0 : 1;
    set(ref(database, `machine_states/${machineNum}`), newState);
  };

  const renderMachine = (i) => {
    const isDisabled = i >= 10; // Disable machines 10 and above
    return (
      <div key={i} className="machine-item">
        <img
          src={machineStates[i] === 1 ? `/images/selected/image-m-${i}-selected.png` : `/images/unselected/image-m-${i}.png`}
          alt={`Machine ${i}`}
          onClick={() => !isDisabled && handleMachineClick(i)} // Prevent clicks if disabled
          className={`machine-image ${isDisabled ? 'disabled' : ''}`} // Add a disabled class for styling if needed
          style={{ pointerEvents: isDisabled ? 'none' : 'auto', opacity: isDisabled ? 0.5 : 1 }} // Adjust appearance for disabled state
        />
        <label>
          <input
            type="checkbox"
            checked={machineStates[i] === 1}
            onChange={() => handleMachineClick(i)}
            disabled={isDisabled} // Disable the checkbox
          />
          M-{i}
        </label>
      </div>
    );
  };

  return (
    <div className="machine-selection-container">
      <h2>Select Machines to Stage</h2>
      <div className="machine-layout">
        <div className="left-column">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((i) => renderMachine(i))}
        </div>
        <div className="center-column-2">
          {[10, 11, 12, 13, 14, 15].map((i) => renderMachine(i))}
        </div>
        <div className="center-column-3">
          {[21, 20, 19, 18, 17, 16].map((i) => renderMachine(i))}
        </div>
        <div className="right-column">
          {[22, 23, 24, 25, 26, 27, 28, 29, 30].map((i) => renderMachine(i))}
        </div>
      </div>
    </div>
  );
};

export default MachineSelection;
