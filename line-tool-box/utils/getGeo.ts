export function getGeo(): Promise<string> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const geo_text = formatGeoInfo(position);
        resolve(geo_text);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

function formatGeoInfo(position: any) {
  let geo_text = "緯度:" + position.coords.latitude + "\n";
  geo_text += "経度:" + position.coords.longitude + "\n";
  geo_text += "高度:" + position.coords.altitude + "\n";
  geo_text += "位置精度:" + position.coords.accuracy + "\n";
  geo_text += "高度精度:" + position.coords.altitudeAccuracy + "\n";
  geo_text += "移動方向:" + position.coords.heading + "\n";
  geo_text += "速度:" + position.coords.speed + "\n";

  let date = new Date(position.timestamp);

  geo_text += "取得時刻:" + date.toLocaleString() + "\n";

  return geo_text;
}
