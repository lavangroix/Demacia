document.addEventListener('mousemove', e => {

  const x = e.pageX;
  const y = e.pageY;

  const elm = document.querySelector('.card');
  const coords = elm.getBoundingClientRect();

  const elmX = coords.left + elm.offsetWidth / 2;
  const elmY = coords.top + elm.offsetHeight / 2;

  const angleX = (elmY - y) / 25;
  const angleY = (elmX - x) / -25;


  elm.style.transform = `rotateX(${angleX}deg)
												 rotateY(${angleY}deg)`;

  const elm1 = document.querySelector('.card1');
  const coords1 = elm1.getBoundingClientRect();

  const elm1X = coords1.left + elm1.offsetWidth / 2;
  const elm1Y = coords1.top + elm1.offsetHeight / 2;

  const angle1X = (elm1Y - y) / 25;
  const angle1Y = (elm1X - x) / -25;


  elm1.style.transform = `rotateX(${angle1X}deg)
                         rotateY(${angle1Y}deg)`;

});