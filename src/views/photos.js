import photo1 from '../photos/1.jpg';
import photo2 from '../photos/2.jpg';
import photo3 from '../photos/3.jpg';
import photo4 from '../photos/4.jpg';
import photo5 from '../photos/5.jpg';
import photo6 from '../photos/6.jpg';
import photo7 from '../photos/7.jpg';
import photo8 from '../photos/8.jpg';
import photo9 from '../photos/9.jpg';
import photo10 from '../photos/10.jpg';
import photo11 from '../photos/11.jpg';
import photo12 from '../photos/12.jpg';
import photo13 from '../photos/13.jpg';
import photo14 from '../photos/14.jpg';
import photo15 from '../photos/15.jpg';
import photo16 from '../photos/16.jpg';
import photo17 from '../photos/17.jpg';
import photo18 from '../photos/18.jpg';

function getPhotos() {
  const photoSource = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18];
  let photos = [];
  
  photoSource.forEach((value, key) => {
    let photo = {
      id: key+1,
      src: value,
      bigSrc:value
    };
    photos.push(photo);
  });

  return photos;
}

export default getPhotos;

// function importAll(r) {
//   let images = {};
//   r.keys().map(item => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// function getPhotos() {
//   const images = importAll(require.context('../photos', false, /\.jpg/));
//   console.log(images);
//   return images
// }

// export default getPhotos;