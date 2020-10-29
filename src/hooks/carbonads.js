const loadCarbonAds = (callback) => {
  const existingScript = document.getElementById('_carbonads_js');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://cdn.carbonads.com/carbon.js?serve=CEBIV5Q7&amp;placement=staticallyio';
    script.id = '_carbonads_js';
    script.async = 'true';

    document.getElementById('ads').appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default loadCarbonAds;