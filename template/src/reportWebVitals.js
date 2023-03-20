const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*

The reportWebVitals function in this file takes a callback function (onPerfEntry) as an argument and sets up performance monitoring for the following Web Vitals metrics:

CLS (Cumulative Layout Shift): Measures the visual stability of a page.

FID (First Input Delay): Measures the time from when a user first interacts with a page to the time when the browser is able to respond to that interaction.

FCP (First Contentful Paint): Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.

LCP (Largest Contentful Paint): Measures the time from when the page starts loading to when the largest element is visible on the screen.

TTFB (Time to First Byte): Measures the time from when the browser requests a page to when it receives the first byte of information from the server.

Inside the reportWebVitals function, the code checks if onPerfEntry is a valid function. If it is, the web-vitals library is imported, and the respective metric 
gathering functions (getCLS, getFID, getFCP, getLCP, getTTFB) are called with the onPerfEntry callback. The onPerfEntry callback function will be executed for each 
metric as they become available.

You can use this function to collect and report Web Vitals metrics to an analytics service of your choice. To do so, you need to pass a callback function that handles 
reporting as the argument when calling reportWebVitals. This callback function should accept a performance entry object with the metric data and send it to the 
analytics service.

*/