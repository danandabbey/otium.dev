const findLocation = async (): Promise<any> => {
  const options = { enableHighAccuracy: true };

  try {
    let position: any = await new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
    position = position.coords;
    const lat = position.latitude;
    const lon = position.longitude;
    return { latitude: lat, longitude: lon };
  } catch (error: any) {
    console.log(`Error: ${error.code} Message: ${error.message}`);
  }
};

const handleLocation = async (setLocation: any, setLoading: any) => {
  setLocation(await findLocation());
  location ? setLoading(false) : null;
};

export { handleLocation };
