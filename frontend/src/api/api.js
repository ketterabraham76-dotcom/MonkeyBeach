// API configuration and utility functions
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Fetch drinks from API
export const fetchDrinks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/drinks`);
    if (!response.ok) throw new Error('Failed to fetch drinks');
    return await response.json();
  } catch (error) {
    console.error('Error fetching drinks:', error);
    return null;
  }
};

// Fetch rooms from API
export const fetchRooms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms`);
    if (!response.ok) throw new Error('Failed to fetch rooms');
    return await response.json();
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return null;
  }
};

// Send contact form
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    return await response.json();
  } catch (error) {
    console.error('Error sending form:', error);
    return null;
  }
};

// Make a reservation
export const makeReservation = async (reservationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData)
    });
    return await response.json();
  } catch (error) {
    console.error('Error making reservation:', error);
    return null;
  }
};