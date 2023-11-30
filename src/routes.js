const dashboard = require('./data/dashboard.json');
const pasien = require('./data/pasien.json');
const dokter = require('./data/dokter.json');
const perawat = require('./data/perawat.json');
const admin = require('./data/admin.json');

const routes = [
  {
    method: 'GET',
    path: '/dashboard',
    handler: (request, h) => {
        return dashboard;
    },
  },
  {
    method: 'GET',
    path: '/pasien',
    handler: (request, h) => {
        return pasien;
    },
  },
  {
    method: 'GET',
    path: '/dokter',
    handler: (request, h) => {
        return dokter;
    },
  },
  {
    method: 'GET',
    path: '/perawat',
    handler: (request, h) => {
        return perawat;
    },
  },
  {
    method: 'GET',
    path: '/admin',
    handler: (request, h) => {
        return admin;
    },
  },
];

module.exports = routes;