const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '',
    PREFIXE: process.env.PREFIX || "X",
    OWNER_NAME: process.env.OWNER_NAME || "死_ＮＥＭＥＳ１Ｘ♠️",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348077825595",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'noBWM-XMD;;;H4sIAAAAAAAAA5VVyY6rRhT9l9rifmY0YKmleKDxBB4YbBxFURnKUGY0FHh48udkkcXLJptI6e/Jtn8hwm6rW3pDOixQqag699x7zz18BkmKCzRGJ9D+DLIcV5CgeklOGQJt0C23W5SDBvAggaANOmp3thdZTeXY0D9VPnUy+5q+Qk6k5JUmGbDU1XHiE0k9PIJLA2TlJsLuDwAxKWYjIqLhZrfam2PlUJ4ZCk/ZISOvmrC7VJbKhHFlNfK1R3CpESHOceIrWYBilMNojE4ziPOP0df0nCXJLluPLRtT4cyI95FpnLPtJOTcMI/Nldly3bKXLv2P0VcKZUtrA7Y4OMHcS4enqJWqK5wOeRVlS9HoHol0CMJcYw43+gX2E+QNPZQQTE4frrul7p8OXYVyymluF8ICNZ2prEZxum8GYzqVz8RP9vZ42I3DjxHvLKf6NDtPxrK0oFibRoZgudjw7EpGezhZOjs11TqHUrf598Rn+V0r4f+pOzXpJE8O1UVwUknn1sAdsSqxfeuIiXVM+kiTzxO6u96pCf8x+uRAiy1lfmaF2XHbT5hwBZm5iTMoluvzypmuntj5RNFCYa680YekzH/EEhlnURfHAbNTOX4xTZjS4iy/t2fm/rHVR4d4I8fefq5WOHFZLDBLZKc0S/CqKVnJ7mjNnCbdmm7Exa5jrZ0iGHqb+a7zeM0oRKehB9rMpQFy5OOC5JDgNLnuSUIDQK8ykJsjci0v4Nx106NNxhROhhlE1L755NknDbKKGYz0QFC3O3URjfYSTT+CBsjy1EVFgbwBLkianzRUFNBHBWj/fO1UnXSO4pSgEfZAG7AcL9GiKLGCIAs/FZ8OASQFzLJPCSKgAbZ5GmsItEleoga43uAZrvskyV2R7wmy2GJ5hmM4WRGfeqJEs5xY5xjfopo4RgWBcQbajMiJEscJUuvySwMk6EhuAqrT5pgG2OK8IFZSZlEKvbu67h+h66ZlQoxT4vbqBcpBm37bRoTgxC/q1MoE5m6AK9Sr8wDtLYwKdGkAD1XYRTUesAdY4elYMUX21BOWvy5joSgOdemCNLkdQSwt8Ly4feBhCz7wEMkPG5GnH5DIeC2BlVhackFdjtvs1ne+KyWDMkt6so/LpeVP1WqsEUcvlhNz1HKucrhpAOXIu1d5A92wzMw0RMkPcE/KMXYqiquSYD1iRWcgHwezybFJ0cU73Ju2QPvzm1/2Uq/GkwcLW+tpfVB3q47ztRzanPy1IhJYHwf/fPn715fnP16ef3t5/nJ9//ny/PvL81917NfG1KgeIhBHBWiDno7pZGHNue3OqjqOo5w6nXGnU4v23sj7ZN6UPzA4f26fgyAhig4Nz5pUsAhWnZlgRpMw0TNm2ml1ed2P6W+B1CFnFKa2ymxl97bVIFSOiyWkY6aUnLLgFtowoJXBrDnwluo2c92FvcOFwcb5uDyLx0GZskN6UYTu0OytBwPLSHGwyKhuPcZ3Qb0PFkY7PclxOV+0KmZIFpKp2wwu1gxPyfGSdadTc0ONwxatDiL3SDNDbz2yZXeyaUlEGTg2J+5lamOU+pIdIsNfBxZT7fybZ1w9K3r9V+DXab7Jb4vR1Xpf+/LfDXwbBfrSeAfy6ubfkVt3QRNeeXJ5Zy0u+sswsXsimw/tQ5+yBEMYnaFn+lMf9Z0RAZd6xrMIkm2ax6ANingDQQNEsCCdt1H+ljswDRCfOllmEEjuDgA69aOTM7j8C/2uQZKlCAAA',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





