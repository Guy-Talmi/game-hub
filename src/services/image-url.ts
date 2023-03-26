const getCroppedImageUrl = (Url: string) => {
  const target = "media/";
  const index = Url.indexOf(target) + target.length;
  return Url.slice(0, index) + "crop/600/400/" + Url.slice(index);
};

export default getCroppedImageUrl;
