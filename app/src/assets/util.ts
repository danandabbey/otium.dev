const findLocation = async (): Promise<any> => {
  const options = { enableHighAccuracy: true };

  try {
    let position: any = await new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
    let pos = position.coords;
    return {
      latitude: pos.latitude,
      longitude: pos.longitude,
    };
  } catch (error: any) {
    console.log(`Error: ${error.code} Message: ${error.message}`);
  }
};

const handleLocation = async (setLocation: any) => {
  setLocation(await findLocation());
};

export { handleLocation };
