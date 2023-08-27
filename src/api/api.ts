export async function getData() {
  const response = await fetch("https://mp3quran.net/api/v3/languages");
  const data = await response.json();
  console.log(data);
  console.log(response);

  if (response.status === 200) {
    return data;
  }
}

export async function getRadioData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(response);

  if (response.status === 200) {
    return data;
  }
}
