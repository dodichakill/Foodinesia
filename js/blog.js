
const container = document.querySelector(".content");
function fetchData(dataBlog) {
  dataBlog.forEach((data) => {
    const card = `
      <div class="card">
              <img src="/images/blog/${data.gambar}" alt="${data.id}" loading="lazy"/>
            <div class="description">
              <a href="details/detail-blog.html">
              <h2 class="name" data-id="${data.id}">${data.judul}</h2>
            </a>
              <p>${data.deskripsi.substring(0, 100)}...
              </p>
              <p class="tanggal"><i class="fas fa-calendar-alt"></i> ${data.tanggal}</p>
            </div>
          </div>
      `;

    container.innerHTML += card;
  });
}

fetchData(dataBlog);

container.onclick = (e) => {
  // console.log(e.target);
  if (e.target.className == "name") {
    const id = e.target.getAttribute("data-id");
    localStorage.setItem("data-blog", id);
    console.log(id);
  }
};