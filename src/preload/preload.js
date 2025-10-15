const { contextBridge } = require('electron');
const { compute, formatNumber, symbolForOp } = require('../shared/calculator');

// Expose only the pure functions needed by the UI.
// This keeps renderer secure (no Node.js APIs in the DOM).
contextBridge.exposeInMainWorld('calc', {
    compute,
    formatNumber,
    symbolForOp
});
