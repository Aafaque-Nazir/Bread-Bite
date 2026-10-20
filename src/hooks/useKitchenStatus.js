import { useState, useEffect } from 'react';

// Bread & Bite Kitchen Working Hours: 10:00 AM to 9:00 PM (21:00) IST
export const OPEN_HOUR = 10;
export const OPEN_MINUTE = 0;
export const CLOSE_HOUR = 21;
export const CLOSE_MINUTE = 0;

/**
 * Returns current Indian Standard Time (IST) kitchen operational status.
 * Supports URL override ?testClosed=true or ?testOpen=true for visual verification.
 */
export const getKitchenStatus = () => {
  // Check optional debug override in browser environment
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('testClosed') === 'true') {
        sessionStorage.setItem('test_kitchen_status', 'closed');
      } else if (params.get('testOpen') === 'true' || params.get('clearTest') === 'true') {
        sessionStorage.removeItem('test_kitchen_status');
      }

      const sessionOverride = sessionStorage.getItem('test_kitchen_status');
      if (sessionOverride === 'closed') {
        return {
          isOpen: false,
          openTimeStr: '10:00 AM',
          closeTimeStr: '9:00 PM',
          statusText: 'Kitchen Closed',
          subText: 'Opens daily at 10:00 AM'
        };
      }
    } catch {
      // Ignore sessionStorage issues
    }
  }

  try {
    const now = new Date();
    // Convert current time accurately to Asia/Kolkata (IST)
    const istFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });

    const parts = istFormatter.formatToParts(now);
    const hourPart = parts.find((p) => p.type === 'hour');
    const minutePart = parts.find((p) => p.type === 'minute');

    const currentHour = parseInt(hourPart?.value || '0', 10);
    const currentMinute = parseInt(minutePart?.value || '0', 10);
    const currentMinutes = currentHour * 60 + currentMinute;

    const openMinutes = OPEN_HOUR * 60 + OPEN_MINUTE; // 600 mins = 10:00 AM
    const closeMinutes = CLOSE_HOUR * 60 + CLOSE_MINUTE; // 1260 mins = 9:00 PM

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return {
      isOpen,
      currentHour,
      currentMinute,
      openTimeStr: '10:00 AM',
      closeTimeStr: '9:00 PM',
      statusText: isOpen ? 'Open Now' : 'Kitchen Closed',
      subText: isOpen ? 'Closes at 9:00 PM' : 'Opens daily at 10:00 AM'
    };
  } catch {
    // Fallback gracefully to standard hours
    return {
      isOpen: true,
      openTimeStr: '10:00 AM',
      closeTimeStr: '9:00 PM',
      statusText: 'Open Now',
      subText: '10:00 AM – 9:00 PM'
    };
  }
};

export const useKitchenStatus = () => {
  const [status, setStatus] = useState(getKitchenStatus);

  useEffect(() => {
    // Re-check every 30 seconds
    const interval = setInterval(() => {
      setStatus(getKitchenStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return status;
};

export default useKitchenStatus;
